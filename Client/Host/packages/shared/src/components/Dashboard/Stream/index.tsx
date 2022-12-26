import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
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

interface IOwnProps {}

export const Stream: React.FC<IOwnProps> = () => {
    React.useEffect(() => {

    }, []);

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
                    icon={<SettingsOutlinedIcon />}
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
