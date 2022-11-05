
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppScreen } from '../../enum/AppScreen';
import { Routes } from '../../router/Routes';
import { ShowScreenAction } from '../../state/contexts/app/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import useStyles from '../styles';


export interface IOwnProps {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const MenuBar: React.FC<IOwnProps> = (props) => {
    const { user } = useSelector(getUserState)
    const dispatch = useDispatch()
    const {
        classes
    } = useStyles();

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
        <AppBar position="fixed" sx={{ bgcolor: '#000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography className={classes.title} variant="h6" noWrap mr={5}>
                        MidPoint.
                    </Typography>
                    {/* <div className={classes.grow} /> */}
                    <div className={classes.sectionDesktop}>
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
                    {/* Desktop view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {Routes.filter(x => x.displayOnMenu).map((page, idx) => (
                            <Button
                                key={idx}
                                onClick={() => goToPage(page.screen)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.menuName}
                            </Button>
                        ))}
                    </Box>
                    {/* Mobile view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            {Routes.filter(x => x.displayOnMenu).map((page, idx) => (
                                <MenuItem key={idx} onClick={() => goToPage(page.screen)}>
                                    <Typography textAlign="center">{page.menuName}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
