using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Model
{
    public class Destination
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = default!;
        [Required]
        public string Address { get; set; } = default!;
        public ICollection<Entry> Entries { get; set; } = new List<Entry>();
    }
}
