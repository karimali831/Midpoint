import { IStripePricePlan } from "../models/IStripePricePlan";
import { rootUrl } from "../utils/UrlHelper";
import HttpClient from "./httpClient";

class StripeApi extends HttpClient {
    public constructor() {
        super(rootUrl + "/api/order");
    }

    public getPricingModel = async () => 
        this.api.get<IStripePricePlan[]>('/GetPricingModel')
    
    public createPaymentIntent = async (priceId: string, awsUid: string, promoCode?: string) => 
        this.api.post<IRetrieveSecretTokenApiResponse>(`/CreatePaymentIntent/${priceId}/${awsUid}${promoCode ? `/${promoCode}` : ""}`)
}

export interface IRetrieveSecretTokenApiResponse {
    clientSecret?: string
    errorMsg?: string
    coupon?: string
    discountedAmount?: string
    amount?: string
}

export const stripeApi = new StripeApi();
