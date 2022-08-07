export interface IParticipant {
    id: string
    name: string
    imageUri: string | null
    status: string
    online?: boolean
}