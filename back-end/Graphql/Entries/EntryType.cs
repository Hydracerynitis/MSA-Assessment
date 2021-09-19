using back_end.Data;
using back_end.Graphql.Destinations;
using back_end.Graphql.AppUsers;
using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace back_end.Graphql.Entries
{
    public class EntryType: ObjectType<Entry>
    {
        protected override void Configure(IObjectTypeDescriptor<Entry> descriptor)
        {
            descriptor.Field(e => e.Id).Type<NonNullType<IdType>>();
            descriptor.Field(e => e.DayArrive).Type<NonNullType<StringType>>();
            descriptor.Field(e => e.DayLeave).Type<NonNullType<StringType>>();
            descriptor.Field(e => e.Interest).Type<NonNullType<BooleanType>>();
            descriptor.Field(e => e.Destination).ResolveWith<Resolver>(r => r.GetDestination(default!, default!, default!)).UseDbContext<AppDbContext>().Type<NonNullType<DestinationType>>();
            descriptor.Field(e => e.AppUser).ResolveWith<Resolver>(r => r.GetAppUser(default!, default!, default!)).UseDbContext<AppDbContext>().Type<NonNullType<AppUserType>>();
        }
        private class Resolver
        {
            public async Task<Model.Destination> GetDestination(Entry entry, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
            {
                return await context.Destinations.FindAsync(new object[] { entry.DestinationId }, cancellationToken);
            }
            public async Task<AppUser> GetAppUser(Entry entry,[ScopedService] AppDbContext context, CancellationToken cancellationToken)
            {
                return await context.AppUsers.FindAsync(new object[] { entry.AppUserId }, cancellationToken);
            }
        }
    }
}
