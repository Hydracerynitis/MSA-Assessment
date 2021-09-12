using back_end.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<AppUser> AppUsers { get; set; } = default!;
        public DbSet<Destination> Destinations { get; set; } = default!;
        public DbSet<Entry> Entries { get; set; } = default!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Entry>().HasOne(e => e.AppUser).WithMany(u => u.Entries).HasForeignKey(e => e.AppUserId).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Entry>().HasOne(e => e.Destination).WithMany(l => l.Entries).HasForeignKey(e => e.DestinationId);
        }
    }
}
