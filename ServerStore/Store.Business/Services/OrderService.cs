using System;
using System.Collections.Generic;
using Store.Business.Manager;
using Store.Business.Data;
using Store.Business.CartData;

namespace Store.Business.Services
{
    public class OrderService : IOrderService
    {
        private readonly ServerStoreContext context;
        private readonly OrderManager orderManager;

        public OrderService(ServerStoreContext context)
        {
            this.context = context;
            this.orderManager = new OrderManager(this.context);
        }

        public OrdersData[] GetOrder(int id, int skip, int take)
        {
            return this.orderManager.GetOrder(id, skip, take);
        }

        public void PutOrder(int cartId, DateTime data)
        {
            this.orderManager.PutOrder(cartId, data);
        }
    }
}
