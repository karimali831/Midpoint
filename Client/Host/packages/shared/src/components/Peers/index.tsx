import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';

interface IOwnProps {
}

export const Peers: React.FC<IOwnProps> = (props: IOwnProps) => {
    const webRTCState = useSelector(getWebRTCState)

    const {
        userConnections,
        onlineUsers,
        channelData
    } = webRTCState

    return (
        <List>
            {
                onlineUsers.map(uc => {
                    return (
                        <React.Fragment key={uc.roomId}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={uc.name} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={uc.name}
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
