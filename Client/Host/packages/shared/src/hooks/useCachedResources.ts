import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { isDev } from '../utils/DevHelper';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                if (Platform.OS === 'android' || Platform.OS === 'ios') {
                    SplashScreen.preventAutoHideAsync();

                    // Pre-load fonts, make any API calls you need to do here
                    // await Font.loadAsync(Entypo.font);
                }

                // Load resources for web cra
                if (Platform.OS === 'web') {
                }

                // Artificially delay for two seconds to simulate a slow loading
                await new Promise((resolve) =>
                    setTimeout(resolve, isDev ? 0 : 2000)
                );
            } catch (e) {
                console.error(e);
            } finally {
                setLoadingComplete(true);
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
