using Application.Interfaces;
using MedicineAppApi.Domain;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Security.Claims;

namespace MedicineAppApi.Infrastructure
{
    public class AppDbContext : DbContext, IApplicationDbContext
    {
        readonly ClaimsPrincipal claimsPrincipal;
        public AppDbContext(DbContextOptions<AppDbContext> options, ClaimsPrincipal claimsPrincipal = null) :
            base(options)
        {
            if (claimsPrincipal != null) this.claimsPrincipal = claimsPrincipal;
        }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<Interaction> Interactions { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
