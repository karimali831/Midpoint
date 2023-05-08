import { IStoreState } from '../../IStoreState'

export const getCheckoutState = (state: IStoreState) => state.checkout

export const getBasket = (state: IStoreState) => state.checkout.basket
