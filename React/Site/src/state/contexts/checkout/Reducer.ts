import { createReducer } from '@reduxjs/toolkit'
import {
    AddToBasketAction,
    CreatePaymentIntentAction,
    CreatePaymentIntentFailureAction,
    CreatePaymentIntentSuccessAction,
    EmptyBasketAction,
    GetPricingPlanAction,
    GetPricingPlanFailureAction,
    GetPricingPlanSuccessAction,
    RemvoeFromBasketAction
} from './Actions'
import { checkoutInitialState } from './ICheckoutState'

export const checkoutReducer = createReducer(
    checkoutInitialState,
    (builder) => {
        builder
            .addCase(GetPricingPlanAction, (state) => {
                state.loadingPricingPlan = true
            })
            .addCase(AddToBasketAction, (state, action) => {
                // state.basket = [...state.basket, action.payload]

                // 1 item for now
                state.basket = [action.payload]
            })
            .addCase(RemvoeFromBasketAction, (state, action) => {
                state.basket = state.basket.filter(
                    (x) => x.id !== action.payload
                )
            })
            .addCase(EmptyBasketAction, (state) => {
                state.basket = []
            })
            .addCase(GetPricingPlanSuccessAction, (state, action) => {
                state.pricingPlan = action.payload
                state.loadingPricingPlan = false
            })
            .addCase(GetPricingPlanFailureAction, (state) => {
                state.loadingPricingPlan = false
            })
            .addCase(CreatePaymentIntentAction, (state) => {
                state.paymentIntentLoading = true
            })
            .addCase(CreatePaymentIntentSuccessAction, (state, action) => {
                state.paymentIntentClientSecret = action.payload.clientSecret
                state.paymentAmount = action.payload.amount
                state.paymentDiscountedAmount = action.payload.discountedAmount
                state.coupon = action.payload.coupon
                state.paymentIntentLoading = false

                if (state.paymentIntentErrorMsg) {
                    state.paymentIntentErrorMsg = null
                }
            })
            .addCase(CreatePaymentIntentFailureAction, (state, action) => {
                state.paymentIntentErrorMsg = action.payload
                state.paymentIntentLoading = false
            })
    }
)
