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
    [AppScreen.Splash]: undefined;
    [AppScreen.Login]: undefined;
    [AppScreen.Host]: undefined;
    [AppScreen.GamepadDebugger]: undefined
};

export type IFirebaseUser = firebase.User