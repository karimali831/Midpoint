import { NavigatorScreenParams } from '@react-navigation/native';
import firebase from "firebase/app";
import { AppScreen } from '../src/enum/AppScreen';

export type TopNavigatorParamsList = {
    Splash: undefined;
    Tabs: undefined;
};

export type RootNavigatorParamsList = {
    "MidPoint": NavigatorScreenParams<TopNavigatorParamsList>;
};

export type RouteParamList = {
    [AppScreen.Dashboard]: undefined;
    [AppScreen.Home]: undefined;
    [AppScreen.Login]: undefined;
};

export type HostParams = {
    id: string
}

export type IFirebaseUser = firebase.User