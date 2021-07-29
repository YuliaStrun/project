using System;
using Store.Business.CartData;

namespace Store.Business.Services
{
    public interface IOrderService
    {
        void PutOrder(int cartId, DateTime data);

        OrdersData[] GetOrder(int id, int skip, int take);
    }
}
