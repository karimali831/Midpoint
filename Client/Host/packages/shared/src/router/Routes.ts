import { AppScreen } from '../enum/AppScreen';
import StartHost from '../screens/Host';
import Splash from '../screens/Splash';
import { IRoute } from './Route';

export const Routes: IRoute[] = [
    {
        screen: AppScreen.Splash,
        component: Splash,
        displayOnMenu: false,
        memberOnly: false,
        headerShown: false,
        navigationShown: false,
        url: '/',
    },
    {
        screen: AppScreen.Host,
        component: StartHost,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: false,
        navigationShown: true,
        url: '/host',
    },
];
