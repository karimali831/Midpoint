import Menu from '@material-ui/core/Menu';
import Settings from '@material-ui/icons/Settings';
import React from 'react';
import MenuItemLink from '../MenuItemLink';

interface IOwnProps {
    anchorEl: HTMLElement | null;
    handleMenuClose: () => void;
}

const DesktopMenu = React.forwardRef((props: IOwnProps, ref: any) => {
    const isMenuOpen = Boolean(props.anchorEl);

    return (
        <Menu
            ref={ref}
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id="primary-search-account-menu"
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItemLink
                name="Settings"
                route={'doesnt-exist'}
                icon={<Settings />}
            />
        </Menu>
    );
});

export default DesktopMenu;
