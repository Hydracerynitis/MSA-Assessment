using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace back_end.Graphql.Entries
{
    [ExtendObjectType(name:"Mutation")]
    public class EntryMutation
    {
        [UseAppDbContext]
        [Authorize]
        public async Task<Entry> AddEntry(AddEntryInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var entry = new Entry() { DayArrive = input.DayArrive, DayLeave = input.DayLeave, DestinationId = int.Parse(input.DestinationId), AppUserId = int.Parse(appUserIdStr) };
            context.Entries.Add(entry);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        public async Task<Entry> EditEntry(EditEntryInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var entry = await context.Entries.FindAsync(new object[] { int.Parse(input.EntryId) }, cancellationToken);
            if (entry.AppUserId != int.Parse(appUserIdStr))
            {
                throw new GraphQLRequestException(ErrorBuilder.New().SetMessage("Not owned by student").SetCode("AUTH_NOT_AUTHORIZED").Build());
            }
            entry.DayArrive = input.DayArrive ?? entry.DayArrive;
            entry.DayLeave = input.DayLeave ?? entry.DayLeave;
            if (input.DestinationId != null) {
                entry.Destination = await context.Destinations.FindAsync(new object[] { int.Parse(input.DestinationId), cancellationToken });
                entry.DestinationId = entry.Destination.Id;
            }
            context.Entries.Add(entry);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        public async Task<Entry> SubmitEntry(SubmitEntryInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var destination = await context.Destinations.FirstOrDefaultAsync(e => e.Address == input.Address, cancellationToken );
            if (destination == null)
            {
                destination = new Destination() { Name = input.Name, Address = input.Address };
                bool interest = false;
                try
                {
                    interest = Boolean.Parse(input.Interest);
                }
                finally
                {
                    destination.Interest = interest;
                }
                context.Destinations.Add(destination);
            }
            if (destination.Name != input.Name)
                destination.Name = input.Name;
            await context.SaveChangesAsync(cancellationToken);
            var entry = new Entry() { DayArrive = input.Arrive, DayLeave = input.Leave, AppUserId = int.Parse(appUserIdStr), DestinationId = destination.Id };
            context.Entries.Add(entry);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
    }
}
