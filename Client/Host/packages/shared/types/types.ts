import { NavigatorScreenParams } from '@react-navigation/native';
import { AppScreen } from '../src/enum/AppScreen';

export type TopNavigatorParamsList = {
    Splash: undefined;
    Tabs: undefined;
};

export type RootNavigatorParamsList = {
    "Beatrice": NavigatorScreenParams<TopNavigatorParamsList>;
};

export type RouteParamList = {
    [AppScreen.Splash]: undefined;
    [AppScreen.Host]: undefined
};
