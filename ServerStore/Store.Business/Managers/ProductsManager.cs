﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Store.Business.Data;
using Store.Business.Models;
using Store.Business.Services;

namespace Store.Business.Manager
{
    public class ProductsManager : IProductsManager
    {
        private readonly ServerStoreContext context;

        public ProductsManager(ServerStoreContext context)
        {
            this.context = context;
        }

        public int GetProductsCount(int? minPrice, int? maxPrice, string size, string searchTerm)
        {
            var query = this.context.Products.Include(p => p.ProductSizes).AsQueryable();

            if (!string.IsNullOrEmpty(size))
            {
                query = query.Where(p => p.ProductSizes.Any(ps => ps.Size == size));
            }

            if (maxPrice.HasValue)
            {
                query = query.Where(p => p.Price <= maxPrice.Value);
            }

            if (minPrice.HasValue)
            {
                query = query.Where(p => p.Price >= minPrice.Value);
            }

            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Name.Contains(searchTerm));
            }

            return query.ToList().Count;
        }

        public List<Product> GetAllProducts(int skip, int take, int? minPrice, int? maxPrice, string size, string sortDirection, string searchTerm)
        {
            var query = this.context.Products.Include(p => p.ProductSizes).AsQueryable();

            if (!string.IsNullOrEmpty(size))
            {
                query = query.Where(p => p.ProductSizes.Any(ps => ps.Size == size));
            }

            if (maxPrice.HasValue)
            {
                query = query.Where(p => p.Price <= maxPrice.Value);
            }

            if (minPrice.HasValue)
            {
                query = query.Where(p => p.Price >= minPrice.Value);
            }

            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Name.Contains(searchTerm));
            }

            if (!string.IsNullOrEmpty(sortDirection) && sortDirection == "ABS")
            {
                query = query.OrderBy(u => u.Price);
            }
            else
            {
                query = query.OrderByDescending(u => u.Price);
            }

            return query.Skip(skip).Take(take).ToList();
        }

        public Product GetProductById(int id)
        {
            return this.context.Products.Include(p => p.ProductSizes).FirstOrDefault(p => p.Id == id);
        }
    }
}
