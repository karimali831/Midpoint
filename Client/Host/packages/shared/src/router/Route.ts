import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AppScreen } from '../enum/AppScreen';

export interface IRoute {
    screen: AppScreen
    displayOnMenu: boolean
    memberOnly: boolean;
    component: React.ComponentType<any>
    menuName?: string
    icon?: IconDefinition
    headerShown?: boolean
    navigationShown?: boolean
    url: string
}
