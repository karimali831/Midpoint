export interface IAwsError {
    errors: IAwsErrorResponse[]
}

interface IAwsErrorResponse {
    message: string
}

