import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Divider, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { Text, View } from 'native-base';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { IMessage } from '../../interface/IMessage';
import { getUserState } from '../../state/contexts/user/Selectors';
import { SendMessageAction } from '../../state/contexts/stream/Actions';
import { getStreamState } from '../../state/contexts/stream/Selectors';
import { uuidv4 } from '../../utils/Utils';


export const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const chatWindowRef = useRef<HTMLElement>(null)

    const dispatch = useDispatch()
    const {
        userConnection,
        channelData
    } = useSelector(getStreamState)

    const {
        user
    } = useSelector(getUserState)

    const sendMessage = async () => {
        if (!userConnection?.hubConnection || message === "") {
            return
        }

        const date = new Date();

        chatWindowRef.current?.scrollTo(0, 0)
        setMessage('')
        const messageDto: IMessage = {
            id: uuidv4(),
            userId: userConnection.userId,
            message,
            createdAt: `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
            isBot: false,
            roomId: userConnection.roomId,
            name: userConnection.displayName
        }

        dispatch(SendMessageAction({ message: messageDto, roomId: userConnection.roomId }))

        await userConnection.hubConnection.invoke("SendMessage", messageDto)
            .catch(err => {
                console.error(err);
                toast.error(err.message)
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
            <Box ref={chatWindowRef} style={{ overflowY: 'auto', maxHeight: 180 }}>
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