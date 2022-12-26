using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beatrice.Service.Model
{
    public class ChannelMessage
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public string CreatedAt { get; set; }
        public bool IsBot { get; set; } = false;
    }
}
