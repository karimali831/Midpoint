import { IFirebaseUser } from '../models/IFirebaseUser';
import { IUser } from '../models/IUser';
import { rootUrl } from '../utils/UrlHelper';
import HttpClient from './httpClient';

class UserApi extends HttpClient {
    public constructor() {
        super(`${rootUrl}/api/user`);
    }

    public test = async () => this.api.get<boolean>('/test');

    public getUserByFirebaseUid = async (user: IFirebaseUser) =>
        this.api.post<IUser>('/get', user);

    public createUser = async (dto: ICreateUserDTO) =>
        this.api.post<IUser>('/create', dto);

    public updateUserInfo = async (
        key: keyof IUser,
        value: string,
        userId: string
    ) => this.api.get<boolean>(`/updateuserinfo/${key}/${value}/${userId}`);
}

export interface ICreateUserDTO {
    name: string;
    email: string;
    FirebaseUid: string;
}

export const userApi = new UserApi();
