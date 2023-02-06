import { createAction } from '@reduxjs/toolkit';
import { EC2Response } from '../../../api/ec2InstanceApi';

// ACTION TYPES

// ACTION CREATORS

const CreateAction = createAction('@@Instance/Create');
const CreateSuccessAction = createAction<EC2Response>('@@Instance/CreateSuccess')

export {
    CreateAction,
    CreateSuccessAction
};

