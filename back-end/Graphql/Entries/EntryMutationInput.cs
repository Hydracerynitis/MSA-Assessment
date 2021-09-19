using HotChocolate;
using HotChocolate.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Graphql.Entries
{
    public record AddEntryInput(
        string DayArrive,
        string DayLeave,
        string DestinationId
    );
    public record EditEntryInput(
        [GraphQLType(typeof(NonNullType<IdType>))]
        string EntryId,
        string? DayArrive,
        string? DayLeave,
        string? DestinationId
    );
    public record SubmitEntryInput(
        string Name,
        string Address,
        string Arrive,
        string Leave,
        string Interest
    );
    public record SubmitEntryDebugInput(
        [GraphQLType(typeof(NonNullType<IdType>))]
        string appUserId,
        string Name,
        string Address,
        string Arrive,
        string Leave,
        string Interest
    );
}
