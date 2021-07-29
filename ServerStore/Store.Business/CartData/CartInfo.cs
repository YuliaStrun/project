using System;
using System.Collections.Generic;

namespace Store.Business.CartData
{
    public class CartInfo
    {
        public List<CartProductInfo> Products { get; set; }

        public int Count { get; set; }

        public int FullPrice { get; set; }
    }
}
