import { createAction } from '@reduxjs/toolkit';
import { IStripePricePlan } from '../../../models/IStripePricePlan';

// ACTION CREATORS
const SelectedPricePlanAction = createAction<IStripePricePlan | null>('@@Checkout/SelectedPricePlan');
const GetPricingPlanAction = createAction('@@Checkout/GetPricingPlan')
const GetPricingPlanSuccessAction = createAction<IStripePricePlan[]>('@@Checkout/GetPricingPlanSuccess')
const GetPricingPlanFailureAction = createAction('@@Checkout/GetPricingPlanFailure')

const CreatePaymentIntentAction = createAction('@@Checkout/CreatePaymentIntent')
const CreatePaymentIntentSuccessAction = createAction<string>('@@Checkout/CreatePaymentIntentSuccess')
const CreatePaymentIntentFailureAction = createAction<string>('@@Checkout/CreatePaymentIntentFailureAction')

export {
    SelectedPricePlanAction,
    GetPricingPlanSuccessAction,
    GetPricingPlanAction,
    GetPricingPlanFailureAction,
    CreatePaymentIntentAction,
    CreatePaymentIntentSuccessAction,
    CreatePaymentIntentFailureAction
};

