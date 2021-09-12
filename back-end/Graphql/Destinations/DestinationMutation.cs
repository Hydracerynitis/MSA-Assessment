using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace back_end.Graphql.Destinations
{
    [ExtendObjectType(name:"Mutation")]
    public class DestinationMutation
    {
        [UseAppDbContext]
        public async Task<Destination> AddDestination(AddDestinationInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var destination = new Destination() { Name = input.Name, Address = input.Address, Interest = input.interest ?? false };
            context.Destinations.Add(destination);
            await context.SaveChangesAsync(cancellationToken);
            return destination;
        }
        public async Task<Destination> EditDestination(EditDestinationInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var destination = await context.Destinations.FindAsync(new object[] { int.Parse(input.DestinationId) }, cancellationToken);
            destination.Name = input.Name ?? destination.Name;
            destination.Address = input.Address ?? destination.Address;
            destination.Interest = input.interest ?? destination.Interest;
            context.Destinations.Add(destination);
            await context.SaveChangesAsync(cancellationToken);
            return destination;
        }
    }
}
