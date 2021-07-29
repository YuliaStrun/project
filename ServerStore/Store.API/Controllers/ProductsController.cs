using System;
using System.Net;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using Store.Business.Models;
using Store.Business.Services;

namespace ServerStore.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductsService productsService;

        public ProductsController(ProductsService productsService)
        {
            this.productsService = productsService;
        }

        /// <summary>
        /// Gets products for current page and productsCount
        /// </summary>
        /// <returns>
        /// Needed products and productsCount
        /// </returns>
        [HttpGet]
        public JsonResult GetAllProducts(int skip, int take, int? minPrice, int? maxPrice, string size)
        {
            ProductsData products = this.productsService.GetAllProducts(skip, take, minPrice, maxPrice, size);
            return this.Json(products);
        }

        /// <summary>
        /// Gets the product by id and its sizes
        /// </summary>
        /// <returns>
        /// The product and its sizes
        /// </returns>
        [Route("{id}")]
        [HttpGet]
        public ActionResult GetProductById(int id)
        {
            Product product = this.productsService.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return this.Json(product);
        }
    }
}