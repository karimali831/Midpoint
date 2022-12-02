import { HubConnectionState } from '@microsoft/signalr';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LinkIcon from '@mui/icons-material/Link';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import {
    Button, Text, View
} from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HostParams } from '../../../types/types';
import { Chat } from '../../components/Chat';
import DJCheckList from '../../components/DJCheckList';
import { FormInput } from '../../components/Form/input';
import { Peers } from '../../components/Peers';
import WebMIDI from '../../components/WebMidi';
import { AppScreen } from '../../enum/AppScreen';
import useEffectSkipInitialRender from '../../hooks/useEffectSkipInitialRender';
import { IMessage } from '../../interface/IMessage';
import { IUserConnection } from '../../interface/IUserConnection';
import { ShowAlertAction, ShowScreenAction } from '../../state/contexts/app/Actions';
import { getUser, getUserState } from '../../state/contexts/user/Selectors';
import { MessageReceivedAction, SendMessageAction, SetConnectionStateAction, SetUserConnectionAction, UsersInRoomAction } from '../../state/contexts/webrtc/Actions';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';
import { newHubConnection } from '../../utils/HubHelper';
import { joinLink } from '../../utils/UrlHelper';
import { uuidv4 } from '../../utils/Utils';
import { FormValidation } from '../Login';
import VideoStream from './stream.web';

export function StartHost() {
    const user = useSelector(getUser)
    const webRTCState = useSelector(getWebRTCState)

    const { id } = useParams<HostParams>();

    const dispatch = useDispatch()

    const {
        userConnection,
        channelData
    } = webRTCState

    const {
        camOn
    } = useSelector(getUserState)

    const [channelName, setChannelName] = useState<FormValidation>({
        value: '',
        urlValidator: true
    })
    const [loading, setLoading] = useState<boolean>(false)

    const configuration = {
        'iceServers': [{
            'urls': 'stun:stun.l.google.com:19302'
        }]
    };

    const peerConn = new RTCPeerConnection(configuration);

    React.useEffect(() => {
        if (!!id) {
            join()
        }
    }, [id])

    useEffectSkipInitialRender(() => {
        if (!!userConnection?.hubConnection) {
            start(userConnection)
        }
    }, [userConnection])

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
                                    message, roomId: userConnection.roomId
                                })
                            )
                        }
                        else {
                            dispatch(
                                SendMessageAction({ message, roomId: userConnection.roomId })
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
                    message: peerConn.localDescription?.toJSON(),
                    createdAt: new Date().toDateString(),
                    roomId: ''
                }

                dispatch(SendMessageAction({ message, roomId: channelName.value }))
            }
        }
    }

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection.stop()
                .catch(err => {
                    console.error(err);

                    dispatch(ShowAlertAction({
                        title: "Close connection error",
                        message: err.message
                    }))
                })
        }
    }

    const join = () => {
        const userConnection: IUserConnection = {
            hubConnection: newHubConnection(),
            connectionState: HubConnectionState.Disconnected,
            showConnectionStatus: false,
            userId: user.id,
            displayName: user.displayName,
            roomId: uuidv4(),
            roomName: channelName.value
        }

        dispatch(SetUserConnectionAction(userConnection))
    }

    const onSubmit = () => {
        setLoading(true)
        join()
    }

    const leaveHost = async () => {
        dispatch(SetConnectionStateAction(HubConnectionState.Disconnected))
    }

    if (userConnection) {
        const copyJoinLink = () => {
            navigator.clipboard.writeText(joinLink(userConnection.roomId))
            dispatch(ShowAlertAction({ title: "Link join copied", status: "success", duration: 1500 }))
        }

        const data = channelData.filter(x => x.roomId === userConnection.roomId)[0]

        return (
            <View style={{
                alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 50, padding: 30, marginBottom: 50, backgroundColor: '#eee'
            }}>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }
                } >
                    <Box sx={{ boxShadow: 2, padding: 2, width: '28%', bgcolor: 'background.paper' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Host Channel
                        </Text>
                        <List style={{ height: 220, overflowX: 'auto' }}>

                            <ListItem>
                                <ListItemText primary={userConnection.roomName} secondary="CHANNEL NAME" />
                                <ListItemText
                                    primaryTypographyProps={{ fontSize: 13, textAlign: 'right', color: '#195DC4' }}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => copyJoinLink()}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <LinkIcon />
                                        <Text style={{ marginLeft: 3, color: '#195DC4' }}>Copy Join Link</Text>
                                    </View>
                                </ListItemText>
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
                    <Box sx={{ boxShadow: 2, padding: 2, height: 300, overflowX: 'auto', width: '28%', bgcolor: 'background.paper' }}>
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
                </ View>
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
        <div style={{ height: '100%', marginTop: 70 }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    cursor: 'pointer'
                }}
                onClick={() => dispatch(ShowScreenAction({ screen: AppScreen.Dashboard }))}
            >
                <ArrowBackIcon />
                <span style={{ marginLeft: 10 }}>Dashboard</span>
            </div>

            <motion.form
                initial={{ width: 0 }}
                animate={{ width: 400 }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                className='midpoint-form'
                style={{
                    margin: '0 auto',
                    width: 380,
                    marginTop: 140
                }}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: 40 }}>Connect MidPoint.</span>
                    <span style={{ marginTop: 5, color: 'rgba(255, 255, 255, 0.6)' }}>
                        Stream with your team. Set the standard.
                    </span>
                </div>

                <FormInput
                    onChange={(text => setChannelName({
                        ...channelName,
                        value: text
                    }))}
                    validation={channelName}
                    placeholder={`${joinLink("room-id")}`}
                />
                <Button
                    disabled={channelName.value === ""}
                    onPress={onSubmit}
                    mt="5"
                    style={{
                        borderRadius: 25,
                        backgroundColor: (channelName.value === "" ? 'grey' : '#195DC4')
                    }}
                    colorScheme="cyan"
                    isLoading={loading}
                    isLoadingText="Initialising..."
                    startIcon={<PeopleAltOutlinedIcon />}
                >
                    Join MidPoint.
                </Button>
            </motion.form>
        </div>
    )
};