
import { UrlHelper } from "../../helper/UrlHelper";
import HttpClient from "./httpClient";

class RainwayApi extends HttpClient {
    public constructor() {
        super(`${UrlHelper.ApiUrl}/api/rainway`);
    }

    public start = async () =>
        this.api.get<boolean>(`/start`);
}

export interface ICreateUserDTO {
    name: string
    email: string
    FirebaseUid: string
}

export interface IAddTagRequest {
    userID: string
    typeID: number
    name: string
    themeColor: string
}


export const rainwayApi = new RainwayApi();