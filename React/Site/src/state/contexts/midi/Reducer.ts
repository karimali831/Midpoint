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
                            connection: action.payload.connection,
                            id: action.payload.id,
                            manufacturer: action.payload.manufacturer,
                            name: action.payload.name,
                            type: action.payload.type,
                            state: action.payload.state,
                            version: action.payload.version
                        }
                    }
                    return { ...input }
                })
            }

            if (!!state.activeInput && state.activeInput.id === action.payload.id && action.payload.state !== "connected") {
                state.activeInput = null
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
