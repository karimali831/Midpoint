import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

interface IOwnProps {
    moreAnchorEl: HTMLElement | null;
    handleMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu = React.forwardRef((props: IOwnProps, ref: any) => {
    const isMenuOpen = Boolean(props.moreAnchorEl);

    return (
        <Menu
            ref={ref}
            anchorEl={props.moreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id="primary-search-account-menu-mobile"
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem onClick={props.handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
});

export default MobileMenu;
