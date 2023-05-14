import { Ec2InstanceStatus } from '../enum/Ec2InstanceStatus'

export interface IInstance {
    status: Ec2InstanceStatus
    launchedDate: string
    terminatedDate: string
    minutesUsed: number
    secondsUsed: number
}
