using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface IInstanceService
    {
        Task CreateAsync(Instance model);
        Task<Instance> GetAsync(int id);
        Task SetTerminatedAsync(string instanceId);
        Task<IList<InstanceLog>> GetCompletedAsync(string awsUid, bool activeOnly);
    }

    public class InstanceService : IInstanceService
    {
        private readonly IInstanceRepository _instanceRepository;
        
        public InstanceService(IInstanceRepository instanceRepository)
        {
            _instanceRepository = instanceRepository;
        }
        
        public async Task CreateAsync(Instance model)
        {
            await _instanceRepository.CreateAsync(model);
        }

        public async Task<Instance> GetAsync(int id)
        {
            return await _instanceRepository.GetAsync(id);
        }

        public Task SetTerminatedAsync(string instanceId)
        {
            return _instanceRepository.SetTerminatedAsync(instanceId);
        }

        public Task<IList<InstanceLog>> GetCompletedAsync(string awsUid, bool activeOnly)
        {
            return _instanceRepository.GetCompletedAsync(awsUid, activeOnly);
        }
    }
}