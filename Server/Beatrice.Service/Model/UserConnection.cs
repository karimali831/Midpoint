using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beatrice.Service.Model
{
    public class UserConnection
    {
        public string UserId { get; set; }

        public string RoomId { get; set; }
        public string Name { get; set; }
        public bool IsGroup { get; set; }
        public string GroupName { get; set; }
        public bool Focused { get; set; }
    }
}
