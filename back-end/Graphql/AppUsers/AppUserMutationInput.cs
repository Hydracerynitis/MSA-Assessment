using back_end.Model;
using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.AppUsers
{
    public record AddAppUserInputDebug(
        string Name,
        string? ImgUrl
    );
    public record EditAppUserInputDebug(
        [GraphQLType(typeof(NonNullType<IdType>))]
        string id,
        string? Name,
        string? ImgUrl,
        string? state
    );
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
