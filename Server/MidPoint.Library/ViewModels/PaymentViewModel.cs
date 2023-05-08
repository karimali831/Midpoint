using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MidPoint.Library.ViewModels
{
    public class PaymentViewModel
    {
        public string Id { get; set; }
        public string AmountStr { get; set; }
        public string Status { get; set; }
        public string CardBrand { get; set; }
        public string CardLast4 { get; set; }
        public int Tokens { get; set; }
        public string Date { get; set; }

    }
}
