export interface IStripePricePlan {
    id: string
    tokens: number
    desc: string
    percentageSaving: number
    unitAmount: number
    unitAmountStr: string,
    unitAmountBeforeDiscountStr: string
    amountOffStr: string
}