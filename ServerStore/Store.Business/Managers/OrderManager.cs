using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Store.Business.Data;
using Store.Business.Models;
using Store.Business.CartData;
using Store.Business.Services;

namespace Store.Business.Manager
{
    public class OrderManager : IOrderManager
    {
        private readonly ServerStoreContext context;

        public OrderManager(ServerStoreContext context)
        {
            this.context = context;
        }

        public OrdersData[] GetOrder(int id, int skip, int take)
        {
            var cart = this.context.Orders.Where(p => p.UserId == id).ToList();
            OrdersData[] orders = new OrdersData[cart.Count];
            int j = 0;

            for (int i = 0; cart.Count > i; i++)
            {
                CartInfo orderProducts = GetInfoAboutOrder(cart[i], skip, take);
                orders[j] = new OrdersData { OrderId = cart[i].Id, Data = cart[i].Data, OrderProducts = orderProducts };

                if (skip > 0)
                {
                    skip = skip - orders[j].OrderProducts.Count;
                }

                if (skip <= 0)
                {
                    take -= orders[j].OrderProducts.Count + skip;
                }

                j++;
            }

            return orders;
        }

        public void PutOrder(int cartId, DateTime data)
        {
            var cart = this.context.Carts.First(p => p.Id == cartId);
            var order = this.context.Orders;
            var newOrder = new Order { Items = cart.Items, UserId = cartId, Data = data };
            order.Add(newOrder);
            cart.Items = "[]";
            this.context.SaveChanges();
        }

        private CartInfo GetInfoAboutOrder(Order cart, int skip, int take)
        {
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
    }
}
