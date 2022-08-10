import { HubConnectionState } from '@microsoft/signalr';
import {
    Box,
    Button,
    FormControl,
    Input, Text, View, VStack
} from 'native-base';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectSkipInitialRender from '../../hooks/useEffectSkipInitialRender';
import { IMessage } from '../../interface/IMessage';
import { IUserConnection } from '../../interface/IUserConnection';
import { ShowAlertAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { getUser } from '../../state/contexts/user/Selectors';
import { AddUserConnectionAction, MessageReceivedAction, SendMessageAction, SetConnectionStateAction, UpdateActiveUserConnectionAction, UsersInRoomAction } from '../../state/contexts/webrtc/Actions';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';
import { newHubConnection } from '../../utils/HubHelper';
import styles from './styles';

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
        onlineUsers,
        channelData
    } = webRTCState

    const [channelName, setChannelName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [isInitiator, setIsInitiator] = useState<boolean>(false)

    let localVideoRef = useRef<HTMLVideoElement>(null)
    let removeVideoRef = useRef<HTMLVideoElement>(null)

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
                    grabWebCamVideo()
                    dispatch(SetConnectionStateAction(hubConnection.state))

                    console.log("*[Channel] Connected Id: " + hubConnection.connectionId)


                    hubConnection.on("ReceiveMessage", (message: IMessage) => {
                        console.log("*[Channel] ReceiveMessage")

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
                    id: "",
                    userId: user.id,
                    name: user.displayName,
                    message: peerConn.localDescription?.toJSON(),
                    date: new Date()
                }

                dispatch(SendMessageAction({ message, roomId: channelName }))
            }
        }

        peerConn.ontrack = (event) => {
            let video = removeVideoRef.current
            if (video) {
                video.srcObject = event.streams[0]
            }
        }


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

    const grabWebCamVideo = () => {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
            .then(gotStream)
            .catch(err => {
                console.error("error:", err)
            })
    }

    const gotStream = (stream: MediaStream) => {
        console.log('getUserMedia video stream URL:', stream);
        localStream = stream;
        // peerConn.addStream(localStream);

        let video = localVideoRef.current
        if (video) {
            video.srcObject = stream
            video.play();
        }
    }

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

    if (userConnections.some(x => x.connectionState === HubConnectionState.Connected)) {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 50, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Connections</Text>

                {userConnections.map((uc, idx) => {
                    const youCreated = uc.userId === user.id

                    const data = channelData.filter(x => x.roomId === uc.roomId)[0]

                    return (
                        <View key={idx}>
                            <Text>{uc.roomId} {youCreated && "(you created)"}</Text>
                            <Text>Users in room: {onlineUsers.map(x => x.name).join(",")}</Text>
                            <Text>Messages</Text>
                            {data && data.messages.length > 0 && data.messages.map(x => {
                                return (
                                    <Text key={x.id}>{x.message}</Text>
                                )
                            })}
                            <View>
                                <div>
                                    <h5>Video chat</h5>
                                    <div className="videoArea">
                                        <video id="localVideo" ref={localVideoRef} autoPlay={true} playsInline={true}></video>
                                        <video id="remoteVideo" ref={removeVideoRef} autoPlay={true} playsInline={true}></video>
                                    </div>
                                </div>
                                {/* <VideoStream ref={localVideoRef} /> */}
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <Box alignItems="center" style={styles.form}>
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