import { IStripePricePlan } from '../../../models/IStripePricePlan'

export interface ICheckoutState {
    loadingPricingPlan: boolean
    pricingPlanFailure: string | null
    basket: IStripePricePlan[]
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
    pricingPlanFailure: null,
    basket: [],
    pricingPlan: [],
    paymentIntentLoading: false,
    paymentIntentErrorMsg: null,
    paymentIntentClientSecret: undefined,
    paymentAmount: undefined,
    paymentDiscountedAmount: undefined,
    coupon: undefined
}
