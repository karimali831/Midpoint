import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SetActiveMidiInputAction } from '../../../state/contexts/midi/Actions';
import { getMidiState } from '../../../state/contexts/midi/Selectors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  './styles.css'
import { IMidiDevice } from '../../../models/IMidiDevice';
import { UpdateUserInfoAction } from '../../../state/contexts/user/Actions';
import { getUserState } from '../../../state/contexts/user/Selectors';
import {Howl, Howler} from 'howler'
import sounds from '../../../assets/sounds';

export const StreamSetup = () => {
    const { 
        activeInput, 
        inputs, 
        controllerReady 
    } = useSelector(getMidiState);

    const connectedDevices = inputs.filter(x => x.connection === "open" && x.state === "connected")
    const [expand, setExpand] = useState<boolean>(true)

    const dispatch = useDispatch()
    const { user } = useSelector(getUserState)
  
    React.useEffect(() => {
        if (connectedDevices.length > 0) {
            const input = connectedDevices.find(x => x.name === user?.defaultMidiDevice)

            if (user?.defaultMidiDevice !== null) {
                dispatch(SetActiveMidiInputAction(input ?? null)) 
                setExpand(false)
            }
            else{
                if (!!activeInput) {
                    dispatch(SetActiveMidiInputAction(null))
                }
            }
        }
        else{
            if (!expand) {
                setExpand(true)
            }
        }

    }, [JSON.stringify(connectedDevices)]);

    const setDefaultDevice = (input: IMidiDevice) => {
        if (activeInput?.name === input.name) {
            dispatch(SetActiveMidiInputAction(null))
        }
        else{
            dispatch(SetActiveMidiInputAction(input)) 
            setExpand(false)

            SoundPlay(sounds.confirmSound)
        }

        dispatch(UpdateUserInfoAction({ 
            updatedKey: "defaultMidiDevice", 
            updatedValue: activeInput === input ? null : input.name 
        }))
    }

    const SoundPlay = (src: any) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    Howler.volume(1.0)

    return (
        <div style={{ }}>
            <span style={{ fontSize: 14 }}>Set Controller</span>
            <div className='controller-set-container' style={{ background: expand ? '#253856' : 'transparent' }}>

                <div onClick={() => setExpand(!expand)} className='controller-set-expand'>
                    {expand ? 
                        <ExpandLessIcon className='controller-set-expandicon' />
                    :
                        <ExpandMoreIcon className='controller-set-expandicon' />
                    }
                            
                    <span className='controller-set-select-txt'>
                        {!!activeInput ?
                            activeInput.name : 'Select device'
                        }
                    </span>
                </div>
                <Collapse in={expand}>
                    <hr className='controllet-set-divider' />
                    {
                        connectedDevices.length == 0 ?
                        <span className='controllet-set-status'>
                            No connected inputs found, check your Midi device is in a connected state.
                        </span>

                    :
                        connectedDevices.map(input => {
                            return ( 
                                <React.Fragment key={input.id}>
                            
                                    <div 
                                        onClick={() => setDefaultDevice(input)}
                                        className='controllet-set-select'
                                    >

                                        <div 
                                            className='controllet-set-input'
                                            style={{
                                                background: activeInput?.id == input.id ? '#45C419' : 'rgb(196, 25, 25)'
                                            }}
                                        />
                                        <span className='controllet-set-input-text'>
                                            {input.name}
                                        </span>
                                    </div>
                                </React.Fragment>
                            )
                    })}
                </Collapse>
            </div>
        </div>
    );
};
