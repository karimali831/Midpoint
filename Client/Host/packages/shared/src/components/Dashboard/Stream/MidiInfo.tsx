import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMidiDevice } from '../../../models/IMidiDevice';
import { ControllerReadyAction, SetMidiOutputsAction, MidiInputStateChangeAction } from '../../../state/contexts/midi/Actions';
import { getMidiState } from '../../../state/contexts/midi/Selectors';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const StreamMidiInfo = () => {
    React.useEffect(() => {}, []);

    const [inputExpanded, setInputExpanded] = useState<number[]>([])
    const [outputExpanded, setOutputExpanded] = useState<number[]>([])
    const [midi, setMidi] = useState<any>(null)
    const [data, setData] = useState<any>(null)
    const [channel, setChannel] = useState<number>(0)
    const [velocity, setVelocity] = useState<number>(0)
    const [note, setNote] = useState<number>(0)
    const [cmd, setCmd] = useState<number>(0)
    const [type, setType] = useState<number>(0)

    const dispatch = useDispatch()
    const {
        inputs,
        outputs,
        activeInput
    } = useSelector(getMidiState)

    useEffect(() => {
        // MidiScript2()
        // navigator.requestMIDIAccess().then(onMIDISuccess);

        navigator.requestMIDIAccess({
            sysex: false
        }).then(onMIDISuccess);

    }, [])

    useEffect(() => {
        if (inputs.some(x => x.connection === "open" && x.state === "connected")) {
            dispatch(ControllerReadyAction(true))
        }
        else {
            dispatch(ControllerReadyAction(false))
        }
    }, [inputs])

    const onMIDISuccess = (midiAccess: any) => {
        console.log("Midi connect success")
        setMidi(midiAccess)

        const inputs = midiAccess.inputs.values()
        const outputs = midiAccess.outputs.values()
        // loop through all inputs
        for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
            // listen for midi messages
            input.value.onmidimessage = onMIDIMessage
        }

        let outputDevices: IMidiDevice[] = []

        // loop through all outputs
        for (let output = outputs.next(); output && !output.done; output = outputs.next()) {
            outputDevices.push(output.value)
        }
        dispatch(SetMidiOutputsAction(outputDevices))

        // listen for connect/disconnect message
        midiAccess.onstatechange = onStateChange
    }

    const onStateChange = (event: any) => {
        const port = event.port

        if (port.type === 'input') {

    
            dispatch(MidiInputStateChangeAction(port))
        }
    }

    const onMIDIMessage = (event: any) => {
        const data = event.data
        const cmd = data[0] >> 4
        const channel = data[0] & 0xf
        const type = event.data[0] & 0xf0
        const note = event.data[1]
        const velocity = event.data[2]

        setCmd(cmd)
        setVelocity(velocity)
        setChannel(channel)
        setNote(note)
        setType(type)
        setData(event.data)
    }

    const expandInputInfo = (idx: number) => {
        const exist = inputExpanded.some(x => x=== idx)

        if (exist) {
            setInputExpanded(inputExpanded.filter(x => x !== idx))
        }
        else{
            setInputExpanded(state => [...state, idx])
        }

    }

    const expandOutputInfo = (idx: number) => {
        const exist = outputExpanded.some(x => x=== idx)

        if (exist) {
            setOutputExpanded(outputExpanded.filter(x => x !== idx))
        }
        else{
            setOutputExpanded(state => [...state, idx])
        }

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', overflow: 'auto' }}>
            <div style={{ width: '50%' }}>
                <span>Midi Inputs</span>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.6)', margin: '10px 20px 20px 0' }} />
                {
                            inputs.length === 0 ?
                                <>Please connect your MIDI Controller (USB / Midi Cable)</>
                            :
                                inputs.map((input, idx) => {
                                    const devExpanded = inputExpanded.some(x => x === idx)

                                    return (
                                        <React.Fragment key={idx}>
                                            <span>{input.name} </span>
                                            <div 
                                                onClick={() => expandInputInfo(idx)}
                                                style={{  
                                                    display: 'flex', 
                                                    flexDirection: 'row', 
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    margin: '5px 0'
                                                }}
                                            >
                                                <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginRight: 5 }}>Details</span>
                                                {devExpanded ? <ExpandLessIcon  /> : <ExpandMoreIcon  />}
                                            </div>
                                    
                                            <Collapse in={devExpanded} style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                                
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', width: 180  }}>
                                                        <span style={{ padding: 5 }}>Connection:</span>
                                                        <span style={{ padding: 5 }}>State:</span>
                                                        <span style={{ padding: 5 }}>Manufacturer:</span> 
                                                        {input.version && <span style={{ padding: 5 }}>Version:</span>}
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ padding: 5 }}>{input.connection}</span>
                                                        <span style={{ padding: 5, color: input.state == "connected" ? '#45C419' : 'rgb(196, 25, 25)' }}>
                                                            {input.state}
                                                        </span>
                                                        <span style={{ padding: 5 }}>{input.manufacturer}</span>
                                                        {input.version && <span style={{ padding: 5 }}>{input.version}</span>}
                                                    </div>
                                                </div>

                                
                                            </Collapse>
                                        </React.Fragment>
                                    )
                                }

                                )
                        }
            </div>
            <div style={{ width: '50%' }}>
                <span>Midi Outputs</span>
                <hr style={{ border: '1px solid rgba(255, 255, 255, 0.6)',  margin: '10px 0 20px 0'  }} />
                {
                            outputs.length === 0 ?
                                <>Please connect your MIDI Controller (USB / Midi Cable)</>
                                :
                                outputs.map((input, idx) => {
                                    const devExpanded = outputExpanded.some(x => x === idx)

                                    return (
                                        <React.Fragment key={idx}>
                                            <span>{input.name} </span>
                                            <div 
                                                onClick={() => expandOutputInfo(idx)}
                                                style={{  
                                                    display: 'flex', 
                                                    flexDirection: 'row', 
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    margin: '5px 0'
                                                }}
                                            >
                                                <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginRight: 5 }}>Details</span>
                                                {devExpanded ? <ExpandLessIcon  /> : <ExpandMoreIcon  />}
                                            </div>
                                    
                                            <Collapse in={devExpanded} style={{ color: 'rgba(255, 255, 255, 0.6)'}}>
                                                
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', width: 180  }}>
                                                        <span style={{ padding: 5 }}>Manufacturer:</span> 
                                                        {input.version && <span style={{ padding: 5 }}>Version:</span>}
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ padding: 5 }}>{input.manufacturer}</span>
                                                        {input.version && <span style={{ padding: 5 }}>{input.version}</span>}
                                                    </div>
                                                </div>

                                
                                            </Collapse>
                                        </React.Fragment>
                                    )
                                }

                                )
                        }
            </div>
        </div>
    );
};
