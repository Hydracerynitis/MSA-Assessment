using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
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
        public async Task<Entry> AddEntrDebugy(AddEntryInputDebug input,  [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var entry = new Entry() { DayArrive = input.DayArrive, DayLeave = input.DayLeave, DestinationId = int.Parse(input.DestinationId), AppUserId = int.Parse(input.AppUserId) };
            bool interest = false;
            try
            {
                interest = Boolean.Parse(input.interest);
            }
            finally
            {
                entry.Interest = interest;
            }
            context.Entries.Add(entry);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        public async Task<Entry> EditEntryDebug(EditEntryInputDebug input,  [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var entry = await context.Entries.FindAsync(new object[] { int.Parse(input.EntryId) }, cancellationToken);
            entry.DayArrive = input.DayArrive ?? entry.DayArrive;
            entry.DayLeave = input.DayLeave ?? entry.DayLeave;
            entry.DestinationId = input.DestinationId != null? int.Parse(input.DestinationId) : entry.DestinationId;
            entry.AppUserId = input.AppUserId != null ? int.Parse(input.AppUserId) : entry.AppUserId;
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        public async Task<Entry> SubmitEditEntryDebug(SubmitEditEntryInputDebug input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var entry = await context.Entries.FindAsync(new object[] { int.Parse(input.EntryId) }, cancellationToken);
            var destination = await context.Destinations.FirstOrDefaultAsync(d => d.Address == input.Address, cancellationToken);
            if (destination == null)
            {
                destination = new Destination() { Name = input.Name, Address = input.Address };
                context.Destinations.Add(destination);
            }
            else
                destination.Name = input.Name;
            await context.SaveChangesAsync(cancellationToken);
            if (entry.DestinationId != destination.Id)
                entry.DestinationId = destination.Id;
            entry.DayArrive = input.Arrive;
            entry.DayLeave = input.Leave;
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        [Authorize]
        public async Task<Entry> EditEntry(EditEntryInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var entry = await context.Entries.FindAsync(new object[] { int.Parse(input.EntryId) }, cancellationToken);
            if (entry.AppUserId != int.Parse(appUserIdStr))
            {
                throw new GraphQLRequestException(ErrorBuilder.New().SetMessage("Not owned by student").SetCode("AUTH_NOT_AUTHORIZED").Build());
            }
            var destination = await context.Destinations.FirstOrDefaultAsync(d => d.Address == input.Address, cancellationToken);
            if (destination == null)
            {
                destination = new Destination() { Name = input.Name, Address = input.Address };
                context.Destinations.Add(destination);
            }
            else
                destination.Name = input.Name;
            await context.SaveChangesAsync(cancellationToken);
            if (entry.DestinationId != destination.Id)
                entry.DestinationId = destination.Id;
            entry.DayArrive = input.Arrive;
            entry.DayLeave = input.Leave;
            HashSet<int> closecontactId = new HashSet<int>();
            if (input.Interest == "true")
            {
                List<Entry> contacts = context.Entries.Where(e => !e.Interest && e.DestinationId == entry.DestinationId &&
                           !(e.DayLeave.CompareTo(entry.DayArrive) < 0 || e.DayArrive.CompareTo(entry.DayLeave) > 0)).ToList<Entry>();
                foreach (Entry contact in contacts)
                {
                    contact.Interest = true;
                    closecontactId.Add(contact.AppUserId);
                }
            }
            await context.SaveChangesAsync(cancellationToken);
            List<AppUser> appUser = context.AppUsers.Where(a => closecontactId.Contains(a.Id) && a.state == AppUserstate.NORMAL).ToList<AppUser>();
            appUser.ForEach(a => a.state = AppUserstate.CLOSECONTACT);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        [Authorize]
        public async Task<Entry> SubmitEntry(SubmitEntryInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var destination = await context.Destinations.FirstOrDefaultAsync(e => e.Address == input.Address, cancellationToken);
            if (destination == null)
            {
                destination = new Destination() { Name = input.Name, Address = input.Address };
                context.Destinations.Add(destination);
            }
            if (destination.Name != input.Name)
                destination.Name = input.Name;
            await context.SaveChangesAsync(cancellationToken);
            var entry = context.Entries.FirstOrDefault(e => e.DayArrive == input.Arrive && e.AppUserId == int.Parse(appUserIdStr));
            if (entry != null)
                return entry;
            entry = new Entry() { DayArrive = input.Arrive, DayLeave = input.Leave, AppUserId = int.Parse(appUserIdStr), DestinationId = destination.Id, Interest=false };
            context.Entries.Add(entry);
            HashSet<int> closecontactId = new HashSet<int>();
            if (input.Interest =="true")
            {
                List<Entry> contacts = context.Entries.Where(e => !e.Interest && e.DestinationId == entry.DestinationId &&
                           !(e.DayLeave.CompareTo(entry.DayArrive) < 0 || e.DayArrive.CompareTo(entry.DayLeave) > 0)).ToList<Entry>();
                foreach (Entry contact in contacts)
                {
                    contact.Interest = true;
                    closecontactId.Add(contact.AppUserId);
                }
            }
            await context.SaveChangesAsync(cancellationToken);
            List<AppUser> appUser = context.AppUsers.Where(a => closecontactId.Contains(a.Id) && a.state == AppUserstate.NORMAL).ToList<AppUser>();
            appUser.ForEach(a => a.state = AppUserstate.CLOSECONTACT);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
        [UseAppDbContext]
        public async Task<Entry> SubmitEntryDebug(SubmitEntryInputDebug input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var destination = await context.Destinations.FirstOrDefaultAsync(e => e.Address == input.Address, cancellationToken);
            if (destination == null)
            {
                destination = new Destination() { Name = input.Name, Address = input.Address };
                context.Destinations.Add(destination);
            }
            if (destination.Name != input.Name)
                destination.Name = input.Name;
            await context.SaveChangesAsync(cancellationToken);
            var entry = context.Entries.FirstOrDefault(e => e.DayArrive == input.Arrive && e.AppUserId== int.Parse(input.appUserId));
            if (entry != null)
                return entry;
            entry = new Entry() { DayArrive = input.Arrive, DayLeave = input.Leave, AppUserId = int.Parse(input.appUserId), DestinationId = destination.Id,Interest=false };
            context.Entries.Add(entry);
            HashSet<int> closecontactId = new HashSet<int>();
            if (input.Interest == "true")
            {
                List<Entry> contacts = context.Entries.Where(e => !e.Interest && e.DestinationId == entry.DestinationId &&
                           !(e.DayLeave.CompareTo(entry.DayArrive) < 0 || e.DayArrive.CompareTo(entry.DayLeave) > 0)).ToList<Entry>();
                foreach (Entry contact in contacts)
                {
                    contact.Interest = true;
                    closecontactId.Add(contact.AppUserId);
                }
            }
            await context.SaveChangesAsync(cancellationToken);
            List<AppUser> appUser = context.AppUsers.Where(a => closecontactId.Contains(a.Id) && a.state == AppUserstate.NORMAL).ToList<AppUser>();
            appUser.ForEach(a => a.state = AppUserstate.CLOSECONTACT);
            await context.SaveChangesAsync(cancellationToken);
            await context.SaveChangesAsync(cancellationToken);
            return entry;
        }
    }
}
