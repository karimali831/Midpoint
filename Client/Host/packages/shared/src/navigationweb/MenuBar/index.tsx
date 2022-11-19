
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../config/firebase';
import images from '../../assets/images/index.web';
import { MainButton } from '../../components/Buttons/MainButton';
import { AppScreen } from '../../enum/AppScreen';
import { Routes } from '../../router/Routes';
import { ShowScreenAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { getUserState } from '../../state/contexts/user/Selectors';
import useStyles from '../styles';
import { NavbarProfile } from './Profile';


export interface IOwnProps {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const MenuBar: React.FC<IOwnProps> = (props) => {
    const [viewingWebsite, setViewingWebsite] = useState<boolean>(true)
    const { user } = useSelector(getUserState)
    const { currentScreen } = useSelector(getAppState)
    const dispatch = useDispatch()
    const {
        classes
    } = useStyles();

    useEffect(() => {
        setViewingWebsite(
            currentScreen === AppScreen.Home ||
            currentScreen === AppScreen.Login
        )
    }, [currentScreen])

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const goToPage = (screen: AppScreen) => {
        setAnchorElNav(null);
        dispatch(ShowScreenAction({ screen }))
    }

    return (
        <AppBar position="fixed" sx={{ bgcolor: '#000', zIndex: 1 }}>
            <Container maxWidth="xl" style={{ zIndex: 1 }}>
                <Toolbar disableGutters
                    sx={{
                        display: { xs: "flex" },
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >

                    <Typography className={classes.title} variant="h6" noWrap mr={5}>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => dispatch(ShowScreenAction({ screen: AppScreen.Home }))}
                        >
                            MidPoint.
                        </span>
                    </Typography>

                    <Box sx={{
                        flexGrow: 1, display: {
                            xs: 'none',
                            md: 'flex',
                            justifyContent: 'space-evenly',
                            maxWidth: 500,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }
                    }}>
                        {viewingWebsite ?
                            <>

                                <span style={{ cursor: 'pointer' }}>Main features</span>
                                <span style={{ cursor: 'pointer' }}>Details</span>
                                <span style={{ cursor: 'pointer' }}>Meet the team</span>
                                {
                                    !!user ?
                                        <MainButton
                                            width={100}
                                            text="Dashboard"
                                            onClick={() => {
                                                setViewingWebsite(false)
                                                dispatch(ShowScreenAction({
                                                    screen: AppScreen.Dashboard
                                                }))
                                            }}
                                        />
                                        :
                                        <>
                                            <Button
                                                variant="contained"
                                                style={{ borderRadius: 25 }}
                                                onClick={() => dispatch(ShowScreenAction({
                                                    screen: AppScreen.Login
                                                }))}
                                            >
                                                Sign up
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                style={{ borderRadius: 25, color: '#fff' }}
                                                onClick={() => dispatch(ShowScreenAction({
                                                    screen: AppScreen.Login
                                                }))}>
                                                Sign In
                                            </Button>
                                        </>
                                }

                            </>
                            :
                            !!user &&
                            <>
                                <span
                                    onClick={() => {
                                        setViewingWebsite(true)
                                        dispatch(ShowScreenAction({
                                            screen: AppScreen.Home
                                        }))
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Website
                                </span>
                                <MainButton
                                    width={100}
                                    text="Dashboard"
                                />
                                <NotificationsIcon />
                                <span>{user.displayName}</span>

                                <Tooltip
                                    classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                                    title={
                                        <NavbarProfile />
                                    } arrow>
                                    <img src={images.adamProfilePic} style={{
                                        width: 40,
                                        height: 40,
                                        objectFit: 'cover',
                                        borderRadius: 50
                                    }} />
                                </Tooltip>
                            </>
                        }
                    </Box>


                    {/* Mobile view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {Routes.filter(x => x.displayOnMenu && (!x.memberOnly || (x.memberOnly && !!user))).map((page, idx) => {
                                if (!!user && page.screen === AppScreen.Login)
                                    return;

                                return (
                                    <MenuItem key={idx} onClick={() => goToPage(page.screen)}>
                                        <Typography textAlign="center">{page.menuName}</Typography>
                                    </MenuItem>
                                )
                            })}
                            {!!user &&
                                <MenuItem onClick={() => auth.signOut()}>
                                    <Typography textAlign="center">Sign out</Typography>
                                </MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
