import { EC2Response } from "../../../api/ec2InstanceApi";

export interface IInstanceState {
    instance: EC2Response | null
}

export const instanceInitialState: IInstanceState = {
    instance: null
};
