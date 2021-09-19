﻿using back_end.Data;
using back_end.Model;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Octokit;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Reflection;
using HotChocolate.AspNetCore.Authorization;

namespace back_end.Graphql.AppUsers
{
    [ExtendObjectType(name: "Mutation")]
    public class AppUserMutation
    {
        [UseAppDbContext]
        public async Task<AppUser> AddAppUserDebug(AddAppUserInputDebug input,[ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var appUser = new AppUser() { Name = input.Name, ImgUrl = input.ImgUrl ?? "", state=AppUserstate.NORMAL,Github="" };
            context.AppUsers.Add(appUser);
            await context.SaveChangesAsync(cancellationToken);
            return appUser;
        }
        [UseAppDbContext]
        public async Task<AppUser> EditAppUserAsyncDebug(EditAppUserInputDebug input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var AppUser = await context.AppUsers.FindAsync(new object[] { int.Parse(input.id) }, cancellationToken);
            AppUser.Name = input.Name ?? AppUser.Name;
            AppUser.ImgUrl = input.ImgUrl ?? AppUser.ImgUrl;
            AppUserstate state = AppUser.state;
            try
            {
                state = (AppUserstate)Enum.Parse(typeof(AppUserstate), input.state);
            }
            finally
            {
                AppUser.state = state;
            }
            //context.AppUsers.Add(AppUser);
            await context.SaveChangesAsync(cancellationToken);
            return AppUser;
        }
        [UseAppDbContext]
        [Authorize]
        public async Task<AppUser> EditSelfAsync(EditSelfInput input, ClaimsPrincipal claimsPrincipal, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var AppUserIdStr = claimsPrincipal.Claims.First(c => c.Type == "AppUserId").Value;
            var AppUser = await context.AppUsers.FindAsync(new object[] { int.Parse(AppUserIdStr) }, cancellationToken);
            AppUser.Name = input.Name ?? AppUser.Name;
            AppUser.ImgUrl = input.ImgUrl ?? AppUser.ImgUrl;
            AppUserstate state = AppUser.state;
            try
            {
                state = (AppUserstate)Enum.Parse(typeof(AppUserstate), input.state);
            }
            finally
            {
                AppUser.state = state;
            }
            //context.AppUsers.Add(AppUser);
            await context.SaveChangesAsync(cancellationToken);
            return AppUser;
        }
        [UseAppDbContext]
        public async Task<LoginPayload> LoginAsync(LoginInput input, [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var client = new GitHubClient(new ProductHeaderValue("Covid19-Contact-Tracer"));

            var request = new OauthTokenRequest(Startup.Configuration["Github:ClientId"], Startup.Configuration["Github:ClientSecret"], input.Code);
            var tokenInfo = await client.Oauth.CreateAccessToken(request);
            if (tokenInfo.AccessToken == null)
            {
                throw new GraphQLRequestException(ErrorBuilder.New()
                    .SetMessage("Bad code")
                    .SetCode("AUTH_NOT_AUTHENTICATED")
                    .Build());
            }
            client.Credentials = new Credentials(tokenInfo.AccessToken);
            var User = await client.User.Current();
            var appuser = await context.AppUsers.FirstOrDefaultAsync(u => u.Github!=null && u.Github == User.Login, cancellationToken);
            if (appuser == null)
            {
                appuser = new AppUser{Name = User.Name ?? User.Login,Github = User.Login,ImgUrl = User.AvatarUrl,state = AppUserstate.NORMAL};
                context.AppUsers.Add(appuser);
                await context.SaveChangesAsync(cancellationToken);
            }
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Startup.Configuration["JWT:Secret"]));
            var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>{new Claim("AppUserId", appuser.Id.ToString())};
            var jwtToken = new JwtSecurityToken("Hydracerynitis-ContactTracer", "Hydracerynitis-AppUser", claims,expires: DateTime.Now.AddDays(90),signingCredentials: credentials);
            string token = new JwtSecurityTokenHandler().WriteToken(jwtToken);
            return new LoginPayload(appuser, token);
        }
    }
}
