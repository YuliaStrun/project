using System;
using Store.Business.CartData;

namespace Store.Business.Services
{
    public interface ICartService
    {
        CartInfo GetCart(int id, int skip, int take);

        void PutProductToCart(int id, int productId, string size);

        void UpdateProductFromCart(int id, int productId, string size, int newNumberOfProducts);

        void DeleteProductFromCart(int id, int productId, string size);
    }
}
