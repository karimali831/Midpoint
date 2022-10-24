
import { Observable } from '../../node_modules/zen-observable-ts';
import { graphQLSubscription } from '../graphql/api';
import { onUpdateMidiMessage } from "../graphql/subscriptions";
import { OnMidiMessageSubscriptionVariables } from "../graphql/types";


export class SubscriptionApi {

    public midiData = async (data: string, channelId: string):
        Promise<Observable<object>> => {
        console.log("[SUB] midiData")

        try {
            return await graphQLSubscription<OnMidiMessageSubscriptionVariables>(
                onUpdateMidiMessage, {
                channelId,
                midiData: data
            })
        }
        catch (error: any) {
            console.error(SubscriptionApi.name, "midiData", error.response.data)
            throw error
        }
    }


}


export const subscriptionApi = new SubscriptionApi()