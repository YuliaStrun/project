using System;
using Store.Business.Services;

namespace Store.Business.Manager
{
    public interface IOrderManager
    {
        void PutOrder(int cartId, DateTime data);

        OrdersData[] GetOrder(int id, int skip, int take);
    }
}
