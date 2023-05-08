export interface IPromotion {
    couponName: string
    creatorCustomerId: string
    receiverCustomerId: string
    code: string
    expiresStr: string
    receiverClaimedDateStr: string
    creatorClaimedDateStr: string
}