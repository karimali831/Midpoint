import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Divider, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { Text, View } from 'native-base';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMessage } from '../../interface/IMessage';
import { ShowAlertAction } from '../../state/contexts/app/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import { SendMessageAction } from '../../state/contexts/webrtc/Actions';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';
import { uuidv4 } from '../../utils/Utils';


export const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const chatWindowRef = useRef<HTMLElement>(null)

    const dispatch = useDispatch()
    const {
        userConnection,
        channelData
    } = useSelector(getWebRTCState)

    const {
        user
    } = useSelector(getUserState)

    const sendMessage = async () => {
        if (!userConnection?.hubConnection || message === "") {
            return
        }
        chatWindowRef.current?.scrollTo(0, 0)
        setMessage('')
        const messageDto: IMessage = {
            id: uuidv4(),
            userId: userConnection.userId,
            message,
            createdAt: new Date().toString(),
            isBot: false,
            roomId: ''
        }

        dispatch(SendMessageAction({ message: messageDto, roomId: userConnection.roomId }))

        await userConnection.hubConnection.invoke("SendMessage", messageDto)
            .catch(err => {
                console.error(err);
                dispatch(ShowAlertAction({
                    title: "Send message error",
                    message: err.message
                }))
            });
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendMessage()
        }
    }

    const data = channelData.filter(x => x.roomId === userConnection?.roomId)[0]

    if (!user)
        return null


    return (
        <Box sx={{ boxShadow: 2, padding: 2, width: '28%', bgcolor: 'background.paper' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                Chat
            </Text>
            <Box ref={chatWindowRef} style={{ overflowY: 'auto', maxHeight: 350 }}>
                {data && data.messages.length > 0 && data.messages.filter(x => !x.isBot).reverse().map(x => {

                    return (
                        <React.Fragment key={x.id}>
                            <List sx={{ bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                                        <PersonIcon fontSize="large" />
                                    </ListItemAvatar>
                                    <ListItemText primary={<>{x.message}</>} secondary={user.displayName} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </React.Fragment>
                    )
                })}
            </Box>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextField
                    id="filled-size-small"
                    placeholder="Your message"
                    onKeyPress={handleKeyPress}
                    variant="filled"
                    size="small"
                    value={message}
                    onChange={(e => setMessage(e.target.value))}
                    fullWidth={true}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" color="primary">
                                    <Button onClick={sendMessage} disabled={message === ""}>Send</Button>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </View>
        </Box>
    )
}