using System;
using Microsoft.AspNetCore.Mvc;
using Store.Business.Services;
using Store.Business.CartData;

namespace ServerStore.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly CartService cartService;

        public CartController(CartService cartService)
        {
            this.cartService = cartService;
        }

        [HttpGet]
        public CartInfo GetCart(int id, int skip, int take)
        {
            CartInfo cart = this.cartService.GetCart(id, skip, take);

            return cart;
        }

        [HttpPut]
        public void PutProductToCart(int id, int productId, string size)
        {
            this.cartService.PutProductToCart(id, productId, size);
        }

        [HttpPatch]
        public void UpdateProductFromCart(int id, int productId, string size, int newNumberOfProducts)
        {
            this.cartService.UpdateProductFromCart(id, productId, size, newNumberOfProducts);
        }

        [HttpDelete]
        public void DeleteProductFromCart(int id, int productId, string size)
        {
            this.cartService.DeleteProductFromCart(id, productId, size);
        }
    }
}