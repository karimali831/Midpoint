import { IPayment } from '../models/IPayment'
import { rootUrl } from '../utils/UrlHelper'
import HttpClient from './httpClient'

class PaymentApi extends HttpClient {
    public constructor() {
        super(rootUrl + '/api/payment')
    }

    public getPayments = async (awsUid: string) =>
        this.api.get<IPayment[]>(`/Get/${awsUid}`)
}

export const paymentApi = new PaymentApi()
