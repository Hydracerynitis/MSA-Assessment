using back_end.Data;
using back_end.Graphql.Entries;
using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace back_end.Graphql.AppUsers
{
    public class AppUserType: ObjectType<AppUser>
    {
        protected override void Configure(IObjectTypeDescriptor<AppUser> descriptor)
        {
            descriptor.Field(u => u.Id).Type<NonNullType<IdType>>();
            descriptor.Field(u => u.Name).Type<NonNullType<StringType>>();
            descriptor.Field(u => u.ImgUrl).Type<NonNullType<StringType>>();
            descriptor.Field(u => u.state).Type<NonNullType<EnumType<AppUserstate>>>();
            descriptor.Field(u => u.Entries).ResolveWith<Resolver>(r => r.GetEntries(default!, default!, default!)).UseDbContext<AppDbContext>().Type<NonNullType<ListType<NonNullType<EntryType>>>>();
        }
        private class Resolver
        {
            public async Task<IEnumerable<Entry>> GetEntries(AppUser AppUser,[ScopedService] AppDbContext context,CancellationToken cancellationToken)
            {
                return await context.Entries.Where(e => e.AppUserId == AppUser.Id).ToArrayAsync(cancellationToken);
            }
        }
    }
}
