export interface IPayment {
    id: string
    amountStr: string
    status: string
    cardBrand: string
    cardLast4: string
    tokens: number
    date: string
}
