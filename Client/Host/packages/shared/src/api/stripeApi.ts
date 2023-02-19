import { IStripePricePlan } from "../models/IStripePricePlan";
import { rootUrl } from "../utils/UrlHelper";
import HttpClient from "./httpClient";

class StripeApi extends HttpClient {
    public constructor() {
        super(rootUrl + "/api/order");
    }

    public getPricingModel = async () => 
        this.api.get<IStripePricePlan[]>('/GetPricingModel');
    
    public createPaymentIntent = async (priceId: string) => 
        this.api.post<IRetrieveSecretTokenApiResponse>(`/CreatePaymentIntent/${priceId}`);
}

export interface IRetrieveSecretTokenApiResponse {
    clientSecret?: string
    errorMsg?: string
}

export const stripeApi = new StripeApi();
