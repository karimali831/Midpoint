import { createAction } from '@reduxjs/toolkit'
import { EC2Response } from '../../../api/ec2InstanceApi'
import { IInstance } from '../../../models/IStream'

const TerminateAction = createAction('@@Instance/Terminate')
const StartingAction = createAction('@@Instance/Starting')
const GetInstancesAction = createAction('@@Instance/GetInstances')
const GetInstancesSuccessAction = createAction<IInstance[]>(
    '@@Instance/GetInstancesSuccess'
)
const GetInstancesFailureAction = createAction<string>(
    '@@Instance/GetInstancesFailure'
)
const CreateAction = createAction('@@Instance/Create')
const CreateSuccessAction = createAction<EC2Response>(
    '@@Instance/CreateSuccess'
)
const CreateFailureAction = createAction<string>('@@Instance/CreateFailure')

export {
    TerminateAction,
    CreateAction,
    CreateSuccessAction,
    CreateFailureAction,
    GetInstancesAction,
    GetInstancesFailureAction,
    GetInstancesSuccessAction,
    StartingAction
}
