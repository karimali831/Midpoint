import { Theme } from '../enum/Theme';

export interface IUser {
    id: string;
    firebaseUid: string;
    name: string;
    email: string | null;
    imageUri: string | null;
    status: string;
    pushToken: string | null;
    theme: Theme;
}
