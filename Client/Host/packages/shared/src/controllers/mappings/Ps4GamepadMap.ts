import { IButton } from "../../models/IGamepad"

export function Ps4GamepadMap() {

    let buttons: IButton[] = [
        { id: 0, text: "Cross" },
        { id: 1, text: "Circle" },
        { id: 2, text: "Square" },
        { id: 3, text: "Triangle" },
        { id: 4, text: "Cross" },
        { id: 5, text: "Cross" },
        { id: 6, text: "Cross" },
        { id: 7, text: "Cross" },
        { id: 8, text: "Cross" },
        { id: 9, text: "Cross" },
        { id: 10, text: "Cross" },
        { id: 11, text: "Cross" },
        { id: 12, text: "Cross" },
        { id: 13, text: "Cross" },
        { id: 14, text: "Cross" },
        { id: 15, text: "Cross" },
        { id: 16, text: "Cross" },
        { id: 17, text: "Cross" },
    ]

    let axes: IButton[] = [
        { id: 0, text: "Left Joystick x-axe (1 right, -1 left)" },
        { id: 1, text: "Left Joystick y-axe (1 bottom, -1 top)" },
        { id: 2, text: "Right Joystick x-axe (1 right, -1 left)" },
        { id: 3, text: "Right Joystick y-axe (1 bottom, -1 top)" }
    ]

    return { buttons, axes }

}

export default Ps4GamepadMap()