import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CableIcon from '@mui/icons-material/Cable';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import VideoStream from '../../../screens/Host/stream.web';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { StreamChat } from './Chat';
import { StreamHostInfo } from './HostInfo';
import { StreamMidiInfo } from './MidiInfo';
import { StreamSetup } from './Setup';
import { StreamCard } from './StreamCard';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import { SetMidPointJoinIdAction, SetUserConnectionAction } from '../../../state/contexts/stream/Actions';
import { useDispatch } from 'react-redux';
import { HubConnectionState } from '@microsoft/signalr';
import { ShowAlertAction } from '../../../state/contexts/app/Actions';

interface IOwnProps {}

export const Stream: React.FC<IOwnProps> = () => {
    
    const { midPointJoinId, userConnection } = useSelector(getStreamState)
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        return () => {
            closeConnection()
        }

    }, [])

    React.useEffect(() => {
        if (midPointJoinId !== null && userConnection?.connectionState == HubConnectionState.Connected) {
            dispatch(SetMidPointJoinIdAction(null))
        }
    }, [midPointJoinId, userConnection]);

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                // .then(() => dispatch(SetUserConnectionAction(null)))
                .catch((err) => {
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

    const { camOn } = useSelector(getUserState);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <span style={{ fontSize: 28 }} className="lobby-txt">
                The Lobby
            </span>
            <div
                className='lobby-header'>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'ceter',
                        flexDirection: 'row',
                    }}
                >
                    <AccessTimeOutlinedIcon />
                    <span style={{ marginLeft: 10, fontSize: 12 }}>
                        Time live: 46m 30s
                    </span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'ceter',
                        flexDirection: 'row',
                    }}
                >
                    <NotificationsOutlinedIcon />
                    <span style={{ marginLeft: 10, fontSize: 12 }}>
                        Set an alarm
                    </span>
                </div>
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
