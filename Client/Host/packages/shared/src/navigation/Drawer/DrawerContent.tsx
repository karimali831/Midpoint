import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import { Text, View } from 'react-native';
import { auth } from '../../../config/firebase';
import { AppScreen } from '../../enum/AppScreen';
import { IUser } from '../../models/IUser';
import { Routes } from '../../router/Routes';
import { DrawerItemLink } from './DrawerItemLink';
import styles from './styles';

interface IOwnProps {
    user: IUser | null;
    navigation: DrawerNavigationHelpers;
    showScreen: (screen: AppScreen) => void;
}

export const DrawerContent: React.FC<IOwnProps> = (props) => {
    const signOut = () => {
        props.navigation.closeDrawer();
        auth.signOut();
    };

    return (
        <DrawerContentScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.userIcon} />
                    <View>
                        {!props.user ? (
                            <Text style={styles.nameTxt}>Welcome</Text>
                        ) : (
                            <>
                                <Text style={styles.nameTxt}>
                                    {props.user.displayName}
                                </Text>
                                <Text style={styles.emailTxt}>
                                    {props.user.email}
                                </Text>
                            </>
                        )}
                    </View>
                </View>
                <View style={styles.menuItemContainer}>
                    {Routes.filter(
                        (x) =>
                            x.displayOnMenu &&
                            (!x.memberOnly || (x.memberOnly && props.user))
                    ).map((route, idx) => {
                        return (
                            <DrawerItemLink
                                key={idx}
                                name={route.menuName ?? ''}
                                icon={route.icon}
                                action={() =>
                                    props.showScreen(AppScreen[route.screen])
                                }
                            />
                        );
                    })}
                </View>
                <DrawerItemLink
                    name={props.user ? 'Sign Out' : 'Sign In'}
                    icon={props.user ? faSignOutAlt : faSignInAlt}
                    action={signOut}
                />
            </View>
        </DrawerContentScrollView>
    );
};
