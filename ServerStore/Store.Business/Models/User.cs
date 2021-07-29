using System;
using System.Collections.Generic;
using System.Text;

namespace Store.Business.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public virtual Cart Cart { get; set; }
    }
}
