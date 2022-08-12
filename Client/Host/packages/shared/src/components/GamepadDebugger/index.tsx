import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import Ps4GamepadMap from '../../controllers/mappings/Ps4GamepadMap';
import { IGamepad } from "../../models/IGamepad";
import * as GamepadApi from './initialise';

export function GamepadDebugger() {

    const [mapping, setMapping] = useState<{
        buttons: any,
        axes: any
    }>({
        buttons: Ps4GamepadMap.buttons,
        axes: Ps4GamepadMap.axes
    })

    const [gamepads, setGamepads] = useState<any>([])
    const [actions, setActions] = useState<any>([])
    const [axes, setAxes] = useState<
        {
            label: any;
            value: number;
        }[]
    >()
    const [actionsLimit, setActionsLimit] = useState<number>(10)
    const [pollingInterval, setPollingInterval] = useState<number>(100)
    const pollingIntervalId = useRef<any>(null)

    React.useEffect(() => {
        // initialize Mapping
        setMapping({
            buttons: Ps4GamepadMap.buttons,
            axes: Ps4GamepadMap.axes
        })

        // initialize Listeners
        GamepadApi.addEventListeners({
            onConnected: () => syncConnectedGamepads(),
            onDisconnected: () => syncConnectedGamepads(),
        });

        // startControlsPolling
        const start = async () => {
            await startControlsPolling()
        }

        start()
    }, [])

    console.log("actions" + JSON.stringify(actions, null, 2))

    const syncConnectedGamepads = () => {
        let gamepads = GamepadApi.getGamepads();
        gamepads = Object.entries(gamepads)
            .reduce((acc: any[], [id, gamepad]) => {
                if (gamepad) {
                    acc.push({ id: id, name: gamepad.id });
                }
                return acc;
            }, [])
    }

    const startControlsPolling = async () => {
        if (pollingIntervalId) {
            clearInterval(pollingIntervalId.current);
        }

        pollingIntervalId.current = setInterval(() => {
            const gamepads = GamepadApi.getGamepads();

            for (const [gamepadId, gamepad] of Object.entries(gamepads)) {
                if (!gamepad) {
                    continue;
                }
                const newButtonActions = gamepad
                    .buttons
                    .reduce((acc: IGamepad[], button: any, index: number) => {
                        if (button.pressed) {
                            acc.push({
                                gamepadId: gamepadId,
                                buttonId: index,
                                type: 'button',
                                text: Ps4GamepadMap.buttons[index],
                                action: 'press'
                            });
                            return acc;
                        }
                        return acc;
                    }, []);

                actions.splice(0, 0, ...newButtonActions);

                if (actions.length > actionsLimit) {
                    actions.splice(actionsLimit)
                }

                setActions(actions)

                const axes = gamepad
                    .axes
                    .map((axe, index) => {
                        return {
                            label: mapping.axes[index],
                            value: axe
                        }
                    });


                setAxes(axes)
            }

        }, pollingInterval);

    }

    return (
        <View style={{ width: 440, margin: 20, padding: 20 }}>
            <Text>Gamepad Events</Text>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Gamepad</Text>
                <Text>Button</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>

                    {actions.lengh > 0 ? actions.map((x: any, idx: number) => {
                        return (
                            <View key={idx} style={{ flexDirection: 'column' }}>
                                <Text>{x.gamepadId}</Text>
                                <Text>{x.text}</Text>
                            </View>
                        )
                    }) : <Text>No events, press a button.</Text>}

                </View>
                <View style={{ flex: 1 }}>
                    {axes && axes.map((x, idx) => {
                        return (
                            <View key={idx} style={{ flexDirection: 'column' }}>
                                <Text>{x.label}</Text>
                                <Text>{x.value}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>

        </View>

    )
}