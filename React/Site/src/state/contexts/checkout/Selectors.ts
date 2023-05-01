
import { IStoreState } from "../../IStoreState";

export const getCheckoutState = (state: IStoreState) => state.checkout;

export const getSelectedPricePlan = (state: IStoreState) => state.checkout.selectedPricePlan