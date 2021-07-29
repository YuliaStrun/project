using System;
using System.Collections.Generic;
using System.Text;
using Store.Business.Models;

namespace Store.Business.CartData
{
    public class CartProductInfo
    {
        public Product Product { get; set; }

        public List<CartItemInfo> ProductProperties { get; set; }
    }
}
