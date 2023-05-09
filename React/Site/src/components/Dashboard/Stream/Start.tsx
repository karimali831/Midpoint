import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { useSelector } from 'react-redux'
import { getStreamState } from '../../../state/contexts/stream/Selectors'
import {
    SetDashboardSection,
    SetMidPointStep
} from '../../../state/contexts/app/Actions'
import toast from 'react-hot-toast'
import { DashboardSection, MidPointStep } from '../../../enum/DashboardSection'
import {
    GetHostRoomDataAction,
    MessageReceivedAction,
    SendMessageAction,
    SetConnectionStateAction,
    SetHostRoomAction,
    SetUserConnectionAction,
    UsersInRoomAction
} from '../../../state/contexts/stream/Actions'
import { HubConnectionState } from '@microsoft/signalr'
import { IMessage } from '../../../interface/IMessage'
import { IUserConnection } from '../../../interface/IUserConnection'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { newHubConnection } from '../../../utils/HubHelper'
import { uuidv4 } from '../../../utils/Utils'
import { Starting } from './Starting'
import { CreateAction } from '../../../state/contexts/instance/Actions'
import { getInstanceState } from '../../../state/contexts/instance/Selectors'

export const StartStream = () => {
    const [hasEnoughTokens, setHasEnoughTokens] = useState<boolean | null>(null)
    const { user } = useSelector(getUserState)

    const { selectedHostRoom, midPointJoinId } = useSelector(getStreamState)

    if (!user || !selectedHostRoom) return null

    // const percentage = useSelector(getLoadingBar)
    const { userConnection } = useSelector(getStreamState)
    const { instance } = useSelector(getInstanceState)

    const dispatch = useDispatch()

    const configuration = {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302'
            }
        ]
    }

    const minimumTokensRequired = 20

    const peerConn = new RTCPeerConnection(configuration)

    React.useEffect(() => {
        if (
            user.purchasedTokens &&
            user.purchasedTokens >= minimumTokensRequired
        ) {
            setHasEnoughTokens(true)

            if (instance == null) {
                toast.loading('Launching new cloud instance...')
                dispatch(CreateAction())
            }
        } else {
            // toast.custom("Insufficient tokens")
            dispatch(SetDashboardSection(DashboardSection.Tokens))
        }
    }, [])

    React.useEffect(() => {
        if (instance) {
            dispatch(showLoading())
            startWebRtc()
        }
    }, [instance])

    const startWebRtc = async () => {
        toast.loading('Starting WebRTC...')
        // await timeout(2000)

        if (selectedHostRoom == null) {
            toast.error('An error occurred')
            return
        }

        if (userConnection != null) {
            await closeConnection()
                .then(() => startConn())
                .catch(() => toast.error('An error occured'))

            return
        }

        startConn()
    }

    const startConn = () => {
        if (hasEnoughTokens === false) {
            toast.error('Not enough tokens')
            return
        }

        const uc: IUserConnection = {
            hubConnection: newHubConnection(),
            connectionState: HubConnectionState.Disconnected,
            showConnectionStatus: false,
            userId: user.id,
            displayName: user.displayName,
            roomId: selectedHostRoom.id,
            roomName: selectedHostRoom.name
        }

        dispatch(
            GetHostRoomDataAction({
                roomId: selectedHostRoom.id,
                pageNumber: 1
            })
        )
        dispatch(SetHostRoomAction(selectedHostRoom))
        dispatch(SetUserConnectionAction(uc))

        start(uc)
        // setTimeout(() =>  start(uc), 2000)
    }

    // const SoundPlay = (src: any) => {
    // const sound = new Howl({
    //     src
    // })
    // sound.play()
    // }

    // Howler.volume(1.0)

    const start = (userConnection: IUserConnection) => {
        const { hubConnection } = userConnection

        if (hubConnection.state === HubConnectionState.Disconnected) {
            hubConnection
                .start()
                .then(() => {
                    dispatch(SetConnectionStateAction(hubConnection.state))
                    console.log(
                        '*[Channel] Connected Id: ' + hubConnection.connectionId
                    )

                    hubConnection.on('ReceiveMessage', (message: IMessage) => {
                        if (
                            message.isBot &&
                            message.message.includes('joined')
                        ) {
                            // SoundPlay(sounds.confirmSound)
                        }

                        if (message.userId === user.id) {
                            dispatch(
                                MessageReceivedAction({
                                    message,
                                    roomId: userConnection.roomId
                                })
                            )
                        } else {
                            dispatch(
                                SendMessageAction({
                                    message,
                                    roomId: userConnection.roomId
                                })
                            )
                        }

                        createPeerConnection()
                    })

                    hubConnection.on(
                        'UsersInRoom',
                        (users: IUserConnection[]) => {
                            dispatch(UsersInRoomAction(users))
                        }
                    )

                    hubConnection.onclose(() => {
                        console.log('*[CHAT] Connection closed')

                        closeConnection().then(() =>
                            dispatch(
                                SetConnectionStateAction(
                                    HubConnectionState.Disconnected
                                )
                            )
                        )
                    })

                    hubConnection.onreconnecting(() => {
                        console.log('*[CHAT] Lost connection')
                        dispatch(
                            SetConnectionStateAction(
                                HubConnectionState.Reconnecting
                            )
                        )
                    })

                    hubConnection.onreconnected(() => {
                        console.log('*[CHAT] Re-connected')
                        dispatch(
                            SetConnectionStateAction(
                                HubConnectionState.Connected
                            )
                        )
                    })

                    hubConnection.invoke('JoinRoom', userConnection)
                })
                .catch((error) => toast.error(error.message))
                .finally(() => {
                    toast.remove()
                    dispatch(hideLoading())

                    // toast.success("You're all set!")
                    dispatch(
                        SetMidPointStep(
                            !!midPointJoinId
                                ? MidPointStep.Stream
                                : MidPointStep.Welcome
                        )
                    )
                })
        }
    }

    const createPeerConnection = () => {
        if (selectedHostRoom == null) return

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
                    name: 'System'
                }

                dispatch(
                    SendMessageAction({ message, roomId: selectedHostRoom.id })
                )
            }
        }
    }

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                .then(() => {
                    dispatch(SetUserConnectionAction(null))
                    dispatch(SetHostRoomAction(null))
                })
                .catch((err) => {
                    console.error(err)
                    toast.error(err.message)
                })
        }
    }

    return <Starting />
}
