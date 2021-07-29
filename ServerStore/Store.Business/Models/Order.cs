using System;
using Microsoft.EntityFrameworkCore;

namespace Store.Business.Models
{
    public class Order
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public DateTime Data { get; set; }

        public string Items { get; set; }

        public virtual User User { get; set; }
    }
}
