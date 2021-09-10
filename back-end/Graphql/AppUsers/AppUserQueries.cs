using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.Model;
using HotChocolate;
using back_end.Data;
using HotChocolate.AspNetCore.Authorization;
using System.Security.Claims;

namespace back_end.Graphql.AppUsers
{
    [ExtendObjectType(name:"Query")]
    public class AppUserQueries
    {
        [UseAppDbContext]
        [UsePaging]
        public IQueryable<AppUser> GetAppUsers([ScopedService] AppDbContext context)
        {
            return context.AppUsers;
        }
        public AppUser GetAppUser(int Id,[ScopedService] AppDbContext context)
        {
            return context.AppUsers.Find(Id);
        }
        [UseAppDbContext]
        [Authorize]
        public AppUser GetSelf(ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context)
        {
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            return context.AppUsers.Find(int.Parse(appUserIdStr));
        }
    }
}
