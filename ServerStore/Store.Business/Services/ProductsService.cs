using System;
using System.Collections.Generic;
using Store.Business.Models;
using Store.Business.Manager;
using Store.Business.Data;
using Store.Business.Services;

namespace Store.Business.Services
{
    public class ProductsService : IProductsService
    {
        private readonly ServerStoreContext context;
        private readonly ProductsManager productsManager;

        public ProductsService(ServerStoreContext context)
        {
            this.context = context;
            this.productsManager = new ProductsManager(this.context);
        }

        public ProductsData GetAllProducts(int skip, int take, int? minPrice, int? maxPrice, string size)
        {
            var products = this.productsManager.GetAllProducts(skip, take, minPrice, maxPrice, size);
            int productsCount = this.productsManager.GetProductsCount(minPrice, maxPrice, size);

            return new ProductsData { ProductsList = products, ProductsCount = productsCount };
        }

        public Product GetProductById(int id)
        {
            var product = this.productsManager.GetProductById(id);

            return product;
        }
    }
}
