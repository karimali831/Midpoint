import {
    faSignInAlt,
    faSignOutAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../config/firebase';
import { AppScreen } from '../../enum/AppScreen';
import { Routes } from '../../router/Routes';
import { ShowScreenAction } from '../../state/contexts/app/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import { DrawerItemLink } from './DrawerItemLink';
import styles from './styles';

export const DrawerContent = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(getUserState);

    const [state, setState] = useState({
        open: false,
    });

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, open });
        };

    return (
        <div>
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer
                anchor="left"
                open={state.open}
                onClose={toggleDrawer(false)}
            >
                <div
                    className={clsx(styles.list)}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUser} />
                            </ListItemIcon>
                            <ListItemText primary={user?.name ?? 'Welcome'} />
                        </ListItem>
                        <Divider />
                        {Routes.filter(
                            (x) =>
                                x.displayOnMenu &&
                                (!x.memberOnly || (x.memberOnly && user))
                        ).map((route, idx) => {
                            return <DrawerItemLink key={idx} route={route} />;
                        })}
                        <Divider />
                        <ListItem
                            onClick={() =>
                                user
                                    ? auth.signOut()
                                    : dispatch(
                                        ShowScreenAction({
                                            screen: AppScreen.Host,
                                        })
                                    )
                            }
                        >
                            <ListItemIcon>
                                <FontAwesomeIcon
                                    icon={user ? faSignOutAlt : faSignInAlt}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={user ? 'Sign Out' : 'Sign In'}
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};
