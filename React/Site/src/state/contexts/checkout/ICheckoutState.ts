import { IStripePricePlan } from "../../../models/IStripePricePlan"


export interface ICheckoutState {
    loadingPricingPlan: boolean
    selectedPricePlan: IStripePricePlan | null
    pricingPlan: IStripePricePlan[]

    paymentIntentLoading: boolean
    paymentIntentErrorMsg: string | null
    paymentIntentClientSecret: string | undefined
    paymentAmount: string | undefined
    paymentDiscountedAmount: string | undefined
    coupon: string | undefined
}

export const checkoutInitialState: ICheckoutState = {
    loadingPricingPlan: false,
    selectedPricePlan: null,
    pricingPlan: [],

    paymentIntentLoading: false,
    paymentIntentErrorMsg: null,
    paymentIntentClientSecret: undefined,
    paymentAmount: undefined,
    paymentDiscountedAmount: undefined,
    coupon: undefined
}