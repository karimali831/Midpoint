import { HubConnectionState } from '@microsoft/signalr';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import {
    Button,
    FormControl,
    Input, Text, View, VStack
} from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chat } from '../../components/Chat';
import DJCheckList from '../../components/DJCheckList';
import { Peers } from '../../components/Peers';
import WebMIDI from '../../components/WebMidi';
import useEffectSkipInitialRender from '../../hooks/useEffectSkipInitialRender';
import { IMessage } from '../../interface/IMessage';
import { IUserConnection } from '../../interface/IUserConnection';
import { ShowAlertAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { getUser, getUserState } from '../../state/contexts/user/Selectors';
import { AddUserConnectionAction, MessageReceivedAction, SendMessageAction, SetConnectionStateAction, UpdateActiveUserConnectionAction, UsersInRoomAction } from '../../state/contexts/webrtc/Actions';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';
import { newHubConnection } from '../../utils/HubHelper';
import { uuidv4 } from '../../utils/Utils';
import VideoStream from './stream.web';

export function StartHost() {
    const user = useSelector(getUser)

    const appState = useSelector(getAppState)
    const webRTCState = useSelector(getWebRTCState)


    const dispatch = useDispatch()
    const {
        appFocused
    } = appState

    const {
        userConnections,
        channelData
    } = webRTCState

    const {
        camOn
    } = useSelector(getUserState)

    const [channelName, setChannelName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [isInitiator, setIsInitiator] = useState<boolean>(false)


    // let localVideoRef = useRef<HTMLVideoElement>(null)
    // let removeVideoRef = useRef<HTMLVideoElement>(null)

    const configuration = {
        'iceServers': [{
            'urls': 'stun:stun.l.google.com:19302'
        }]
    };

    let localStream = null
    const peerConn = new RTCPeerConnection(configuration);

    const activeUserConnection = userConnections.filter(x => x.focused)[0]


    React.useEffect(() => {
        if (error !== '') {
            if (channelName.length > 2) {
                setError('')
            }
        }
    }, [channelName])

    useEffectSkipInitialRender(() => {
        if (activeUserConnection) {
            userConnections.map(x => {
                if (x.hubConnection && x.hubConnection.state === HubConnectionState.Connected) {
                    if (activeUserConnection.roomId === x.roomId) {
                        x.hubConnection.invoke("UserStatus", appFocused)
                    }
                    else {
                        x.hubConnection.invoke("UserStatus", false)
                    }
                }
            })

            start(activeUserConnection)
        }
    }, [userConnections])

    if (user == null) {
        return null
    }


    const start = (userConnection: IUserConnection) => {
        const { hubConnection } = userConnection

        if (hubConnection.state === HubConnectionState.Disconnected) {

            hubConnection.start()
                .then(a => {
                    // grabWebCamVideo()
                    dispatch(SetConnectionStateAction(hubConnection.state))

                    console.log("*[Channel] Connected Id: " + hubConnection.connectionId)


                    hubConnection.on("ReceiveMessage", (message: IMessage) => {
                        console.log("*[Channel] ReceiveMessage" + message.id)

                        if (message.userId === user.id) {
                            dispatch(
                                MessageReceivedAction({
                                    message, roomId: activeUserConnection.roomId
                                })
                            )
                        }
                        else {
                            dispatch(
                                SendMessageAction({ message, roomId: activeUserConnection.roomId })
                            )
                        }

                        createPeerConnection()
                    });

                    hubConnection.on("UsersInRoom", (users: IUserConnection[]) => {
                        dispatch(UsersInRoomAction(users))
                    });

                    hubConnection.onclose(() => {
                        console.log("*[CHAT] Connection closed")

                        closeConnection()
                            .then(() => dispatch(SetConnectionStateAction(HubConnectionState.Disconnected)))
                    });

                    hubConnection.onreconnecting(() => {
                        console.log("*[CHAT] Lost connection")
                        dispatch(SetConnectionStateAction(HubConnectionState.Reconnecting))
                    });

                    hubConnection.onreconnected(() => {
                        console.log("*[CHAT] Re-connected")
                        dispatch(SetConnectionStateAction(HubConnectionState.Connected))
                    })

                    hubConnection.invoke("JoinRoom", userConnection)

                })
                .catch(error => {
                    dispatch(ShowAlertAction({ title: error.message }))
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    const createPeerConnection = () => {
        peerConn.onicecandidate = (event) => {
            if (event.candidate) {
            }
            else {
                const message: IMessage = {
                    isBot: true,
                    id: uuidv4(),
                    userId: user.id,
                    name: user.displayName,
                    message: peerConn.localDescription?.toJSON(),
                    date: new Date()
                }

                dispatch(SendMessageAction({ message, roomId: channelName }))
            }
        }

        // peerConn.ontrack = (event) => {
        //     let video = removeVideoRef.current
        //     if (video) {
        //         video.srcObject = event.streams[0]
        //     }
        // }


    }

    const closeConnection = async () => {
        if (activeUserConnection.hubConnection) {
            await activeUserConnection.hubConnection.stop()
                .catch(err => {
                    console.error(err);

                    dispatch(ShowAlertAction({
                        title: "Close connection error",
                        message: err.message
                    }))
                })
        }
    }

    // const grabWebCamVideo = () => {
    //     navigator.mediaDevices.getUserMedia({
    //         audio: true,
    //         video: true
    //     })
    //         .then(gotStream)
    //         .catch(err => {
    //             console.error("error:", err)
    //         })
    // }

    // const gotStream = (stream: MediaStream) => {
    //     console.log('getUserMedia video stream URL:', stream);
    //     localStream = stream;
    //     // peerConn.addStream(localStream);

    //     let video = localVideoRef.current
    //     if (video) {
    //         video.srcObject = stream
    //         video.play();
    //     }
    // }

    const join = () => {
        const existingConnection = userConnections.find(x => x.roomId === channelName)


        if (existingConnection) {
            dispatch(UpdateActiveUserConnectionAction({
                roomId: existingConnection.roomId,
                isActive: true
            }))

            setLoading(false)
        }
        else {
            const userConnection: IUserConnection = {
                hubConnection: newHubConnection(),
                connectionState: HubConnectionState.Disconnected,
                showConnectionStatus: false,
                userId: user.id,
                name: user.displayName,
                roomId: channelName,
                isGroup: false,
                focused: true
            }

            setIsInitiator(true)
            dispatch(AddUserConnectionAction(userConnection))
        }
    }

    const onSubmit = () => {

        if (channelName.length < 3) {
            setError('Channel name must be at least 3 characters')
        }
        else {
            setLoading(true)
            join()
        }
    }

    const leaveHost = async () => {

        dispatch(SetConnectionStateAction(HubConnectionState.Disconnected))

    }

    if (userConnections.some(x => x.connectionState === HubConnectionState.Connected)) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 50, marginBottom: 50 }}>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Box sx={{ boxShadow: 2, padding: 2, width: '28%', bgcolor: 'background.paper' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Host Channel
                        </Text>

                        {userConnections.map((uc, idx) => {
                            const youCreated = uc.userId === user.id
                            // youCreated && "(you created)"}
                            const data = channelData.filter(x => x.roomId === uc.roomId)[0]

                            return (
                                <List key={idx} style={{ height: 220, overflowX: 'auto' }}>
                                    <ListItem>
                                        <ListItemText primary={uc.roomId} secondary={"CHANNEL NAME"} />
                                    </ListItem>
                                    <View style={{ alignSelf: "center", borderBottomColor: '#eee', borderBottomWidth: 1 }} />
                                    {data && data.messages.length > 0 && data.messages.filter(x => x.isBot).reverse().map(x => {
                                        return (
                                            <ListItem key={x.id}>
                                                <ListItemText primary={<>{x.message}</>} secondary={"System Message"}>
                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            )
                        })}
                        <Button width={150} colorScheme="error" onPress={leaveHost} disabled={true}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#eee',
                            }}>
                                <span style={{ marginRight: 10 }}>Leave Host</span>
                                <ExitToAppIcon />
                            </div>
                        </Button>
                    </Box>
                    <Box sx={{ boxShadow: 2, padding: 2, width: '28%', height: 300, overflowX: 'auto', bgcolor: 'background.paper' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Users Online</Text>
                        <Peers />

                    </Box>
                    <Box sx={{ boxShadow: 2, padding: 2, height: 300, overflowX: 'auto', width: '28%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Setup
                        </Text>
                        <DJCheckList />

                        <Button
                            onPress={onSubmit}
                            mt="5"
                            width={150}
                            colorScheme="success"
                            isLoading={loading}
                            isLoadingText="Initialising..."
                            disabled={true}
                            style={{ position: 'absolute', right: 45, bottom: 20 }}
                        >
                            Start VM
                        </Button>
                    </Box>
                </View>
                <View style={{ alignSelf: "center", borderBottomColor: '#ccc', borderBottomWidth: 2, marginTop: 30 }} />
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Chat />
                    <Box sx={{ boxShadow: 2, padding: 2, width: '61%', bgcolor: 'background.paper', overflowY: 'auto', maxHeight: 400 }}>
                        {
                            camOn ?
                                <VideoStream />
                                :
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                                        Your MIDI Devices
                                    </Text>
                                    <WebMIDI />
                                </View>
                        }
                    </Box>
                </View>
            </View>
        )
    }


    return (
        <Box sx={{ alignSelf: "center", marginTop: 5, boxShadow: 2, padding: 2, width: 300, bgcolor: 'background.paper' }}>
            <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired isInvalid={error !== ''}>
                    <FormControl.Label
                        _text={{
                            bold: true
                        }}>
                        Channel Name
                    </FormControl.Label>
                    <Input placeholder="Enter channel name" onChangeText={setChannelName} />
                    {error !== '' && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
                </FormControl>
                <Button onPress={onSubmit} mt="5" colorScheme="cyan" isLoading={loading} isLoadingText="Initialising...">
                    Start Host Or Join Channel
                </Button>
            </VStack>
        </Box>
    );
};