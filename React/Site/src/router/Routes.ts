import { Dashboard } from '../components/Dashboard';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { AppScreen } from '../enum/AppScreen';
import { IRoute } from './Route';

export const Routes: IRoute[] = [
    {
        screen: AppScreen.Home,
        component: Home,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: true,
        order: 1,
        menuName: "Home",
        path: '/',
        url: '/',
    },
    {
        screen: AppScreen.Login,
        component: Login,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: false,
        order: 2,
        menuName: "Sign In",
        path: '/login',
        url: '/login',
    },
    {
        screen: AppScreen.Dashboard,
        component: Dashboard,
        displayOnMenu: true,
        memberOnly: true,
        headerShown: true,
        order: 3,
        menuName: "Dashboard",
        path: '/dashboard/:midPointJoinId*',
        url: '/dashboard',
    }
];
