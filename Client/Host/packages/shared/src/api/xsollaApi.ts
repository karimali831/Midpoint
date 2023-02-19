import { HttpStatusCode } from "../enum/HttpStatusCode";

class XsollaApi {

    public rootUrl: string = 'https://api.xsolla.com/merchant/v2/'
    public merchantId: string = '381261'

    public createToken = async() => {
         await fetch(`${this.rootUrl}/merchants/${this.merchantId}/token`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa('karimali831:xra63400')
            },
            body: JSON.stringify({
                purchase: {
                    description: { value: 'Test purchase'},
                    subscription: {
                        plan_id: 'ab12cd34',
                        currency: 'USD'
                    }
                },
                settings: {
                    currency: 'USD',
                    language: 'en',
                    project_id: 16184,
                    ui: {size: 'medium'}
                },
                user: {
                    country: {
                        allow_modify: false,
                        value: 'US'
                    },
                    email: {
                        value: 'email@example.com'
                    },
                    id: { value: 'user_2' },
                    name: {value: 'John Smith'}
                }
            })
        })
    }
    

}

export interface EC2Response {
    message: string
    status: HttpStatusCode
}

export const xsollaApi = new XsollaApi();
