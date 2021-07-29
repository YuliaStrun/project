using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using Store.Business.Models;

namespace Store.Business.Services
{
    [JsonObject]
    [Serializable]
    public class ProductsData
    {
        public List<Product> ProductsList { get; set; }

        public int ProductsCount { get; set; }
    }
}
