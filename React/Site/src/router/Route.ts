import { ReactElement } from 'react';
import { AppScreen } from '../enum/AppScreen';

export interface IRoute {
    screen: AppScreen
    displayOnMenu: boolean
    memberOnly: boolean;
    component: React.ComponentType<any>
    menuName?: string
    icon?: ReactElement
    headerShown?: boolean
    order: number
    path: string
    url: string
}
