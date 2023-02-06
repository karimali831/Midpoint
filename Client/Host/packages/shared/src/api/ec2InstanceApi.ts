import { HttpStatusCode } from "../enum/HttpStatusCode";
import { rootUrl } from "../utils/UrlHelper";
import HttpClient from "./httpClient";

class ECEInstanceApi extends HttpClient {
    public constructor() {
        super(rootUrl + "/api");
    }

    public start = async () => 
        this.api.get<EC2Response>('/ec2instance/start');
    

}

export interface EC2Response {
    message: string
    status: HttpStatusCode
}

export const ec2InstanceApi = new ECEInstanceApi();
