import { IMidiDevice } from "../../../models/IMidiDevice";


export interface IMidiState {
    activeInput: IMidiDevice | null
    inputs: IMidiDevice[]
    outputs: IMidiDevice[]
    controllerReady: boolean
}

export const midiInitialState: IMidiState = {
    activeInput: null,
    inputs: [],
    outputs: [],
    controllerReady: false
}