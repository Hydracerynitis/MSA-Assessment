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

namespace back_end.Graphql.Destinations
{
    public class DestinationType: ObjectType<Destination>
    {
        protected override void Configure(IObjectTypeDescriptor<Destination> descriptor)
        {
            descriptor.Field(l => l.Id).Type<NonNullType<IdType>>();
            descriptor.Field(l => l.Name).Type<NonNullType<StringType>>();
            descriptor.Field(l => l.Address).Type<NonNullType<StringType>>();
            descriptor.Field(l => l.Interest).Type<NonNullType<BooleanType>>();
            descriptor.Field(l => l.Entries).ResolveWith<Resolver>(r => r.GetEntries(default!, default!, default!)).UseDbContext<AppDbContext>().Type<NonNullType<ListType<NonNullType<EntryType>>>>();

        }
        private class Resolver
        {
            public async Task<IEnumerable<Entry>> GetEntries(Destination Destination, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
            {
                return await context.Entries.Where(e => e.DestinationId == Destination.Id).ToArrayAsync(cancellationToken);
            }
        }
    }
}
