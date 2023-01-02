import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckIcon from '@mui/icons-material/Check';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CableIcon from '@mui/icons-material/Cable';
import EditIcon from '@mui/icons-material/Edit';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoStream from '../../../screens/Host/stream.web';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { StreamChat } from './Chat';
import { StreamHostInfo } from './HostInfo';
import { StreamMidiInfo } from './MidiInfo';
import { StreamSetup } from './Setup';
import { StreamCard } from './StreamCard';
import CloseIcon from '@mui/icons-material/Close';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import {  DeleteHostRoomAction, SetHostRoomAction, SetMidPointJoinIdAction, SetUserConnectionAction, UpdateHostRoomAction } from '../../../state/contexts/stream/Actions';
import { useDispatch } from 'react-redux';
import { HubConnectionState } from '@microsoft/signalr';
import { getAppState } from '../../../state/contexts/app/Selectors';
import { DashboardSection, MidPointStep } from '../../../enum/DashboardSection';
import { MainButton } from '../../Buttons/MainButton';
import toast from 'react-hot-toast';
import { SetDashboardSection } from '../../../state/contexts/app/Actions';
import { FormInput } from '../../Form/input';
import { Button } from 'native-base';

interface IOwnProps {}

export const Stream: React.FC<IOwnProps> = () => {

    const { 
        midPointJoinId, 
        userConnection, 
        selectedHostRoom,
        updatingHostRoom
    } = useSelector(getStreamState)

    const { midpointStep } = useSelector(getAppState)
    const { user } = useSelector(getUserState)

    const [roomName, setRoomName] = useState<string>(selectedHostRoom?.name ?? '')
    const [editInput, setEditInput] = useState<boolean>(false)

    const [soundOn, setSoundOn] = useState<boolean>(true)

    const dispatch = useDispatch()
    
    if (selectedHostRoom == null || userConnection == null)
        return null;

    React.useEffect(() => {
        if (updatingHostRoom && editInput) {
            setEditInput(false)
        } 
    }, [updatingHostRoom])

    React.useEffect(() => {
        if (userConnection == null || userConnection.connectionState !== HubConnectionState.Connected) {
            dispatch(SetDashboardSection(DashboardSection.Overview))
        }

        if (midPointJoinId !== null && userConnection?.connectionState == HubConnectionState.Connected) {
            dispatch(SetMidPointJoinIdAction(null))
        }
    }, [midPointJoinId, userConnection]);

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                .then(() => { 
                    dispatch(SetUserConnectionAction(null))
                    dispatch(SetHostRoomAction(null))
                    dispatch(SetDashboardSection(DashboardSection.Overview))
                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err.message)
                });
        }
    };

    const deleteHostRoom = async () => {
        await closeConnection()
            .then(() => dispatch(DeleteHostRoomAction(selectedHostRoom.id)))
    }

    const { camOn } = useSelector(getUserState);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                
                {editInput ?
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
                    {selectedHostRoom.name !== roomName && roomName.length > 2 &&
                        <Button
                            onPress={() => dispatch(UpdateHostRoomAction({ name: roomName, id: selectedHostRoom.id }))}
                            style={{
                                borderRadius: 25,
                                height: 30,
                                marginRight: 10
                                
                            }}
                            isLoading={updatingHostRoom}
                            isLoadingText="Updating"
                            colorScheme={"info"}
                            startIcon={<EditIcon style={{ fontSize: 14 }} />}
                        >
                            Edit
                        </Button>
                    }
                    <Button
                        onPress={() => setEditInput(false)}
                        style={{
                            borderRadius: 25,
                            height: 30,
                            
                        }}
                        colorScheme={"danger"}
                        startIcon={<CloseIcon style={{ fontSize: 14 }} />}
                    >
                        Cancel
                    </Button>
                </>
                :

                    <>
                    
                        <span style={{ fontSize: 28, marginRight: 10 }} className="lobby-txt">
                            {selectedHostRoom.name}
                        </span>

                        {selectedHostRoom.createdUserId == user?.id &&
                            <div onClick={() => setEditInput(true)} style={{ cursor: 'pointer' }}>
                                <EditIcon />
                            </div>
                        }
                    </>
                }
            </div>
            <div
                className='lobby-header'>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'ceter',
                        flexDirection: 'row',
                        width: '100%'
                    }}
                >
                    <div onClick={() => setSoundOn(!soundOn)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        {soundOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
                        <span style={{ marginLeft: 10, fontSize: 12, marginRight: 20 }}>
                            {soundOn ? "On" : "Off"}
                        </span>
                    </div>
                    <AccessTimeOutlinedIcon />
                    <span style={{ marginLeft: 10, fontSize: 12, marginRight: 20 }}>
                        Time live: 46m 30s
                    </span>
                    <NotificationsOutlinedIcon />
                    <span style={{ marginLeft: 10, fontSize: 12 }}>
                        Set an alarm
                    </span>
                </div>

                {midpointStep === MidPointStep.Stream && !!selectedHostRoom  &&
                    <>
                        <div style={{ marginRight: 30, display: 'flex', flexDirection: 'row' }}>
                            <MainButton
                                width={100}
                                icon={<ArrowBackIcon style={{ fontSize: 20 }} />}
                                outline={true}
                                text="Channels"
                                onClick={() => dispatch(SetDashboardSection(DashboardSection.Start))}
                            />
                            <div style={{ marginLeft: 10 }} />
                            {
                                selectedHostRoom.createdUserId == user?.id &&
                                <MainButton
                                    width={120}
                                    icon={<CloseIcon style={{ fontSize: 20 }} />}
                                    danger={true}
                                    text="Delete Room"
                                    onClick={deleteHostRoom}
                                />
                            }
                        </div>
                    </>
                }
            </div>
            <div className='stream-row'>
                <StreamCard
                    size="small"
                    title="Users"
                    icon={<PeopleAltIcon />}
                >
                    <StreamHostInfo />
                </StreamCard>
                <StreamCard size="large" title="Chat" icon={<ChatIcon />}>
                    <StreamChat />
                </StreamCard>
            </div>
            <div className='stream-row'>
                <StreamCard
                    size="small"
                    title="Setup"
                    icon={<SettingsOutlinedIcon />}
                >
                    <StreamSetup />
                </StreamCard>
                <StreamCard
                    size="large"
                    title="Connected MIDI Devices"
                    icon={<CableIcon />}
                >
                    {
                        camOn ? 
                        <VideoStream /> :
                        <StreamMidiInfo />
                    }
                </StreamCard>
            </div>
        </motion.div>
    );
};
