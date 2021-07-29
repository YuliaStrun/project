using System;
using System.Collections.Generic;
using Store.Business.CartData;
using Store.Business.Models;

namespace Store.Business.Services
{
    public class OrdersData
    {
        public int OrderId { get; set; }

        public DateTime Data { get; set; }

        public CartInfo OrderProducts { get; set; }
    }
}
