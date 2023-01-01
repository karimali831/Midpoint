import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { SoftwareCard } from './SoftwareCard';
import './styles.css'

export enum SoftwareType {
    VirtualDj,
    ReckordBox,
    TraktorPro3,
    TraktorLe3,
    SeratoDjLite,
    SeratoDjPro,
    Mixx,
    // Brands
    PioneerDj,
    Hercules,
    Denon,
    Numark,
    Reloop,
    NativeInstruments,
    TheNextBeat
}


export const SoftwareSelect = () => {
    React.useEffect(() => {}, []);

    const [brandsExpanded, setBrandsExpanded] = useState<boolean>(false)

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
             <span style={{ fontSize: 28 }}>
                Select your software of choice
            </span>
            <div className='software-select'>
                <SoftwareCard software={SoftwareType.VirtualDj} set={true} />
                <SoftwareCard software={SoftwareType.ReckordBox} set={true} />
                <SoftwareCard software={SoftwareType.TraktorPro3} set={true} />
                <SoftwareCard software={SoftwareType.TraktorLe3} set={true} />
                <SoftwareCard software={SoftwareType.SeratoDjLite} set={true} />
                <SoftwareCard software={SoftwareType.SeratoDjPro} set={true} />
                <SoftwareCard software={SoftwareType.Mixx} set={true} />
            </div>
            <div
                style={{
                    marginTop: 50,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                 <span style={{ fontSize: 28 }}>
                    Don't know what software you need to use?
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 10 }}>
                    Select the branch of your MIDI device.
                </span>
      
                <div onClick={() => setBrandsExpanded(!brandsExpanded)} style={{ cursor: 'pointer', marginTop: 10 }}>
                    {brandsExpanded ? 
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}> 
                            <span style={{ fontSize: 12 }}>Hide brands</span>
                            <ExpandLessIcon />
                        </div>
                    :
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}> 
                            <span style={{ fontSize: 12 }}>Show brands</span>
                            <ExpandMoreIcon/>
                        </div>
                    }
                </div>

                <Collapse in={brandsExpanded}>
                    <div
                        style={{
                            marginTop: 20,
                            display: 'grid',
                            width: '100%',
                            gridGap: 20,
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 0fr))'
                        }}
                    >
                        <SoftwareCard software={SoftwareType.PioneerDj} />
                        <SoftwareCard software={SoftwareType.Hercules} />
                        <SoftwareCard software={SoftwareType.Denon} />
                        <SoftwareCard software={SoftwareType.Numark} />
                        <SoftwareCard software={SoftwareType.Reloop} />
                        <SoftwareCard software={SoftwareType.NativeInstruments} />
                        <SoftwareCard software={SoftwareType.TheNextBeat} />
                    </div>
                </Collapse>
            </div>
        </motion.div>
    );
};
