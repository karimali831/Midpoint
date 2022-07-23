import React from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import styles from './styles';

export interface IOwnProps {
    style?: ViewStyle;
}

export const Loader: React.FC<IOwnProps> = (props) => {
    return (
        <View style={[styles.loading_messages, props.style]}>
            <ActivityIndicator size={'large'} color="#00A884" />
        </View>
    );
};
