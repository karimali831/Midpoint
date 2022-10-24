// import { MIDIVal } from "@midival/core";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMidiDevice } from '../../models/IMidiDevice'
import { ControllerReadyAction, MidiInputStateChangeAction, SetMidiOutputsAction } from '../../state/contexts/midi/Actions'
import { getMidiState } from '../../state/contexts/midi/Selectors'

interface IOwnProps {

}

const WebMIDI: React.FC<IOwnProps> = (props) => {
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

    // const onMIDISuccess = (midiAccess: any) => {
    //     for (var input of midiAccess.inputs.values())
    //         input.onmidimessage = getMIDIMessage;
    // }

    // const getMIDIMessage = (msg: any) => {
    //     console.log(msg.data);
    // }

    return (
        <div>
            <div id='device_info'>
                <div id='key_data'>
                    {midi &&
                        <span>
                            key data [channel: {channel}, cmd: {cmd}, type: {type}, note: {note}, velocity: {velocity}]
                        </span>
                    }
                </div>
                <div id='inputs'>
                    <h4>MIDI Inputs</h4>
                    <div className="info">
                        {
                            inputs.length === 0 ?
                                <>Please connect your MIDI Controller (USB / Midi Cable)</>
                                :
                                inputs.map((input, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <p>{input.name}</p>
                                            <p className='small'>
                                                connection: {input.connection}
                                            </p>
                                            <p className='small'>
                                                state: {input.state}
                                            </p>
                                            <p className='small'>
                                                manufacturer: {input.manufacturer}
                                            </p>
                                            {input.version &&
                                                <p className='small'>
                                                    version: {input.version}
                                                </p>
                                            }
                                        </React.Fragment>
                                    )
                                }

                                )
                        }
                    </div>
                </div>
                <div id='outputs'>
                    <h4>MIDI Outputs:</h4>
                    <div className="info">
                        {
                            outputs.length === 0 ?
                                <>Please connect your MIDI Controller (USB / Midi Cable)</>
                                :
                                outputs.map((input, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <p>{input.name}</p>
                                            <p className='small'>
                                                manufacturer: {input.manufacturer}
                                            </p>
                                            {input.version &&
                                                <p className='small'>
                                                    version: {input.version}
                                                </p>
                                            }
                                        </React.Fragment>
                                    )
                                }

                                )
                        }
                    </div>
                </div>
                <div id='displayNotes'>

                </div>
            </div>
        </div>
    )
}

export default WebMIDI