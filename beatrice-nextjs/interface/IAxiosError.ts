export interface IAxiosError {
    message: string
    response: IAxiosErrorResponse
}

interface IAxiosErrorRequest { }

interface IAxiosErrorResponse {
    data: IAxiosErrorData
    status: number
    request: IAxiosErrorRequest
}

interface IAxiosErrorData {
    title: string
    message: string
    errors: {}
}

