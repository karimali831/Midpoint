
export interface IGamepad {
    gamepadId: string,
    buttonId: number,
    type: 'button',
    text: IButton,
    action: 'press'
}

export interface IButton {
    id: number
    text: string
}
