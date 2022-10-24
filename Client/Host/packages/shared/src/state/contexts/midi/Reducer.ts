import { createReducer } from '@reduxjs/toolkit';
import { IMidiDevice } from '../../../models/IMidiDevice';
import {
    ControllerReadyAction,
    MidiInputStateChangeAction,
    SetActiveMidiInputAction, SetMidiOutputsAction
} from './Actions';
import { midiInitialState } from './IMidiState';

export const midiReducer = createReducer(midiInitialState, (builder) => {
    builder
        .addCase(SetActiveMidiInputAction, (state, action) => {
            state.activeInput = action.payload
        })
        .addCase(MidiInputStateChangeAction, (state, action) => {
            const getInput = state.inputs.find(x => x.id === action.payload.id)

            const current = [...state.inputs]
            let newState: IMidiDevice[] = []

            if (!getInput) {
                newState = [...state.inputs, action.payload]
            }
            else {

                newState = current.map(input => {
                    if (input.id === action.payload.id) {
                        return {
                            ...input,
                            ...action.payload
                        }
                    }
                    return { ...input }
                })
            }

            state.inputs = newState

        })
        .addCase(SetMidiOutputsAction, (state, action) => {
            state.outputs = action.payload
        })
        .addCase(ControllerReadyAction, (state, action) => {
            state.controllerReady = action.payload
        })
});
