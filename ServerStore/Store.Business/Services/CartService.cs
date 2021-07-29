using System;
using System.Collections.Generic;
using Store.Business.Manager;
using Store.Business.Data;
using Store.Business.CartData;

namespace Store.Business.Services
{
    public class CartService : ICartService
    {
        private readonly ServerStoreContext context;
        private readonly CartManager cartManager;

        public CartService(ServerStoreContext context)
        {
            this.context = context;
            this.cartManager = new CartManager(this.context);
        }

        public CartInfo GetCart(int id, int skip, int take)
        {
            CartInfo cart = this.cartManager.GetCart(id, skip, take);

            return cart;
        }

        public void PutProductToCart(int id, int productId, string size)
        {
            this.cartManager.PutProductToCart(id, productId, size);
        }

        public void UpdateProductFromCart(int id, int productId, string size, int newNumberOfProducts)
        {
            this.cartManager.UpdateProductFromCart(id, productId, size, newNumberOfProducts);
        }

        public void DeleteProductFromCart(int id, int productId, string size)
        {
            this.cartManager.DeleteProductFromCart(id, productId, size);
        }
    }
}
