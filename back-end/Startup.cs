using back_end.Data;
using back_end.Graphql.Entries;
using back_end.Graphql.Destinations;
using back_end.Graphql.AppUsers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace back_end
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static IConfiguration Configuration { get; private set; } = default!;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddPooledDbContextFactory<AppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters =
                        new TokenValidationParameters
                        {
                            ValidIssuer = "Hydracerynitis-ContactTracer",
                            ValidAudience = "Hydracerynitis-AppUser",
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = signingKey
                        };
                });
            services.AddAuthorization();
            services.AddGraphQLServer()
                .AddQueryType(q => q.Name("Query"))
                    .AddTypeExtension<AppUserQueries>().AddTypeExtension<DestinationQueries>().AddTypeExtension<EntryQueries>()
                .AddMutationType(m => m.Name("Mutation"))
                    .AddTypeExtension<AppUserMutation>().AddTypeExtension<EntryMutation>().AddTypeExtension<DestinationMutation>()
                .AddType<AppUserType>().AddType<DestinationType>().AddType<EntryType>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGraphQL();
            });
        }
    }
}
