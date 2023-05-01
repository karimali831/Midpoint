import { motion } from 'framer-motion';
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { SetMidPointStep } from '../../state/contexts/app/Actions';
import { MidPointStep } from '../../enum/DashboardSection';
import { useDispatch } from 'react-redux';
import { getUserState } from '../../state/contexts/user/Selectors';
import { Button } from '@mui/material';

export const ConnectedMidi = () => {
    React.useEffect(() => { }, [])
    const dispatch = useDispatch()

    const { user } = useSelector(getUserState)

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div className='connected-midi-container'>
                <span className='connected-midi-title'>
                    Linked MIDI device
                </span>
                <span className='connected-midi-sub'>
                    Don't see your MIDI device? Continue on and set yours in the lobby.
                </span>
                <span className='connected-midi-device'>
                    {!!user?.defaultMidiDevice ?
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'row' }}>
                            <span style={{ marginRight: 10 }}>{user.defaultMidiDevice}</span>
                            <CheckCircleOutlineIcon style={{ color: "rgb(69, 196, 25)" }} />
                        </div>
                    :
                        <span style={{ color: 'rgb(196, 25, 25)' }}>
                            No device linked
                        </span>
                    }
                </span>
                <div className='connected-midi-action-btn'>
                    <div
                        onClick={() => dispatch(SetMidPointStep(MidPointStep.Welcome))}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <ArrowBackIcon />
                        <span style={{ marginLeft: 10 }}>Go back</span>
                    </div>
                    <Button
                        onClick={() => dispatch(SetMidPointStep(MidPointStep.SoftwareSelect))}
                        style={{
                            borderRadius: 25,
                            backgroundColor: '#195DC4',
                            height: 30,
                            
                        }}
                        // colorScheme="cyan"
                        startIcon={<ArrowForwardIcon />}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}