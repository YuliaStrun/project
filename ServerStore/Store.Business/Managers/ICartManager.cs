using System;
using System.Collections.Generic;
using System.Text;
using Store.Business.CartData;

namespace Store.Business.Manager
{
    public interface ICartManager
    {
        CartInfo GetCart(int id, int skip, int take);

        void PutProductToCart(int id, int productId, string size);

        void UpdateProductFromCart(int id, int productId, string size, int newNumberOfProducts);

        void DeleteProductFromCart(int id, int productId, string size);
    }
}
