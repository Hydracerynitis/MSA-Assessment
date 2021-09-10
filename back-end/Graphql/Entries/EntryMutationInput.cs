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
        string EntryId,
        string? DayArrive,
        string? DayLeave,
        string? DestinationId
    );
}
