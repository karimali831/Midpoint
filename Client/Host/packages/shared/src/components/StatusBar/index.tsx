import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

export const TopStatusBar = () => (
    <SafeAreaView>
        <StatusBar translucent animated={true} />
    </SafeAreaView>
);
