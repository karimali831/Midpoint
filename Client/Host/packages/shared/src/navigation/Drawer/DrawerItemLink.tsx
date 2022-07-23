import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import styles from './styles';

export interface IOwnProps {
    name: string;
    icon?: IconProp;
    action?: (event: GestureResponderEvent) => void;
}

export const DrawerItemLink: React.FC<IOwnProps> = (props) => {
    return (
        <Pressable style={styles.menuItemRow} onPress={props.action}>
            {props.icon && (
                <FontAwesomeIcon icon={props.icon} style={styles.menuIcon} />
            )}
            <Text style={styles.menuItemTxt}>{props.name}</Text>
        </Pressable>
    );
};
