import { Observable } from '../../node_modules/zen-observable-ts';
import { OnUpdateUserSubscriptionVariables } from '../API';
import { graphQLSubscription } from '../graphql/api';
import { onUpdateUser} from '../graphql/subscriptions';
import { IUser } from '../models/IUser';


export class SubscriptionApi {

    
    public tokensRemaining = async (user: IUser): 
        Promise<Observable<object>> => {
            console.log("[SUB] tokens remaining" + user.id)

            try{
                return await graphQLSubscription<OnUpdateUserSubscriptionVariables>(onUpdateUser, { 
                    filter: { 
                        id: { eq: user.id }
                    } 
                })
            }
            catch (error: any) {
                console.error(SubscriptionApi.name, "tokensRemaining", error)
                throw error
            }
        }

    // public tokensRemaining = async (user: IUser): 
    //     Promise<Observable<object>> => {
    //         console.log("[SUB] orderUpdateSub")

    //         return await graphQLSubscription<OnUserUpdateSubscriptionVariables>(
    //             onUpdateUser, {
    //                 ...user
    //             }
    //         ).then(value => {
    //             if (!value) {
    //                 console.error(SubscriptionApi.name, "tokensRemaining", )
    //             }
    //             console.log("@@@ F1" + JSON.stringify(value))
    //             return value

    //         }).catch((error: any) => {
    //             console.error(SubscriptionApi.name, "tokensRemaining", error.response.data)
    //             throw new Error(error);
    //         })
    //     }
}


export const subscriptionApi = new SubscriptionApi()
