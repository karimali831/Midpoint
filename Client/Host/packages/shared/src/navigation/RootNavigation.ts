import {
    createNavigationContainerRef,
    StackActions
} from '@react-navigation/native';
import { RouteParamList } from '../../types/types';
import { AppScreen } from '../enum/AppScreen';

export const navigationRef = createNavigationContainerRef<RouteParamList>();

export const DefaultScreen = AppScreen.Dashboard;

let initialRoute: keyof RouteParamList;

export function navigate(
    name: keyof RouteParamList,
    params?: RouteParamList[keyof RouteParamList]
) {
    if (navigationReady()) {
        navigationRef.navigate(name, params);
    } else {
        initialRoute = name;
    }
}

export function navigationReady() {
    if (navigationRef.isReady()) {
        return true;
    }
    return false;
}

export function replace(
    name: keyof RouteParamList,
    params?: RouteParamList[keyof RouteParamList]
) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function goBack() {
    const canGoBack = navigationRef.canGoBack();

    if (canGoBack) {
        navigationRef.goBack();
    } else {
        replace(DefaultScreen);
    }
}

export function goToInitialRoute() {
    if (initialRoute) {
        replace(initialRoute);
    }
}

export function currentRoute() {
    return navigationRef.getCurrentRoute()?.name;
}

export function getRootState() {
    return navigationRef.current?.getRootState();
}

export function route(): RouteParamList[keyof RouteParamList] {
    return navigationRef.getCurrentRoute()
        ?.params as RouteParamList[keyof RouteParamList];
}
