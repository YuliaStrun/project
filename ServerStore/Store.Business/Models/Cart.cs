using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Store.Business.Models
{
    public class Cart
    {
        [Key]
        [ForeignKey("User")]
        public int Id { get; set; }

        public string Items { get; set; }

        public virtual User User { get; set; }
    }
}
