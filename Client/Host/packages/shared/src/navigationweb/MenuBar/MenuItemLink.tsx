import MenuItem from '@material-ui/core/MenuItem';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface IOwnProps {
    name: string;
    route: string;
    icon: ReactElement;
}

const MenuItemLink = React.forwardRef((props: IOwnProps, ref: any) => {
    return (
        <Link
            to={props.route}
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
        >
            <MenuItem ref={ref}>
                {props.icon} {props.name}
            </MenuItem>
        </Link>
    );
});

export default MenuItemLink;
