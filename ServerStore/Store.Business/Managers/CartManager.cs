using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Store.Business.Data;
using Store.Business.Models;
using Store.Business.CartData;

namespace Store.Business.Manager
{
    public class CartManager : ICartManager
    {
        private readonly ServerStoreContext context;

        public CartManager(ServerStoreContext context)
        {
            this.context = context;
        }

        public CartInfo GetCart(int id, int skip, int take)
        {
            var cart = this.context.Carts.First(p => p.Id == id);
            List<CartItem> cartItems = JsonConvert.DeserializeObject<List<CartItem>>(cart.Items);

            var productProperties = cartItems.SelectMany(c => c.ProductProperties.Select(pp => new KeyValuePair<int, CartItemInfo>(c.ProductId, pp)));

            var ids = productProperties.Select(p => p.Key).Distinct().ToList();

            var products = this.context.Products.Where(p => ids.Contains(p.Id)).ToDictionary(p => p.Id, p => p);

            var fullPrice = cartItems.Sum(c => products[c.ProductId].Price * c.ProductProperties.Sum(p => p.Count));

            int count = productProperties.Count();

            productProperties = productProperties.Skip(skip).Take(take).ToList();

            var product = productProperties.GroupBy(pp => pp.Key, pp => pp.Value, (productId, properties) => new CartProductInfo { Product = products[productId], ProductProperties = properties.ToList() }).ToList();

            return new CartInfo { Products = product, Count = count, FullPrice = fullPrice };
        }

        public void PutProductToCart(int cartId, int productId, string size)
        {
            var cart = this.context.Carts.First(p => p.Id == cartId);
            List<CartItem> cartItems = JsonConvert.DeserializeObject<List<CartItem>>(cart.Items);

            if (cartItems == null)
            {
                cartItems = new List<CartItem>();
            }

            if (cartItems.FirstOrDefault(p => p.ProductId == productId) == null)
            {
                CartItemInfo itemInfo = new CartItemInfo { Size = size, Count = 1 };
                List<CartItemInfo> itemInfoList = new List<CartItemInfo> { itemInfo };
                CartItem newItem = new CartItem { ProductId = productId, ProductProperties = itemInfoList };
                cartItems.Add(newItem);
            }
            else
            {
                cartItems = UpdateCartItem(cartItems, productId, size);
            }

            var updated = JsonConvert.SerializeObject(cartItems).ToString();
            cart.Items = updated;
            this.context.SaveChanges();
        }

        public void UpdateProductFromCart(int id, int productId, string size, int newNumberOfProducts)
        {
            var cart = this.context.Carts.First(p => p.Id == id);
            List<CartItem> cartItems = JsonConvert.DeserializeObject<List<CartItem>>(cart.Items);
            CartItemInfo cartProductInfos = cartItems.First(p => p.ProductId == productId).ProductProperties.First(p => p.Size == size);
            cartProductInfos.Count = newNumberOfProducts;

            var res = JsonConvert.SerializeObject(cartItems).ToString();
            cart.Items = res;
            this.context.SaveChanges();
        }

        public void DeleteProductFromCart(int id, int productId, string size)
        {
            var cart = this.context.Carts.First(p => p.Id == id);
            List<CartItem> cartItems = JsonConvert.DeserializeObject<List<CartItem>>(cart.Items);
            CartItem cartProductInfos = cartItems.First(p => p.ProductId == productId);
            cartProductInfos.ProductProperties.RemoveAll(el => el.Size == size);

            if (cartProductInfos.ProductProperties.Count == 0)
            {
                cartItems.Remove(cartProductInfos);
            }

            var res = JsonConvert.SerializeObject(cartItems).ToString();
            cart.Items = res;
            this.context.SaveChanges();
        }

        private List<CartItem> UpdateCartItem(List<CartItem> cartItems, int productId, string size)
        {
            CartItemInfo itemWithSize = cartItems.First(p => p.ProductId == productId).ProductProperties.FirstOrDefault(p => p.Size == size);

            if (itemWithSize == null)
            {
                itemWithSize = new CartItemInfo { Size = size, Count = 1 };
                cartItems.First(p => p.ProductId == productId).ProductProperties.Add(itemWithSize);
            }
            else
            {
                itemWithSize.Count++;
            }

            return cartItems;
        }
    }
}
