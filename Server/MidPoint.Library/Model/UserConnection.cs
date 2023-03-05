using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MidPoint.Library.Model
{
    public class UserConnection
    {
        public string UserId { get; set; }

        public string RoomId { get; set; }
        public string DisplayName { get; set; }
        public string RoomName { get; set; }
        public bool Focused { get; set; }
    }
}
