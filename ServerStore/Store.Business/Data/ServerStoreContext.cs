using System;
using Microsoft.EntityFrameworkCore;
using Store.Business.Models;

namespace Store.Business.Data
{
    public class ServerStoreContext : DbContext
    {
        public ServerStoreContext(DbContextOptions<ServerStoreContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<ProductsSize> ProductsSize { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Cart> Carts { get; set; }

        public DbSet<Order> Orders { get; set; }
    }
}
