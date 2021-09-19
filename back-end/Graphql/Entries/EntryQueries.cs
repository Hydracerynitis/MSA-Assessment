using back_end.Data;
using back_end.Model;
using HotChocolate;
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
        public ICollection<Entry> GetEntriesByUser(ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            return context.Entries.Where(e => e.AppUserId == int.Parse(appUserIdStr)).ToArray<Entry>();
        }
    }
}
