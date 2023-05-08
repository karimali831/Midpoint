import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import moment from 'moment'
import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CableIcon from '@mui/icons-material/Cable'
import VideocamIcon from '@mui/icons-material/Videocam'
import EditIcon from '@mui/icons-material/Edit'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { StreamChat } from './Chat'
import { StreamHostInfo } from './HostInfo'
import { StreamMidiInfo } from './MidiInfo'
import { StreamCard } from './StreamCard'
import CloseIcon from '@mui/icons-material/Close'
import { getStreamState } from '../../../state/contexts/stream/Selectors'
import {
    SetMidPointJoinIdAction,
    SetTimeLiveAction,
    UpdateHostRoomAction
} from '../../../state/contexts/stream/Actions'
import { useDispatch } from 'react-redux'
import { HubConnectionState } from '@microsoft/signalr'
import { DashboardSection, MidPointStep } from '../../../enum/DashboardSection'
import {
    SetDashboardSection,
    SetMidPointStep
} from '../../../state/contexts/app/Actions'
import { FormInput } from '../../Form/input'
import { StreamCardType } from '../../../enum/StreamCardType'
import { getInstanceState } from '../../../state/contexts/instance/Selectors'
import { MainButton } from '../../Buttons/MainButton'

interface IOwnProps {}

export const Stream: React.FC<IOwnProps> = () => {
    const {
        midPointJoinId,
        userConnection,
        selectedHostRoom,
        updatingHostRoom,
        timeLiveStr
    } = useSelector(getStreamState)

    const { user, camOn } = useSelector(getUserState)
    const { instance } = useSelector(getInstanceState)
    const [maximiseStreamCard, setMaximiseStreamCard] =
        useState<StreamCardType | null>(null)
    const [roomName, setRoomName] = useState<string>(
        selectedHostRoom?.name ?? ''
    )
    const [editInput, setEditInput] = useState<boolean>(false)

    const [soundOn, setSoundOn] = useState<boolean>(true)

    const dispatch = useDispatch()

    if (selectedHostRoom == null || userConnection == null) return null

    React.useEffect(() => {
        window.setInterval(() => {
            const duration = moment.duration(
                moment().diff(instance?.launchTime)
            )
            const hours = duration.hours() > 0 ? `${duration.hours()}h ` : ''
            const value = `${hours}${duration.minutes()}m ${duration.seconds()}s`

            dispatch(SetTimeLiveAction({ duration, value }))
        }, 1000)
    }, [])

    React.useEffect(() => {
        if (updatingHostRoom && editInput) {
            setEditInput(false)
        }
    }, [updatingHostRoom])

    React.useEffect(() => {
        if (
            userConnection == null ||
            userConnection.connectionState !== HubConnectionState.Connected
        ) {
            dispatch(SetDashboardSection(DashboardSection.Overview))
        }

        if (
            midPointJoinId !== null &&
            userConnection?.connectionState == HubConnectionState.Connected
        ) {
            dispatch(SetMidPointJoinIdAction(null))
        }
    }, [midPointJoinId, userConnection])

    const maximiseCard = (card: StreamCardType) => {
        if (maximiseStreamCard == null) {
            setMaximiseStreamCard(card)
        } else if (maximiseStreamCard == card) {
            setMaximiseStreamCard(null)
        } else {
            setMaximiseStreamCard(card)
        }
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div className="align-2">
                {editInput ? (
                    <>
                        <FormInput
                            onChange={setRoomName}
                            type="text"
                            hideStatus={true}
                            placeholder={`Enter MidPoint. join ID`}
                            validation={{
                                value: roomName,
                                minCharsRequired: 3
                            }}
                        />
                        {selectedHostRoom.name !== roomName &&
                            roomName.length > 2 && (
                                <div className="mr5">
                                    <MainButton
                                        onClick={() =>
                                            dispatch(
                                                UpdateHostRoomAction({
                                                    name: roomName,
                                                    id: selectedHostRoom.id
                                                })
                                            )
                                        }
                                        text="Edit"
                                        icon={<EditIcon />}
                                    />
                                </div>
                            )}
                        <MainButton
                            text="Cancel"
                            onClick={() => setEditInput(false)}
                            danger={true}
                            icon={<CloseIcon />}
                        />
                    </>
                ) : (
                    <>
                        <span className="fs28 mr10 lobby-txt">
                            {selectedHostRoom.name}
                        </span>

                        {selectedHostRoom.createdUserId == user?.id && (
                            <div
                                className="link"
                                onClick={() => setEditInput(true)}
                            >
                                <EditIcon />
                            </div>
                        )}
                    </>
                )}
            </div>
            <div className="lobby-header">
                <div className="align-2">
                    <div
                        onClick={() => setSoundOn(!soundOn)}
                        className="align-9 link"
                    >
                        {soundOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
                        <span className="ml10 fs12 mr20">
                            {soundOn ? 'On' : 'Off'}
                        </span>
                    </div>
                    <AccessTimeOutlinedIcon />
                    <span className="ml10 fs12 mr20">
                        Time live: {timeLiveStr}
                        {/* 46m 30s */}
                    </span>
                    <NotificationsOutlinedIcon />
                    <span className="ml10 fs12">Set an alarm</span>
                </div>
            </div>
            <div className="stream-row">
                {(maximiseStreamCard == null ||
                    maximiseStreamCard == StreamCardType.Users) && (
                    <StreamCard
                        size="large"
                        title="View"
                        height={300}
                        webRtcCard={true}
                        maximiseCard={maximiseStreamCard}
                        onOpenInFull={() =>
                            dispatch(SetMidPointStep(MidPointStep.WebRTC))
                        }
                        icon={<CastConnectedIcon />}
                    >
                        <span>WebRTC</span>
                    </StreamCard>
                )}
                {(maximiseStreamCard == null ||
                    maximiseStreamCard == StreamCardType.Chat) && (
                    <StreamCard
                        size="large"
                        title="Chat"
                        height={300}
                        maximiseCard={maximiseStreamCard}
                        onOpenInFull={() => maximiseCard(StreamCardType.Chat)}
                        icon={<ChatIcon />}
                    >
                        <StreamChat />
                    </StreamCard>
                )}
            </div>
            <div className="stream-row">
                {(maximiseStreamCard == null ||
                    maximiseStreamCard == StreamCardType.Setup) && (
                    <StreamCard
                        size="small"
                        title="Host"
                        height={250}
                        maximiseCard={maximiseStreamCard}
                        onOpenInFull={() => maximiseCard(StreamCardType.Setup)}
                        icon={<SettingsOutlinedIcon />}
                    >
                        <StreamHostInfo />
                    </StreamCard>
                )}
                {(maximiseStreamCard == null ||
                    maximiseStreamCard == StreamCardType.Midi) && (
                    <StreamCard
                        size="large"
                        height={250}
                        maximiseCard={maximiseStreamCard}
                        onOpenInFull={() => maximiseCard(StreamCardType.Midi)}
                        title={camOn ? 'Video Cam' : 'MIDI'}
                        icon={camOn ? <VideocamIcon /> : <CableIcon />}
                    >
                        <StreamMidiInfo camOn={camOn} />
                    </StreamCard>
                )}
            </div>
        </motion.div>
    )
}
