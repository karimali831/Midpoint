import { IPromotion } from "../models/IPromotion";
import { rootUrl } from "../utils/UrlHelper";
import HttpClient from "./httpClient";

class PromotionApi extends HttpClient {
    public constructor() {
        super(rootUrl + "/api/promotion");
    }

    public getPromotions = async (awsUid: string) => 
        this.api.get<IPromotion[]>(`/Get/${awsUid}`);
}


export const promotionApi = new PromotionApi();
