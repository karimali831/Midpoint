import DataArrayIcon from '@mui/icons-material/DataArray';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { default as Usb, default as UsbOff } from '@mui/icons-material/Usb';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetActiveMidiInputAction } from '../../state/contexts/midi/Actions';
import { getMidiState } from '../../state/contexts/midi/Selectors';
import { CamToggleAction } from '../../state/contexts/user/Actions';

export default function SwitchListSecondary() {
    const [checked, setChecked] = React.useState(['']);

    const dispatch = useDispatch()
    const {
        activeInput,
        inputs,
        controllerReady
    } = useSelector(getMidiState)

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        if (value === "cam") {
            dispatch(CamToggleAction())
        }
    };

    const onSelectedInputChange = (e: SelectChangeEvent) => {

        const activeDevice = inputs.find(x => x.id === e.target.value)

        if (!activeDevice) {
            alert("An error occured")
            return;
        }

        dispatch(SetActiveMidiInputAction(activeDevice))
    }

    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <DataArrayIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-midi" primary="Send Midi Data" />
                <Switch
                    edge="end"
                    disabled={!activeInput}
                    onChange={handleToggle('midi')}
                    checked={checked.indexOf('midi') !== -1}
                    inputProps={{
                        'aria-labelledby': 'switch-list-label-midi',
                    }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <VideoCameraFrontIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-midi" primary="Video On" />
                <Switch
                    edge="end"
                    onChange={handleToggle('cam')}
                    checked={checked.indexOf('cam') !== -1}
                    inputProps={{
                        'aria-labelledby': 'switch-list-label-cam',
                    }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    {controllerReady ? <Usb /> : <UsbOff />}
                </ListItemIcon>
                <ListItemText id="switch-list-label-controller-ready" primary="Controller Ready" />
                <FiberManualRecordIcon style={{ color: controllerReady ? "rgb(22, 163, 74)" : "rgb(220, 38, 38)" }} />
            </ListItem>
            <ListItem>
                <FormControl fullWidth>
                    <InputLabel id="controllers" size='small'>
                        Set Controller
                    </InputLabel>
                    <Select
                        id="controllers"
                        size='small'
                        value={activeInput?.id ?? ""}
                        label="Connected Devices"
                        onChange={onSelectedInputChange}
                    >
                        {inputs.filter(x => x.connection === "open" && x.state === "connected").map(input =>
                            <MenuItem key={input.id} value={input.id}>{input.name}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </ListItem>
        </List>
    );
}
