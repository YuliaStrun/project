using System;
using System.Collections.Generic;
using System.Text;

namespace Store.Business.CartData
{
    public class CartItem
    {
        public int ProductId { get; set; }

        public List<CartItemInfo> ProductProperties { get; set; }
    }
}
