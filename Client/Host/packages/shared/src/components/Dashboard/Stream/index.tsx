import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CableIcon from '@mui/icons-material/Cable';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { motion } from 'framer-motion';
import React from 'react';
import { StreamChat } from './Chat';
import { StreamHostInfo } from './HostInfo';
import { StreamMidiInfo } from './MidiInfo';
import { StreamSetup } from './Setup';
import { StreamCard } from './StreamCard';

interface IOwnProps {}

export const Stream: React.FC<IOwnProps> = () => {
    React.useEffect(() => {}, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            style={{ marginLeft: 15 }}
        >
            
            <div
                style={{
                    display: 'flex',
                    alignItems: 'ceter',
                    flexDirection: 'row',
                    margin: '30px 0',
                    width: 270,
                    justifyContent: 'space-between',
                }}
            >
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <StreamCard
                    size="small"
                    title="Host information"
                    icon={<SettingsOutlinedIcon />}
                >
                    <StreamHostInfo />
                </StreamCard>
                <StreamCard size="large" title="Chat" icon={<ChatIcon />}>
                    <StreamChat />
                </StreamCard>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
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
                    <StreamMidiInfo />
                </StreamCard>
            </div>
        </motion.div>
    );
};
