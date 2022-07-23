import { HubConnectionState } from '@microsoft/signalr';
import {
    Box, FormControl,
    Input,
    WarningOutlineIcon
} from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useEffectSkipInitialRender from '../../hooks/useEffectSkipInitialRender';
import { IMessage } from '../../interface/IMessage';
import { IUserConnection } from '../../interface/IUserConnection';
import commonStyles from '../../layout/CommonStyles';
import { ShowAlertAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { getUser } from '../../state/contexts/user/Selectors';
import { MessageReceivedAction, SendMessageAction, SetConnectionStateAction, UsersInRoomAction } from '../../state/contexts/webrtc/Actions';
import { getWebRTCState } from '../../state/contexts/webrtc/Selectors';
import styles from './styles';

const StartHost = () => {
    const appState = useSelector(getAppState)
    const webRTCState = useSelector(getWebRTCState)

    const user = useSelector(getUser)
    const dispatch = useDispatch()
    const {
        appFocused
    } = appState

    const {
        userConnections
    } = webRTCState

    const activeUserConnection = userConnections.filter(x => x.focused)[0]

    React.useEffect(() => {

    }, [])

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

    const start = (userConnection: IUserConnection) => {
        const { hubConnection } = userConnection

        if (hubConnection.state === HubConnectionState.Disconnected) {
            try {
                hubConnection.start()
                    .then(a => {
                        dispatch(SetConnectionStateAction(hubConnection.state))

                        if (hubConnection.connectionId) {
                            console.log("*[Channel] Connected Id: " + hubConnection.connectionId)

                            hubConnection.on("ReceiveMessage", (message: IMessage) => {
                                console.log("*[Channel] ReceiveMessage")

                                if (message.userId === user?.id) {
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
                        }
                        else {
                            alert("error")
                        }
                    })
            }
            catch (err: any) {
                dispatch(ShowAlertAction({
                    title: "Error while establishing connection",
                    message: err.message
                }))
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


    return (
        <View style={commonStyles.centeredContainer}>
            <Box alignItems="center" style={styles.form}>
                <FormControl isInvalid w="75%" width={300}>
                    <FormControl.Label>
                        Create channel
                    </FormControl.Label>
                    <Input placeholder="Channel name" />
                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        Invalid channel
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>

        </View>
    );
};

export default StartHost;
