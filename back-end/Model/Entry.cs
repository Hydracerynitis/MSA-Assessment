using HotChocolate;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Model
{
    public class Entry
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string DayArrive { get; set; } = default!;
        [Required]
        public string DayLeave { get; set; } = default!;
        public bool Interest { get; set; } = false;
        [Required]
        [GraphQLIgnore]
        public int DestinationId { get; set; }
        public Destination Destination { get; set; } = default!;
        [Required]
        [GraphQLIgnore]
        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; } = default!;
    }
}
