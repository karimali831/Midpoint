import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SetActiveMidiInputAction } from '../../../state/contexts/midi/Actions'
import { getMidiState } from '../../../state/contexts/midi/Selectors'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './styles.css'
import { IMidiDevice } from '../../../models/IMidiDevice'
import {
    CamToggleAction,
    UpdateUserInfoAction
} from '../../../state/contexts/user/Actions'
import Switch from '@mui/material/Switch'
import { getUserState } from '../../../state/contexts/user/Selectors'
// import {Howl, Howler} from 'howler'

interface IOwnProps {
    camOn: boolean
}

export const StreamSetup = (props: IOwnProps) => {
    const { activeInput, inputs } = useSelector(getMidiState)

    const connectedDevices = inputs.filter(
        (x) => x.connection === 'open' && x.state === 'connected'
    )
    const [expand, setExpand] = useState<boolean>(false)
    const [checked, setChecked] = React.useState([''])

    const dispatch = useDispatch()
    const { user } = useSelector(getUserState)

    React.useEffect(() => {
        if (connectedDevices.length > 0) {
            const input = connectedDevices.find(
                (x) => x.name === user?.defaultMidiDevice
            )

            if (user?.defaultMidiDevice !== null) {
                dispatch(SetActiveMidiInputAction(input ?? null))
                setExpand(false)
            } else {
                if (!!activeInput) {
                    dispatch(SetActiveMidiInputAction(null))
                }
            }
        }
        // else{
        //     if (!expand) {
        //         setExpand(true)
        //     }
        // }
    }, [JSON.stringify(connectedDevices)])

    const setDefaultDevice = (input: IMidiDevice) => {
        if (activeInput?.name === input.name) {
            dispatch(SetActiveMidiInputAction(null))
        } else {
            dispatch(SetActiveMidiInputAction(input))
            setExpand(false)

            // SoundPlay(sounds.confirmSound)
        }

        dispatch(
            UpdateUserInfoAction({
                updatedKey: 'defaultMidiDevice',
                updatedValue: activeInput === input ? null : input.name
            })
        )
    }

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)

        if (value === 'cam') {
            dispatch(CamToggleAction())
        }
    }

    // const SoundPlay = (src: any) => {
    // const sound = new Howl({
    //     src
    // })
    // sound.play()
    // }

    // Howler.volume(1.0)

    return (
        <div className={`align-${props.camOn ? 8 : 5}`}>
            {!props.camOn && (
                <div className="">
                    <span>Set controller</span>
                    <div
                        className="align-10 controller-set-container"
                        style={{
                            background: expand ? '#253856' : 'transparent',
                            padding: expand ? '5px 10px' : 0
                        }}
                    >
                        <div
                            onClick={() => setExpand(!expand)}
                            className="set-controller align-1"
                        >
                            {expand ? (
                                <ExpandLessIcon className="secondary mr5" />
                            ) : (
                                <ExpandMoreIcon className="secondary mr5" />
                            )}
                            <span className="fs14 secondary link">
                                {!!activeInput
                                    ? activeInput.name
                                    : 'Select device'}
                            </span>
                        </div>
                        <Collapse in={expand}>
                            <hr className="b3 controllet-set-divider" />
                            {connectedDevices.length == 0 ? (
                                <span className="controllet-set-status">
                                    No connected inputs found, check your Midi
                                    device is in a connected state.
                                </span>
                            ) : (
                                connectedDevices.map((input) => {
                                    return (
                                        <React.Fragment key={input.id}>
                                            <div
                                                onClick={() =>
                                                    setDefaultDevice(input)
                                                }
                                                className="controllet-set-select"
                                            >
                                                <div
                                                    className="controllet-set-input"
                                                    style={{
                                                        background:
                                                            activeInput?.id ==
                                                            input.id
                                                                ? '#45C419'
                                                                : 'rgb(196, 25, 25)'
                                                    }}
                                                />
                                                <span className="controllet-set-input-text">
                                                    {input.name}
                                                </span>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            )}
                        </Collapse>
                    </div>
                </div>
            )}
            <div className="vid-container">
                <div className="align-1">
                    <span>Video</span>
                    <Switch
                        edge="end"
                        onChange={handleToggle('cam')}
                        checked={checked.indexOf('cam') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-cam'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
