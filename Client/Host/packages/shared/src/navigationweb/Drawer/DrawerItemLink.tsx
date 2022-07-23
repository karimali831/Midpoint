import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
                    <FontAwesomeIcon icon={icon} />
                </ListItemIcon>
            )}
            <ListItemText primary={menuName} />
        </ListItem>
    );
};
