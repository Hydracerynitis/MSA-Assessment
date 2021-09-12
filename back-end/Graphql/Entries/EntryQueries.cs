using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
