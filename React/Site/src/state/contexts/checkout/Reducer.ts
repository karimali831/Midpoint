import { createReducer } from '@reduxjs/toolkit';
import { CreatePaymentIntentAction, CreatePaymentIntentFailureAction, CreatePaymentIntentSuccessAction, GetPricingPlanAction, GetPricingPlanFailureAction, GetPricingPlanSuccessAction, SelectedPricePlanAction } from './Actions';
import { checkoutInitialState } from './ICheckoutState';

export const checkoutReducer = createReducer(checkoutInitialState, (builder) => {
    builder
        .addCase(GetPricingPlanAction, (state) => {
            state.loadingPricingPlan = true
        })
        .addCase(SelectedPricePlanAction, (state, action) => {
            state.selectedPricePlan = action.payload
        })
        .addCase(GetPricingPlanSuccessAction, (state, action) => {
            state.pricingPlan = action.payload
            state.loadingPricingPlan = false
        })
        .addCase(GetPricingPlanFailureAction, (state, action) => {
            state.loadingPricingPlan = false
        })
        .addCase(CreatePaymentIntentAction, (state, action) => {
            state.paymentIntentLoading = true
        })
        .addCase(CreatePaymentIntentSuccessAction, (state, action) => {
            state.paymentIntentClientSecret = action.payload.clientSecret
            state.paymentAmount = action.payload.amount
            state.paymentDiscountedAmount = action.payload.discountedAmount
            state.coupon = action.payload.coupon
            state.paymentIntentLoading = false
        })
        .addCase(CreatePaymentIntentFailureAction, (state, action) => {
            state.paymentIntentErrorMsg = action.payload
            state.paymentIntentLoading = false
        })
});
