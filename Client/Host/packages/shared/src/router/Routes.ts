import { GamepadDebugger } from '../components/GamepadDebugger';
import { Home } from '../components/Home';
import { AppScreen } from '../enum/AppScreen';
import { StartHost } from '../screens/Host';
import { Login } from '../screens/Login';
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
        screen: AppScreen.Home,
        component: Home,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: true,
        navigationShown: true,
        menuName: "Home",
        url: '/welcome',
    },
    {
        screen: AppScreen.Login,
        component: Login,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: false,
        navigationShown: true,
        menuName: "Login",
        url: '/login',
    },
    {
        screen: AppScreen.Host,
        component: StartHost,
        displayOnMenu: true,
        memberOnly: true,
        headerShown: false,
        navigationShown: true,
        menuName: "Start",
        url: '/host',
    },
    {
        screen: AppScreen.GamepadDebugger,
        component: GamepadDebugger,
        displayOnMenu: false,
        memberOnly: false,
        headerShown: false,
        navigationShown: true,
        menuName: "Gamepad Debugger",
        url: '/gamepaddebugger',
    }
];
