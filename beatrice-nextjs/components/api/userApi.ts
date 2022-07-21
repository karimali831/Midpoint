
import { UrlHelper } from "../../helper/UrlHelper";
import { IUser } from "../../model/IUser";
import { IFirebaseUser } from "../../types/types";
import HttpClient from "./httpClient";

class UserApi extends HttpClient {
    public constructor() {
        super(`${UrlHelper.ApiUrl}/api/user`);
    }

    public getUserByFirebaseUid = async (user: IFirebaseUser) =>
        this.api.post<IUser>('/get', user);

    public createUser = async (user: ICreateUserDTO) =>
        this.api.post<IUser>('/create', user);

    public updateUserInfo = async (key: keyof IUser, value: string, userId: string) =>
        this.api.get<boolean>(`/updateuserinfo/${key}/${value}/${userId}`);
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


export const userApi = new UserApi();