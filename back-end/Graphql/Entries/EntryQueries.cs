using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace back_end.Graphql.Entries
{
    [ExtendObjectType(name:"Query")]
    public class EntryQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<Entry> GetEntries([ScopedService] AppDbContext context)
        {
            return context.Entries;
        }
        [UseAppDbContext]
        public Entry GetEntry([GraphQLType(typeof(NonNullType<IdType>))] string id, [ScopedService] AppDbContext context)
        {
            return context.Entries.Find(int.Parse(id));
        }
        [UseAppDbContext]
        public ICollection<Entry> GetEntriesByUserDebug([GraphQLType(typeof(NonNullType<IdType>))] string appuserid, [ScopedService] AppDbContext context)
        {
            return context.Entries.Where(e => e.AppUserId == int.Parse(appuserid)).ToArray<Entry>();
        }
        [UseAppDbContext]
        [Authorize]
        public ICollection<Entry> GetEntriesByUser(ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context)
        {
            Claim? claim = claimsPrincipal.Claims.FirstOrDefault(c => c.Type == "AppUserId");
            if (claim==null)
            {
                return new List<Entry>();
            }
            var appUserIdStr = claim.Value;
            return context.Entries.Where(e => e.AppUserId == int.Parse(appUserIdStr)).ToArray<Entry>();
        }
    }
}
