using System;
using System.Collections.Generic;
using System.Text;
using Store.Business.Models;
using Store.Business.Services;
using static Store.Business.Services.ProductsService;

namespace Store.Business.Services
{
    public interface IProductsService
    {
        ProductsData GetAllProducts(int skip, int take, int? minPrice, int? maxPrice, string size);

        Product GetProductById(int id);
    }
}
