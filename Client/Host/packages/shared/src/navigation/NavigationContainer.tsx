import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    NavigationContainer
} from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootNavigatorParamsList } from '../../types/types';
import { AppScreen } from '../enum/AppScreen';
import { Routes } from '../router/Routes';
import { ShowScreenAction } from '../state/contexts/app/Actions';
import { getAppState } from '../state/contexts/app/Selectors';
import { getUserState } from '../state/contexts/user/Selectors';
import { DrawerContent } from './Drawer/DrawerContent';
import * as RootNavigation from './RootNavigation';
import { navigationRef } from './RootNavigation';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator<RootNavigatorParamsList>();

export function Navigation() {
    useEffect(() => {
        console.log('[MOUNT] Navigation Container');
    }, []);


    const { user } = useSelector(getUserState);
    const { currentScreen } = useSelector(getAppState)
    const dispatch = useDispatch();

    const showNavigation = Routes.some(
        (x) => x.screen === currentScreen
    );

    // const theme = () => {
    //     switch (user?.theme) {
    //         case Theme.Dark:
    //             return DarkTheme;
    //         case Theme.Light:
    //             return DefaultTheme;
    //         case Theme.Default:
    //             return DefaultTheme;
    //         default:
    //             return DefaultTheme;
    //     }
    // };

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={RootNavigation.goToInitialRoute}
        // theme={theme()}
        >
            <Drawer.Navigator
                screenOptions={{
                    headerShown: showNavigation,
                }}
                drawerContent={(props) => (
                    <DrawerContent
                        user={user}
                        showScreen={(screen: AppScreen) =>
                            dispatch(ShowScreenAction({ screen }))
                        }
                        navigation={props.navigation}
                    />
                )}
            >
                <Drawer.Screen name="MidPoint" component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
