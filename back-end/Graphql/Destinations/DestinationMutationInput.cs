using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.Destinations
{
    public record AddDestinationInputDebug(
        string Name,
        string Address
    );
    public record EditDestinationInputDebug(
        [GraphQLType(typeof(NonNullType<IdType>))]
        string DestinationId,
        string? Name,
        string? Address
    );
}
