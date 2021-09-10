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
        public string DayArrive { get; set; }
        [Required]
        public string DayLeave { get; set; }
        [Required]
        public int DestinationId { get; set; }
        public Destination Destination { get; set; }
        [Required]
        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
