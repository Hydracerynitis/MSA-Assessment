using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Data
{
    public static class ObjectFieldDescriptionExtensions
    {
        public static IObjectFieldDescriptor UseAppDbContext<TDbContext>(this IObjectFieldDescriptor descriptor) where TDbContext : DbContext
        {
            return descriptor.UseScopedService<TDbContext>(create: s => s.GetRequiredService<IDbContextFactory<TDbContext>>().CreateDbContext(), disposeAsync: (s, c) => c.DisposeAsync());
        }
    }
}
