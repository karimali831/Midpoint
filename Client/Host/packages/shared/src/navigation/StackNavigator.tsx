import {
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';
import { RouteParamList } from '../../types/types';
import { IUser } from '../models/IUser';
import { Routes } from '../router/Routes';
import { DefaultScreen } from './RootNavigation';

const RootStack = createStackNavigator<RouteParamList>();

// For react router (web) see navigationweb/Router
interface IOwnProps {
    user: IUser | null;
}

export function StackNavigator(props: IOwnProps) {
    return (
        <RootStack.Navigator
            initialRouteName={DefaultScreen}
            screenOptions={{
                headerShown: true,
                gestureEnabled: true,
            }}
        >
            <RootStack.Group
                screenOptions={{
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                {Routes.map((route, idx) => (
                    <RootStack.Screen
                        key={idx}
                        name={route.screen}
                        component={route.component}
                        options={{
                            headerShown: route.headerShown,
                        }}
                    />
                ))}
            </RootStack.Group>
        </RootStack.Navigator>
    );
}
