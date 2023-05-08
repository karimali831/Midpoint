export interface IApiDataResponse<T> {
    success: boolean
    errorMsg: string
    data: T
}

export interface IApiResponse {
    success: boolean
    errorMsg: string
}