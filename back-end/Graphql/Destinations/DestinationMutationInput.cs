using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.Destinations
{
    public record AddDestinationInput(
        string Name,
        string Address,
        string? interest
    );
    public record EditDestinationInput(
        [GraphQLType(typeof(NonNullType<IdType>))]
        string DestinationId,
        string? Name,
        string? Address,
        string? interest
    );
}
