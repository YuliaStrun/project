using System;
using System.Collections.Generic;
using System.Text;
using Store.Business.Models;
using Store.Business.Services;

namespace Store.Business.Manager
{
    public interface IProductsManager
    {
        int GetProductsCount(int? minPrice, int? maxPrice, string size, string searchTerm);

        List<Product> GetAllProducts(int skip, int take, int? minPrice, int? maxPrice, string size, string sortDirection, string searchTerm);

        Product GetProductById(int id);
    }
}
