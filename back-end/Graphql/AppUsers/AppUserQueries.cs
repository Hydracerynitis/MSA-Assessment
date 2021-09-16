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
        public AppUser GetAppUser([GraphQLType(typeof(NonNullType<IdType>))] string id, [ScopedService] AppDbContext context)
        {
            return context.AppUsers.Find(int.Parse(id));
        }
        [UseAppDbContext]
        [Authorize]
        public AppUser GetSelf(ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context)
        {
            if (claimsPrincipal == null)
                return new AppUser { Id = 0, Name = "", ImgUrl = "", state = AppUserstate.None, Github = "" };
            var appUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            return context.AppUsers.Find(int.Parse(appUserIdStr)) ?? new AppUser {Id=0,Name="",ImgUrl="",state=AppUserstate.None, Github="" };
        }
    }
}
