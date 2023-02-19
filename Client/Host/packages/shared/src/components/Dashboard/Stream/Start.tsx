import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { hideLoading } from 'react-redux-loading-bar'
import { useSelector } from "react-redux";
import { getLoadingBar, getStreamState } from "../../../state/contexts/stream/Selectors";
import { SetMidPointStep } from "../../../state/contexts/app/Actions";
import toast from 'react-hot-toast';
import { MidPointStep } from "../../../enum/DashboardSection";
import { CreateHostRoomAction, GetHostRoomDataAction, GetHostRoomsAction, MessageReceivedAction, SendMessageAction, SetConnectionStateAction, SetHostRoomAction, SetUserConnectionAction, UsersInRoomAction } from "../../../state/contexts/stream/Actions";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { HubConnectionState } from "@microsoft/signalr";
import { IMessage } from "../../../interface/IMessage";
import { IUserConnection } from "../../../interface/IUserConnection";
import { getUserState } from "../../../state/contexts/user/Selectors";
import { newHubConnection } from "../../../utils/HubHelper";
import { timeout, uuidv4 } from "../../../utils/Utils";
import { Starting } from "./Starting";
import sounds from "../../../assets/sounds";
import { Howl } from "howler";
import { CreateAction } from "../../../state/contexts/instance/Actions";
import { getInstanceState } from "../../../state/contexts/instance/Selectors";
import { HostRoom } from "../../../../../../src/graphql/types";

/* 
    Before the next screen appears we should load:
    1. All the software and brand images
    2. Create host room  
*/
export const StartStream = () => {

    // const [loading, setLoading] = useState<boolean>(false)
    const [hostRoom, setHostRoom] = useState<HostRoom | null>(null)
    const { user } = useSelector(getUserState)

    if (!user)
        return null;

    const percentage = useSelector(getLoadingBar)
    const { userConnection } = useSelector(getStreamState)
    const { 
        userCreatedHostRooms, 
        selectedHostRoom, 
        midPointJoinId 
    } = useSelector(getStreamState)

    const { instance } = useSelector(getInstanceState)

    const dispatch = useDispatch()

    const configuration = {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302',
            },
        ],
    };

    const peerConn = new RTCPeerConnection(configuration);

    React.useEffect(() =>  {
        if (instance != null) {
            startWebRtc()
        }

    }, [instance])

    React.useEffect(() => {
        dispatch(GetHostRoomsAction())
    }, [])

    // useEffectSkipInitialRender(() => {
    //     dispatch(showLoading())
    // }, [loading])

    React.useEffect(() => {
        if (!!midPointJoinId && !!selectedHostRoom) {
            set(selectedHostRoom)
        }
    }, [midPointJoinId, selectedHostRoom]);

    const set = async (hostRoom: HostRoom) => {
    
        if (hostRoom.id == selectedHostRoom?.id && userConnection?.connectionState === HubConnectionState.Connected) {
            dispatch(SetMidPointStep(MidPointStep.Stream))
            return
        }

        setHostRoom(hostRoom)
        // setLoading(true)

        toast.loading("Launching new instance in the cloud...")
        dispatch(CreateAction())


    }

    const startWebRtc = async () => {
        toast.loading("Starting WebRTC...")
        await timeout(2000)

        if (hostRoom == null) {
            toast.error("An error occurred")
            return;
        }

        if (userConnection != null) {
            await closeConnection()
                .then(() => startConn(hostRoom))
                .catch(() => toast.error("An error occured"))

            return;
        }

        startConn(hostRoom)
    }

    const startConn = (hostRoom: HostRoom) => {
 
        const uc: IUserConnection = {
            hubConnection: newHubConnection(),
            connectionState: HubConnectionState.Disconnected,
            showConnectionStatus: false,
            userId: user.id,
            displayName: user.displayName,
            roomId: hostRoom.id,
            roomName: hostRoom.name
        }

        dispatch(GetHostRoomDataAction({ roomId: hostRoom.id, pageNumber: 1 }))
        dispatch(SetHostRoomAction(hostRoom))
        dispatch(SetUserConnectionAction(uc))

        start(uc)
        // setTimeout(() =>  start(uc), 2000)
    }

    const SoundPlay = (src: any) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    Howler.volume(1.0)

    const start = (userConnection: IUserConnection) => {
        const { hubConnection } = userConnection;

        if (hubConnection.state === HubConnectionState.Disconnected) {
            hubConnection
                .start()
                .then((a) => {
                    // grabWebCamVideo()
                    dispatch(SetConnectionStateAction(hubConnection.state));
                    console.log('*[Channel] Connected Id: ' + hubConnection.connectionId);

                    hubConnection.on('ReceiveMessage', (message: IMessage) => {

                        console.log(message)

                        if (message.isBot && message.message.includes("joined")) {
                            SoundPlay(sounds.confirmSound)
                        }

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
                .catch((error) => toast.error(error.message))
                .finally(() => {
                    toast.remove()
                    dispatch(hideLoading())

                    toast.success("You're all set!")
                    dispatch(SetMidPointStep(!!midPointJoinId ? MidPointStep.Stream : MidPointStep.Welcome))
                })
        }
    };

    const createPeerConnection = () => {
        if (selectedHostRoom == null)
            return;

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
            await userConnection.hubConnection
                .stop()
                .then(() => { 
                    dispatch(SetUserConnectionAction(null))
                    dispatch(SetHostRoomAction(null))
                    // dispatch(SetDashboardSection(DashboardSection.Overview))
                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err.message)
                });
        }
    };

    const createHostRoom = async () => {
        if (maxReached) {
            toast.error("Maximum rooms created reached")
            return;
        }

        await closeConnection()
        dispatch(CreateHostRoomAction())
    }

    const limit = 5;
    const maxReached = userCreatedHostRooms.length === limit

    if (hostRoom != null) {
        return <Starting />
    }

    return (
        <nav  style={{ width: 200 }}>
            <List>
                {userCreatedHostRooms.map(room => 
                    <ListItem disablePadding key={room.id}>
                        <ListItemButton onClick={() => set(room)}>
                            <ListItemText primary={
                                <>
                                    {room.name} 
                                    {room.id == selectedHostRoom?.id && 
                                        <div  className='controllet-set-input' style={{ background: '#45C419', marginTop: 10 }} />
                                    }
                                </>
                            } secondary={
                                <span style={{  color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>
                                    {new Date(room.createdAt).toLocaleDateString("en-GB")}
                                </span>
                            }/>
                        </ListItemButton>
                    </ListItem>
                )}
                <ListItem disablePadding>
                    <ListItemButton disabled={maxReached} onClick={createHostRoom}>
                        <ListItemText  primary={"New Room"} secondary={
                            <span 
                                style={{ 
                                    color: maxReached ? 'rgb(196, 25, 25)' : 'rgba(255, 255, 255, 0.6)', 
                                    fontSize: 12  
                                }}
                            >
                                {maxReached ? "Max reached" : `${limit - userCreatedHostRooms.length} remaining`}
                            </span>
                        } />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    )
}