using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Model
{
    public class AppUser
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public string Github { get; set; }
        [Required]
        public AppUserstate state { get; set; }
        public ICollection<Entry> Entries { get; set; } = new List<Entry>();
    }
    public enum AppUserstate
    {
        None,
        Normal,
        CloseContact,
        Infected
    }
}
