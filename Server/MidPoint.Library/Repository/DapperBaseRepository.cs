using System.Data;
using Dapper;
using Microsoft.Data.SqlClient;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.ExceptionHandler.Sentry;
using MidPoint.Library.Helper;

namespace MidPoint.Library.Repository
{
    public interface IDapperBaseRepository
    {
        Task<IEnumerable<T>> QueryAsync<T>(string query, object? parameters = null);
        Task<bool> ExecuteAsync(string query, object? parameters = null);
        Task<T> ExecuteScalarAsync<T>(string query, object? parameters = null);
        Task<T> QueryFirstOrDefaultAsync<T>(string query, object? parameters = null);
        Task<T> QuerySingleOrDefaultAsync<T>(string query, object? parameters = null);
        Task<int> ExecuteScalarAsync(string query, object parameters);
    }

    public abstract  class DapperBaseRepository : IDapperBaseRepository, IDisposable
    {
        private readonly IDbConnection _dbConnection;
        private readonly IExceptionHandlerService exceptionHandlerService;

        protected DapperBaseRepository(IConfigHelper config)
        {
            _dbConnection = new SqlConnection(config.SqlConnectionString());
            exceptionHandlerService = new ExceptionHandlerService();
        }


        public async Task<IEnumerable<T>> QueryAsync<T>(string query, object parameters = null)
        {
            try
            {
                return await _dbConnection.QueryAsync<T>(query, parameters);
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<bool> ItemExistsAsync(string query, object parameters = null)
        {
            try
            {
                return await _dbConnection.QueryFirstOrDefaultAsync<bool>(query, parameters);
                
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<T> QueryFirstOrDefaultAsync<T>(string query, object parameters = null)
        {
            try
            {
                return await _dbConnection.QueryFirstOrDefaultAsync<T>(query, parameters);
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<T> QuerySingleOrDefaultAsync<T>(string query, object parameters = null)
        {
            try
            {
                return await _dbConnection.QuerySingleOrDefaultAsync<T>(query, parameters);
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<int> ExecuteScalarAsync(string query, object parameters)
        {
            try
            {
                return await _dbConnection.ExecuteScalarAsync<int>(query, parameters);
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<bool> ExecuteAsync(string query, object parameters = null)
        {

            try
            {
                await _dbConnection.ExecuteAsync(query, parameters);
                return true;
            }
            catch (SqlException exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<T> ExecuteScalarAsync<T>(string query, object parameters = null)
        {

            try
            {
                return await _dbConnection.ExecuteScalarAsync<T>(query, parameters);
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public async Task<T> QuerySingleAsync<T>(string query, object parameters = null)
        {
            try
            {
                return await _dbConnection.QuerySingleAsync<T>(query, parameters);
                
            }
            catch (Exception exp)
            {
                exceptionHandlerService.ReportException(exp).Send();
                throw new Exception(exp.Message);
            }
        }

        public void Dispose()
        {
            _dbConnection.Dispose();
        }
    }
}