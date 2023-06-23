import { createAction } from '@reduxjs/toolkit'
import { IStripePricePlan } from '../../../models/IStripePricePlan'
import { IRetrieveSecretTokenApiResponse } from '../../../api/stripeApi'

// ACTION CREATORS
const AddToBasketAction = createAction<IStripePricePlan>(
    '@@Checkout/AddToBasket'
)
const RemvoeFromBasketAction = createAction<string>(
    '@@Checkout/RemvoeFromBasket'
)
const GetPricingPlanAction = createAction('@@Checkout/GetPricingPlan')
const GetPricingPlanSuccessAction = createAction<IStripePricePlan[]>(
    '@@Checkout/GetPricingPlanSuccess'
)
const GetPricingPlanFailureAction = createAction<string>(
    '@@Checkout/GetPricingPlanFailure'
)

const CreatePaymentIntentAction = createAction<string | undefined>(
    '@@Checkout/CreatePaymentIntent'
)
const CreatePaymentIntentSuccessAction =
    createAction<IRetrieveSecretTokenApiResponse>(
        '@@Checkout/CreatePaymentIntentSuccess'
    )
const CreatePaymentIntentFailureAction = createAction<string>(
    '@@Checkout/CreatePaymentIntentFailureAction'
)

const EmptyBasketAction = createAction('@@Checkout/EmptyBasket')

export {
    AddToBasketAction,
    RemvoeFromBasketAction,
    GetPricingPlanSuccessAction,
    GetPricingPlanAction,
    GetPricingPlanFailureAction,
    CreatePaymentIntentAction,
    CreatePaymentIntentSuccessAction,
    CreatePaymentIntentFailureAction,
    EmptyBasketAction
}
