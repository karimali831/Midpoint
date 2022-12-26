import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { ChatMessage } from './ChatMessage';
import { HubConnectionState } from '@microsoft/signalr';
import { useParams } from 'react-router-dom';
import { HostParams } from '../../../../types/types';
import { IMessage } from '../../../interface/IMessage';
import { IUserConnection } from '../../../interface/IUserConnection';
import { ShowAlertAction } from '../../../state/contexts/app/Actions';
import { SetConnectionStateAction, MessageReceivedAction, SendMessageAction, UsersInRoomAction, GetHostRoomAction } from '../../../state/contexts/stream/Actions';
import { uuidv4 } from '../../../utils/Utils';

export const StreamChat = () => {
    const [message, setMessage] = useState<string>('')
    const chatWindowRef = useRef<HTMLDivElement>(null)
    
    const { id } = useParams<HostParams>();

    const dispatch = useDispatch()

    const { user } = useSelector(getUserState)

    const {
        userConnection,
        channelData,
        selectedHostRoom
    } = useSelector(getStreamState)


    if (!user)
        return null;

        const configuration = {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302',
                },
            ],
        };
    
    const peerConn = new RTCPeerConnection(configuration);

    React.useEffect(() => {
        if (!!id) {
            dispatch(GetHostRoomAction(id))
        }
    }, [id]);

    useEffect(() => {
        if (!!userConnection?.hubConnection) {
            start(userConnection);
        }
    }, [userConnection]);

    if (user == null || selectedHostRoom == null) {
        return null;
    }

    const start = (userConnection: IUserConnection) => {

        console.log(userConnection)

        const { hubConnection } = userConnection;

        if (hubConnection.state === HubConnectionState.Disconnected) {
            hubConnection
                .start()
                .then((a) => {
                    // grabWebCamVideo()
                    dispatch(SetConnectionStateAction(hubConnection.state));

                    console.log('*[Channel] Connected Id: ' + hubConnection.connectionId);

                    hubConnection.on('ReceiveMessage', (message: IMessage) => {
                        console.log(message);

                        if (message.userId === user.id) {
                            dispatch(
                                MessageReceivedAction({
                                    message,
                                    roomId: userConnection.roomId,
                                })
                            );
                        } else {
                            dispatch(
                                SendMessageAction({
                                    message,
                                    roomId: userConnection.roomId,
                                })
                            );
                        }

                        createPeerConnection();
                    });

                    hubConnection.on(
                        'UsersInRoom',
                        (users: IUserConnection[]) => {
                            dispatch(UsersInRoomAction(users));
                        }
                    );

                    hubConnection.onclose(() => {
                        console.log('*[CHAT] Connection closed');

                        closeConnection().then(() =>
                            dispatch(
                                SetConnectionStateAction(
                                    HubConnectionState.Disconnected
                                )
                            )
                        );
                    });

                    hubConnection.onreconnecting(() => {
                        console.log('*[CHAT] Lost connection');
                        dispatch(
                            SetConnectionStateAction(
                                HubConnectionState.Reconnecting
                            )
                        );
                    });

                    hubConnection.onreconnected(() => {
                        console.log('*[CHAT] Re-connected');
                        dispatch(
                            SetConnectionStateAction(
                                HubConnectionState.Connected
                            )
                        );
                    });

                    hubConnection.invoke('JoinRoom', userConnection);
                })
                .catch((error) => {
                    dispatch(ShowAlertAction({ title: error.message }));
                })
        }
    };

    const createPeerConnection = () => {
        peerConn.onicecandidate = (event) => {
            if (event.candidate) {
            } else {
                const message: IMessage = {
                    isBot: true,
                    id: uuidv4(),
                    userId: user.id,
                    message: peerConn.localDescription?.toJSON(),
                    createdAt: new Date().toDateString(),
                    roomId: selectedHostRoom.id,
                    name: "System"
                };

                dispatch(
                    SendMessageAction({ message, roomId: selectedHostRoom.id })
                );
            }
        };
    };

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection.stop().catch((err) => {
                console.error(err);

                dispatch(
                    ShowAlertAction({
                        title: 'Close connection error',
                        message: err.message,
                    })
                );
            });
        }
    };


    const leaveHost = async () => {
        dispatch(SetConnectionStateAction(HubConnectionState.Disconnected));
    };

    const sendMessage = async () => {
        if (!userConnection?.hubConnection || message === "") {
            return
        }
        const date = new Date()

        chatWindowRef.current?.scrollTo(0, 0)
        setMessage('')
        const messageDto: IMessage = {
            id: uuidv4(),
            userId: userConnection.userId,
            message,
            createdAt: `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
            isBot: false,
            name: userConnection.displayName,
            roomId: selectedHostRoom.id
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


    return (
        <div style={{ position: 'relative', width: '100%' }}>

            <div ref={chatWindowRef} style={{  overflowY: 'auto', maxHeight: 230 }}>
                {
                    data?.messages.length > 0 && data.messages.filter(x => !x.isBot).reverse().map(message => 
                    <ChatMessage message={message} key={message.id} />
                )}
            </div>

            <div style={{ display: 'flex', position: 'absolute', bottom: 0, width: '100%' }}>
           
                    <input 
                        className='chat-input' 
                        placeholder='Type your message...' 
                        onChange={(e => setMessage(e.target.value))}
                        onKeyPress={handleKeyPress}
                        value={message}
                    />
                    
                    <div 
                        onClick={() => sendMessage()}  
                        style={{ 
                            position: 'absolute', 
                            right: 0, 
                            bottom: 5,
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowForwardIcon style={{ fontSize: 20 }} />
                    </div>
       
            </div>
        </div>
    );
};
