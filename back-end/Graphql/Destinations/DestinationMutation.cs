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
        public async Task<Destination> AddDestinationDebug(AddDestinationInputDebug input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var destination = new Destination() { Name = input.Name, Address = input.Address };
            context.Destinations.Add(destination);
            await context.SaveChangesAsync(cancellationToken);
            return destination;
        }
        [UseAppDbContext]
        public async Task<Destination> EditDestinationDebug(EditDestinationInputDebug input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var destination = await context.Destinations.FindAsync(new object[] { int.Parse(input.DestinationId) }, cancellationToken);
            destination.Name = input.Name ?? destination.Name;
            destination.Address = input.Address ?? destination.Address;
            await context.SaveChangesAsync(cancellationToken);
            return destination;
        }
    }
}
