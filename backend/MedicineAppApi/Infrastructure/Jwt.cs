using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MedicineAppApi.Infrastructure
{
    public class Jwt
    {
        public bool? ValidateIssuer { get; set; }
        public bool? ValidateAudience { get; set; }
        public string ValidAudience { get; set; }
        public string ValidIssuer { get; set; }
        public string Secret { get; set; }
    }
}
