import MenuIcon from '@mui/icons-material/Menu'
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import UserIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from '../../enum/Page'
import { Routes } from '../../router/Routes'
import { ShowPageAction } from '../../state/contexts/app/Actions'
import { getUserState } from '../../state/contexts/user/Selectors'
import { DrawerItemLink } from './DrawerItemLink'
import { auth } from '../../config/firebase'

export const DrawerContent = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(getUserState)

    const [state, setState] = useState({
        open: false
    })

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            console.info(event.type)

            // if (
            //     event.type === 'keydown' &
            //     ((event as React.KeyboardEvent).key === 'Tab' ||
            //         (event as React.KeyboardEvent).key === 'Shift')
            // ) {
            //     return;
            // }

            setState({ ...state, open })
        }

    return (
        <div>
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer
                anchor="left"
                open={state.open}
                onClose={toggleDrawer(false)}
            >
                <div
                    style={{ width: 'auto' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <UserIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={user?.displayName ?? 'Welcome'}
                            />
                        </ListItem>
                        <Divider />
                        {Routes.filter(
                            (x) =>
                                x.displayOnMenu &&
                                (!x.memberOnly || (x.memberOnly && user))
                        ).map((route, idx) => {
                            return <DrawerItemLink key={idx} route={route} />
                        })}
                        <Divider />
                        <ListItem
                            onClick={() =>
                                user
                                    ? auth.signOut()
                                    : dispatch(ShowPageAction(Page.Login))
                            }
                        >
                            <ListItemIcon>
                                {user ? <LogoutIcon /> : <LoginIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={user ? 'Sign Out' : 'Sign In'}
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}
