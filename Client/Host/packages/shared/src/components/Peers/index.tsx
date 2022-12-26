import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { getStreamState } from '../../state/contexts/stream/Selectors';

interface IOwnProps {
}

export const Peers: React.FC<IOwnProps> = (props: IOwnProps) => {
    const StreamState = useSelector(getStreamState)

    const {
        onlineUsers,
    } = StreamState

    return (
        <List>
            {
                onlineUsers.map(uc => {
                    return (
                        <React.Fragment key={uc.roomId}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={uc.displayName} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={uc.displayName}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Online
                                                {uc.showConnectionStatus}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                                <Divider variant="inset" component="li" />
                            </ListItem>
                        </React.Fragment>
                    )
                })
            }
        </List>
    );
}
