import { Dashboard } from '../components/Dashboard'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Page } from '../enum/Page'
import { IRoute } from './Route'

export const Routes: IRoute[] = [
    {
        page: Page.Home,
        component: Home,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: true,
        order: 1,
        menuName: 'Home',
        path: '/',
        url: '/'
    },
    {
        page: Page.Login,
        component: Login,
        displayOnMenu: true,
        memberOnly: false,
        headerShown: false,
        order: 2,
        menuName: 'Sign In',
        path: '/login',
        url: '/login'
    },
    {
        page: Page.Dashboard,
        component: Dashboard,
        displayOnMenu: true,
        memberOnly: true,
        headerShown: true,
        order: 3,
        menuName: 'Dashboard',
        path: '/dashboard/:midPointJoinId*',
        url: '/dashboard'
    }
]
