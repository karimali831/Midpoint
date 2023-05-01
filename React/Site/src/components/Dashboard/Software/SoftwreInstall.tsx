import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MidPointStep } from '../../../enum/DashboardSection';
import { SetMidPointStep } from '../../../state/contexts/app/Actions';
import { getAppState } from '../../../state/contexts/app/Selectors';
import { SoftwareCard } from './SoftwareCard';
import { Button } from '@mui/material';

export const SoftwareInstall = () => {

    React.useEffect(() => {}, [])

    const dispatch = useDispatch()

    const { selectedSoftware } = useSelector(getAppState)
    
    if (selectedSoftware == null)
        return null


    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: 600 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
            style={{
                margin: '0 auto',
                width: 600,
                marginTop: 140,
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <span
                    style={{
                        fontSize: 32,
                        margin: 15
                    }}
                >
                    Install the corresponding software
                </span>
                <SoftwareCard software={selectedSoftware} highlightSelectedOff={true} />
                <div
                    onClick={() => dispatch(SetMidPointStep(MidPointStep.SoftwareSelect))}
                    style={{
                        margin: '30px 0',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            cursor: 'pointer',
                            marginRight: 30,
                        }}
                    >
                        <ArrowBackIcon />
                        <span style={{ marginLeft: 10 }}>Go back</span>
                    </div>
                    <Button
                        onClick={() => dispatch(SetMidPointStep(MidPointStep.Stream))}
                        style={{
                            borderRadius: 25,
                            backgroundColor: '#195DC4',
                            height: 30,
                        }}
                        startIcon={<ArrowForwardIcon />}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </motion.div>
    );

}