using Microsoft.EntityFrameworkCore;

namespace Store.Business.Models
{
    public class ProductsSize
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public string Size { get; set; }

        public virtual Product Product { get; set; }
    }
}
