export interface IAxiosError {
    name: string
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
    errors: {}
}

