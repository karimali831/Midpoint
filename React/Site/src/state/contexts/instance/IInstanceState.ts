import { EC2Response } from '../../../api/ec2InstanceApi'
import { IInstance } from '../../../models/IStream'

export interface IInstanceState {
    instance: EC2Response | null
    instances: IInstance[]
    instanceFailure: string | null
    instancesFailure: string | null
    loadingInstances: boolean
}

export const instanceInitialState: IInstanceState = {
    instance: null,
    instances: [],
    instanceFailure: null,
    instancesFailure: null,
    loadingInstances: false
}
