import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SetActiveMidiInputAction } from '../../../state/contexts/midi/Actions';
import { getMidiState } from '../../../state/contexts/midi/Selectors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const StreamSetup = () => {
    React.useEffect(() => {}, []);

    const [expand, setExpand] = useState<boolean>(true)

    const dispatch = useDispatch()
    const { 
        activeInput, 
        inputs, 
        controllerReady 
    } = useSelector(getMidiState);

    const connectedDevices = inputs.filter(x => x.connection === "open" && x.state === "connected")

    return (
        <div>
            <span style={{ fontSize: 14 }}>Set Controller</span>
            <div
                style={{
                    borderRadius: 10,
                    margin: '10px 0',
                    padding: '5px 25px',
                    background: '#253856',
                    display: 'flex',
                    overflow: 'auto',
                    flexDirection: 'column',
                    position: 'relative',
                    width: 200
                }}
            >

                <div onClick={() => setExpand(!expand)} style={{ cursor: 'pointer', margin: '5px 0' }}>
                    {expand ? 
                        <ExpandLessIcon style={{ position: 'absolute', top: 8, left: 3 }} />
                    :
                        <ExpandMoreIcon style={{ position: 'absolute', top: 8, left: 3 }} />
                    }
                            
                    <span style={{ fontSize: 14, padding: 5  }}>
                        {!!activeInput ?
                            activeInput.name : 'Select device'
                        }
                    </span>
                </div>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.6)', margin: '5px 0' }} />
                <Collapse in={expand}>
                    {
                        connectedDevices.length == 0 ?
                        <span style={{ fontSize: 14, padding: 5, color: 'rgb(196, 25, 25)'  }}>
                            {/* No inputs found, please connect your USB Midi device. */}
                            No connected inputs found, check your Midi device is in a connected state.
                        </span>

                    :
                        connectedDevices.map(input =>
                            <React.Fragment key={input.id}>
                        
                                <div 
                                    onClick={() => dispatch(SetActiveMidiInputAction(activeInput === input ? null : input))}
                                    style={{ 
                                        padding: 5,
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                >

                                    <div style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: 50,
                                            position: 'absolute',
                                            top: 12,
                                            left: -12,
                                            background: activeInput?.id == input.id ? '#45C419' : 'rgb(196, 25, 25)'
                                        }}
                                    />
                                    <span style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)' }}>
                                        {input.name}
                                    </span>
                                </div>
                            </React.Fragment>
                    )}
                </Collapse>
            </div>
        </div>
    );
};
