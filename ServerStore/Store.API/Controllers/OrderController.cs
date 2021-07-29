using System;
using System.Net;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using Store.Business.CartData;
using Store.Business.Models;
using Store.Business.Services;

namespace ServerStore.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly OrderService orderService;

        public OrderController(OrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpGet]
        public OrdersData[] GetOrder(int id, int skip, int take)
        {
            return this.orderService.GetOrder(id, skip, take);
        }

        [HttpPut]
        public void PutOrder(int id, DateTime data)
        {
            this.orderService.PutOrder(id, data);
        }
    }
}