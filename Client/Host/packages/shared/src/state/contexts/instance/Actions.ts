import { createAction } from '@reduxjs/toolkit';
import { EC2Response } from '../../../api/ec2InstanceApi';

const TerminateAction = createAction("@@Instance/Terminate")
const CreateAction = createAction('@@Instance/Create');
const CreateSuccessAction = createAction<EC2Response>('@@Instance/CreateSuccess')

export {
    TerminateAction,
    CreateAction,
    CreateSuccessAction
};

