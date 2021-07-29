using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Store.Business.Models
{
    public class Product
    {
        public Product()
        {
            ProductSizes = new List<ProductsSize>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Price { get; set; }

        public string Image { get; set; }

        public string Color { get; set; }

        public virtual ICollection<ProductsSize> ProductSizes { get; set; }
    }
}