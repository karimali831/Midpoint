export interface IUser {
    id: string
    firebaseUid: string
    email: string
    displayName: string
    defaultMidiDevice: string
    purchasedTokens: number | null
    remainingTokens: number | null
    createdInstanceId: string | null
    totalStreams: number
    totalSeconds: number
    lastStream: string | null
}
