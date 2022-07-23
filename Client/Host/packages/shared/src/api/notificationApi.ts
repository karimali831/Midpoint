import * as Notifications from 'expo-notifications';
import { INotificationMessage } from '../interface/INotificationMessage';
import HttpClient from './httpClient';

class NotificatonApi extends HttpClient {
    public constructor() {
        super('https://exp.host/--/api/v2');
    }

    public send = async (message: INotificationMessage, token: string) => {
        message.to = token;
        this.api.post('/push/send', message);
    };

    public schedule = async (
        message: INotificationMessage,
        delayInSeconds: number
    ) =>
        await Notifications.scheduleNotificationAsync({
            content: {
                title: message.title,
                body: message.body,
                data: message.data,
                sound: message.sound,
            },
            trigger: {
                seconds: delayInSeconds,
            },
        });
}

export const notificationApi = new NotificatonApi();
