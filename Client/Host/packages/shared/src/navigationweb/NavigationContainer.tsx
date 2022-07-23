import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { getAppState } from '../state/contexts/app/Selectors';
import { MenuBar } from './MenuBar';
import DesktopMenu from './MenuBar/desktop';
import MobileMenu from './MenuBar/mobile';
import useStyles from './styles';

const Navigation = () => {
    const classes = useStyles();
    const location = useLocation();
    const { currentScreen } = useSelector(getAppState)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    useEffect(() => {
        console.log('[MOUNT] Navigation Web');
    }, []);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const showNavigation = Routes.some(
        (x) => x.screen === currentScreen && x.navigationShown
    );

    return (
        <div
            className={classes.grow}
            style={{ display: showNavigation ? 'block' : 'none' }}
        >
            <MenuBar
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <MobileMenu
                moreAnchorEl={mobileMoreAnchorEl}
                handleMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <DesktopMenu
                anchorEl={anchorEl}
                handleMenuClose={handleMenuClose}
            />
        </div>
    );
};

export default Navigation;
