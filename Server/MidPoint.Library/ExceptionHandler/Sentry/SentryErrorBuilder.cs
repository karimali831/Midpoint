using Sentry;

namespace MidPoint.Library.ExceptionHandler.Sentry
{
    public class SentryErrorBuilder : IErrorBuilder
    {
        private readonly Exception exception;
        private readonly List<SentryObject> objects = new();
        private readonly IDictionary<string, string> tags = new Dictionary<string, string>();
        private readonly SentryClient sentryClient;

        internal SentryErrorBuilder(Exception exception)
        {
            this.exception = exception;
        }
        
        private IErrorBuilder AddObject(object data, string name = null, int? maxDepth = 1)
        {
            objects.Add(new SentryObject { Data = data, Name = name, MaxDepth = maxDepth });
            return this;
        }
        
        public IErrorBuilder AddTags(IDictionary<string, string?> tags)
        {
            foreach (var property in tags.Except(tags))
            {
                if (!string.IsNullOrEmpty(property.Key))
                {
                    this.tags.Add(property);
                }
            }
            
            return this;
        }

        private SentryEvent CreateSentryEvent()
        {
            var e = new SentryEvent(exception);
            
            foreach (var t in tags)
            {
                e.SetTag(t.Key, t.Value);
            }
            AddDataToException(e.Exception, objects);
            return e;
        }

        public void Send()
        {
            var e = CreateSentryEvent();
            sentryClient.CaptureEvent(e);
        }

        private static void AddDataToException(Exception e, List<SentryObject> objects)
        {
            foreach (var o in objects)
            {
                e.Data.Add(o.Name ?? "", o.Data);
            }
        }

        private class SentryObject
        {
            public object Data { get; init; }
            public string Name { get; init; }
            public int? MaxDepth { get; set; }
        }
        
    }
}