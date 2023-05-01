import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '../../router/Route';

export interface IOwnProps {
    route: IRoute;
}

export const DrawerItemLink: React.FC<IOwnProps> = (props) => {
    const { url, icon, menuName } = props.route;

    return (
        <ListItem component={Link} to={url}>
            {icon && (
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            )}
            <ListItemText primary={menuName} />
        </ListItem>
    );
};
