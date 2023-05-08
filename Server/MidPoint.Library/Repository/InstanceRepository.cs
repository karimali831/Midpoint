﻿using MidPoint.Library.Enum;
using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface IInstanceRepository
    {
        Task CreateAsync(Instance model);
        Task<Instance> GetAsync(int id);
        Task SetTerminatedAsync(string instanceId);
        Task<IEnumerable<Instance>> GetAllAsync(string awsUid, bool activeOnly);
    }

    public class InstanceRepository : DapperBaseRepository, IInstanceRepository
    {
        private const string Table = "[dbo].[Instances]";
        private static readonly string[] Fields = typeof(Instance).SqlFields();

        public InstanceRepository(IConfigHelper config) : base(config)
        {
        }

        public async Task CreateAsync(Instance model)
        {
            await ExecuteAsync(DapperHelper.INSERT(Table, Fields), model);
        }

        public async Task<Instance> GetAsync(int id)
        {
            return await QuerySingleAsync<Instance>($"{DapperHelper.SELECT(Table, Fields)} WHERE Id = @id AND Active = 1",
                new { id });
        }

        public async Task SetTerminatedAsync(string instanceId)
        {
            await ExecuteAsync($"UPDATE {Table} SET Status = @status, TerminatedDate = GETDATE() WHERE Id = @instanceId", 
                new
                {
                    status = Ec2InstanceStatus.Terminated,
                    instanceId
                });
        }

        public async Task<IEnumerable<Instance>> GetAllAsync(string awsUid, bool activeOnly)
        {
            return await QueryAsync<Instance>($"{DapperHelper.SELECT(Table, Fields)} WHERE AwsUid = @awsUid {(activeOnly ? "AND Active = 1" : "")}", 
                new { awsUid });
        }
        
    }
}