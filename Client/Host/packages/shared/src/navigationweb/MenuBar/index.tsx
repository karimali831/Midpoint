
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/More';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { DrawerContent } from '../Drawer/DrawerContent';
import useStyles from '../styles';


export interface IOwnProps {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const MenuBar: React.FC<IOwnProps> = (props) => {
    const {
        classes
    } = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <DrawerContent />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    MidPoint
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> */}
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        onClick={props.handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls="primary-search-account-menu-mobile"
                        aria-haspopup="true"
                        onClick={props.handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};
