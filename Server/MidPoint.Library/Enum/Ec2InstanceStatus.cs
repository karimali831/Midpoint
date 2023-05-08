namespace MidPoint.Library.Enum
{
    public enum Ec2InstanceStatus
    {
        Pending,
        Running = 16,
        ShuttingDown = 32,
        Terminated = 48,
        Stopping = 64,
        Stopped = 80
    }
}
