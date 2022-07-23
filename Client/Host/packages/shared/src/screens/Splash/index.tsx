import * as ExpoSplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppScreen } from '../../enum/AppScreen';
import { LoadStartup } from '../../enum/LoadStartup';
import useCachedResources from '../../hooks/useCachedResources';
import useEffectSkipInitialRender from '../../hooks/useEffectSkipInitialRender';
import {
    SetAppReadyAction,
    ShowScreenAction
} from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import styles from './styles';

const Splash = () => {
    const loadResources = useCachedResources();
    const dispatch = useDispatch();

    const { appReady } = useSelector(getAppState);

    React.useEffect(() => {
        console.log('[MOUNT] Splash screen');
    }, []);

    React.useEffect(() => {
        if (loadResources) {
            dispatch(SetAppReadyAction(LoadStartup.Resources));
        }
    }, [loadResources]);

    const onLayoutRootView = useCallback(async () => {
        if (appReady.every((x) => x.loaded)) {
            const hideSplash = async () => await ExpoSplashScreen.hideAsync();

            if (Platform.OS === 'android' || Platform.OS === 'ios') {
                hideSplash();
            }
        }
    }, [appReady]);

    useEffectSkipInitialRender(() => {
        if (appReady.every((x) => x.loaded)) {
            setTimeout(() => {
                dispatch(
                    ShowScreenAction({
                        screen: AppScreen.Host,
                    })
                );
            }, 1000);
        }
    }, [appReady]);

    return (
        <View style={styles.appLoadercontainer} onLayout={onLayoutRootView}>
            <ActivityIndicator size={'large'} />
            <Text style={{
                fontSize: 16,
                color: 'white'
            }}>Loading...</Text>
        </View>
    );
};

export default Splash;
