using back_end.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.AppUsers
{
    public record EditSelfInput(
        string? Name,
        string? ImgUrl,
        string? state
    );
    public record LoginInput(string Code);
    public record LoginPayload(
        AppUser AppUser,
        string jwt
    );
}
