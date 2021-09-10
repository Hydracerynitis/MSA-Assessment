using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.Destinations
{
    public record AddDestinationInput(
        string Name,
        string Address,
        bool? interest
    );
    public record EditDestinationInput(
        string DestinationId,
        string? Name,
        string? Address,
        bool? interest
    );
}
