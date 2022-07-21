import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../../config/config';

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> { }
}

export default abstract class HttpClient {
    protected readonly api: AxiosInstance;

    public constructor(baseURL: string) {
        this.api = axios.create({
            baseURL,
        });

        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }

    private _initializeRequestInterceptor = () => {
        this.api.interceptors.request.use(
            this._handleRequest,
            this._handleError
        );
    };

    private _initializeResponseInterceptor = () => {
        this.api.interceptors.response.use(
            this._handleResponse,
            this._handleError
        );
    };

    private _handleRequest = (axiousConfig: AxiosRequestConfig) => {
        if (axiousConfig?.headers) {
            axiousConfig.headers['ApiKey'] = config.webApi.apiKey;

            return axiousConfig;
        }
        return null
    };

    private _handleResponse = ({ data }: AxiosResponse) => data;

    protected _handleError = (error: any) => Promise.reject(error);
}
