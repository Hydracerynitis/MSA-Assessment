using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.Destinations
{
    [ExtendObjectType(name: "Query")]
    public class DestinationQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Destination> GetDestinations([ScopedService] AppDbContext context)
        {
            return context.Destinations;
        }
        [UseAppDbContext]
        public Destination GetDestination([GraphQLType(typeof(NonNullType<IdType>))] string id, [ScopedService] AppDbContext context)
        {
            return context.Destinations.Find(int.Parse(id));
        }
    }
}
