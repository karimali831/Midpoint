using Beatrice.Service.Helper;
using Beatrice.Service.Model;
using Microsoft.AspNetCore.SignalR;

namespace Beatrice.Web.Controllers.Api
{
    public class WebRTCHub : Hub
    {
        private readonly Guid _botUserId;
        private readonly string _botUserName;

        private readonly IDictionary<string, UserConnection> _connections;


        public WebRTCHub(

            IDictionary<string, UserConnection> connections)
        {
            _botUserId = Guid.NewGuid();
            _botUserName = "Bot";

            _connections = connections ?? throw new ArgumentNullException(nameof(connections));
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out var userConnection))
            {
                _connections.Remove(Context.ConnectionId);

                await Clients
                    .Group(userConnection.RoomId.ToString())
                    .SendAsync("ReceiveMessage", new ChannelMessage
                    {
                        UserId = _botUserId,
                        Name = _botUserName,
                        Message = $"{userConnection.Name} left",
                        Date = DateTime.UtcNow,
                        IsBot = true
                    });

                await SendUsersConnected(userConnection);
            }

            await base.OnDisconnectedAsync(exception);
        }

        public string ChatUserName(UserConnection uc)
        {
            var indexName = new Dictionary<string, IList<UserConnection>> {
                    { uc.Name, _connections.Values.ToList() }
                };

            return Utils.IndexedName(uc.Name, indexName);
        }

        public async Task UserStatus(bool isFocused)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out var userConnection))
            {
                userConnection.Focused = isFocused;
                await SendUsersConnected(userConnection);
            }
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.RoomId.ToString());
            _connections[Context.ConnectionId] = userConnection;

            await Clients
                .Group(userConnection.RoomId.ToString())
                .SendAsync("ReceiveMessage", new ChannelMessage
                {
                    UserId = _botUserId,
                    Name = _botUserName,
                    Message = $"{userConnection.Name} joined",
                    Date = DateTime.UtcNow,
                    IsBot = true
                });



            await SendUsersConnected(userConnection);
        }

        public async Task SendMessage(ChannelMessage dto)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out var userConnection))
            {
                await Clients
                    .Group(userConnection.RoomId.ToString())
                    .SendAsync("ReceiveMessage", dto);
                
            }
        }

        private IEnumerable<UserConnection> UsersConnected(UserConnection userConnection)
        {
            var connections = _connections.Values
                .Where(c => c.RoomId == userConnection.RoomId)
                .GroupBy(s => s)
                .SelectMany(g => g);


            return connections;
        }

        public async Task SendUsersConnected(UserConnection userConnection)
        {
            await Clients
                .Group(userConnection.RoomId.ToString())
                .SendAsync("UsersInRoom", UsersConnected(userConnection));
        }
    }
}
