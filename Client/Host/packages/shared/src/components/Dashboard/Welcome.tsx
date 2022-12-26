import { motion } from 'framer-motion';
import { Button } from 'native-base';
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { MidPointStep } from '../../enum/DashboardSection';
import { SetMidPointStep } from '../../state/contexts/app/Actions';


export const Welcome = () => {
    React.useEffect(() => { }, [])
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div style={{ marginTop: 150, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <span style={{ fontSize: 34 }}>Welcome to MidPoint.</span>
                <span style={{ margin: "10px 30px", color: 'rgba(255, 255, 255, 0.6)', flexWrap: 'wrap' }}>
                    In 10 minutes, you will start playing with your tokens. This will give you enough time to set everything up.
                </span>
                <Button
                    onPress={() => dispatch(SetMidPointStep(MidPointStep.ConnectedMidi))}
                    style={{
                        borderRadius: 25,
                        backgroundColor: '#195DC4',
                        height: 30,
                        marginTop: 30
                    }}
                    colorScheme="cyan"
                    startIcon={<ArrowForwardIcon />}
                >
                    Continue
                </Button>
            </div>
        </motion.div>
    )
}