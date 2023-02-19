import { IStripePricePlan } from "../../../models/IStripePricePlan"


export interface ICheckoutState {
    loadingPricingPlan: boolean
    selectedPricePlan: IStripePricePlan | null
    pricingPlan: IStripePricePlan[]

    paymentIntentLoading: boolean
    paymentIntentErrorMsg: string | null
    paymentIntentClientSecret: string | null
}

export const checkoutInitialState: ICheckoutState = {
    loadingPricingPlan: false,
    selectedPricePlan: null,
    pricingPlan: [],

    paymentIntentLoading: false,
    paymentIntentErrorMsg: null,
    paymentIntentClientSecret: null
}