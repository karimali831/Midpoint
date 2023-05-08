import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainButton } from '../../components/Buttons/MainButton'
import { AppScreen } from '../../enum/AppScreen'
import { Routes } from '../../router/Routes'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
    SetDashboardSection,
    SetRegisteringAction,
    ShowScreenAction
} from '../../state/contexts/app/Actions'
import { getAppState } from '../../state/contexts/app/Selectors'
import { getUserState } from '../../state/contexts/user/Selectors'
import useStyles from '../styles'
import { NavbarProfile } from './Profile'
import images from '../../assets/images'
import { auth } from '../../config/firebase'
import { NotificationIcon } from '../../components/Icons/NotificationIcon'
import { getCheckoutState } from '../../state/contexts/checkout/Selectors'
import { DashboardSection } from '../../enum/DashboardSection'

export interface IOwnProps {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

export const MenuBar: React.FC<IOwnProps> = (props) => {
    const [viewingWebsite, setViewingWebsite] = useState<boolean>(true)
    const { user } = useSelector(getUserState)
    const { currentScreen } = useSelector(getAppState)
    const dispatch = useDispatch()
    const { classes } = useStyles()

    const { basket } = useSelector(getCheckoutState)

    useEffect(() => {
        setViewingWebsite(
            currentScreen === AppScreen.Home ||
                currentScreen === AppScreen.Login
        )
    }, [currentScreen])

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const goToPage = (screen: AppScreen) => {
        setAnchorElNav(null)
        dispatch(ShowScreenAction({ screen }))
    }

    return (
        <AppBar position="fixed" sx={{ bgcolor: '#000', zIndex: 1 }}>
            <Container
                style={{
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        display: { xs: 'flex' },
                        flexDirection: 'row',
                        width: 1200,
                        justifyContent: 'space-between'
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        className={classes.title}
                        variant="h6"
                        noWrap
                        mr={5}
                    >
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                dispatch(
                                    ShowScreenAction({ screen: AppScreen.Home })
                                )
                            }
                        >
                            MidPoint.
                        </span>
                    </Typography>

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                                justifyContent: 'space-around',
                                width: 180,
                                alignItems: 'center'
                            }
                        }}
                    >
                        {viewingWebsite ? (
                            <>
                                {!!user ? (
                                    <MainButton
                                        width={100}
                                        text="Dashboard"
                                        onClick={() => {
                                            setViewingWebsite(false)
                                            dispatch(
                                                ShowScreenAction({
                                                    screen: AppScreen.Dashboard
                                                })
                                            )
                                        }}
                                    />
                                ) : (
                                    <>
                                        <span
                                            style={{
                                                width: 60,
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => {
                                                dispatch(
                                                    SetRegisteringAction(false)
                                                )
                                                dispatch(
                                                    ShowScreenAction({
                                                        screen: AppScreen.Login
                                                    })
                                                )
                                            }}
                                        >
                                            Sign In
                                        </span>
                                        <MainButton
                                            text="Sign up"
                                            onClick={() => {
                                                dispatch(
                                                    SetRegisteringAction(true)
                                                )
                                                dispatch(
                                                    ShowScreenAction({
                                                        screen: AppScreen.Login
                                                    })
                                                )
                                            }}
                                        />
                                    </>
                                )}
                            </>
                        ) : (
                            !!user && (
                                <>
                                    <NotificationsIcon />
                                    <span>{user.displayName}</span>

                                    <Tooltip
                                        classes={{
                                            arrow: classes.arrow,
                                            tooltip: classes.tooltip
                                        }}
                                        title={<NavbarProfile />}
                                        arrow
                                    >
                                        <img
                                            src={images.adamProfilePic}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                objectFit: 'cover',
                                                borderRadius: 50
                                            }}
                                        />
                                    </Tooltip>
                                </>
                            )
                        )}
                    </Box>

                    {/* Mobile view */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none',
                                justifyContent: 'flex-end'
                            }
                        }}
                    >
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
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {Routes.filter(
                                (x) =>
                                    x.displayOnMenu &&
                                    (!x.memberOnly || (x.memberOnly && !!user))
                            ).map((page, idx) => {
                                if (!!user && page.screen === AppScreen.Login)
                                    return

                                return (
                                    <MenuItem
                                        key={idx}
                                        onClick={() => goToPage(page.screen)}
                                    >
                                        <Typography textAlign="center">
                                            {page.menuName}
                                        </Typography>
                                    </MenuItem>
                                )
                            })}
                            {!!user && (
                                <MenuItem onClick={() => auth.signOut()}>
                                    <Typography textAlign="center">
                                        Sign out
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {basket.length > 0 && (
                <div
                    onClick={() => {
                        dispatch(
                            ShowScreenAction({ screen: AppScreen.Dashboard })
                        )
                        dispatch(SetDashboardSection(DashboardSection.Payment))
                    }}
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        right: 50,
                        top: 25
                    }}
                >
                    <NotificationIcon
                        count={basket.length}
                        icon={<ShoppingCartIcon />}
                    />
                </div>
            )}
        </AppBar>
    )
}
