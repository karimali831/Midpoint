import { HttpStatusCode } from '../enum/HttpStatusCode'
import { IInstance } from '../models/IStream'
import { rootUrl } from '../utils/UrlHelper'
import HttpClient from './httpClient'

class ECEInstanceApi extends HttpClient {
    public constructor() {
        super(rootUrl + '/api')
    }

    public start = async (awsUid: string, hostRoomId: string) =>
        this.api.get<EC2Response>(`/ec2instance/start/${awsUid}/${hostRoomId}`)

    public get = async (instanceId: string, awsUid: string) =>
        this.api.get<Date>(`/ec2instance/get/${instanceId}/${awsUid}`)

    public terminate = async (awsUid: string) =>
        this.api.get(`/ec2instance/terminate/${awsUid}`)

    public getInstances = async (awsUid: string) =>
        this.api.get<IInstance[]>(`/ec2instance/get/${awsUid}`)
}

export interface EC2Response {
    message: string
    status: HttpStatusCode
    launchTime: Date | null
    hostRoomId: string | null
}

export const ec2InstanceApi = new ECEInstanceApi()
