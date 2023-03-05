
export interface IUser {
    id: string;
    firebaseUid: string
    email: string
    displayName: string
    defaultMidiDevice: string
    purchasedTokens: number | null
    createdInstanceId: string | null
}

