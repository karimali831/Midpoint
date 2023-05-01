import { createAction } from '@reduxjs/toolkit';
import { IMidiDevice } from '../../../models/IMidiDevice';


// ACTION CREATORS
const SetActiveMidiInputAction = createAction<IMidiDevice | null>('@@Midi/SetActiveMidiInput');
const MidiInputStateChangeAction = createAction<IMidiDevice>('@@Midi/MidiInputStateChange');
const SetMidiOutputsAction = createAction<IMidiDevice[]>('@@Midi/SetMidiOutputs');
const ControllerReadyAction = createAction<boolean>('@@Midi/ControllerReady');

export {
    SetActiveMidiInputAction,
    MidiInputStateChangeAction,
    SetMidiOutputsAction,
    ControllerReadyAction
};

