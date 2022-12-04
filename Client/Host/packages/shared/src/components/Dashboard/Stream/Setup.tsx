import React from 'react';
import { useSelector } from 'react-redux';
import { getMidiState } from '../../../state/contexts/midi/Selectors';

export const StreamSetup = () => {
    React.useEffect(() => {}, []);

    const { activeInput, inputs, controllerReady } = useSelector(getMidiState);

    return (
        <div>
            <span>Set Controller</span>
            <div
                style={{
                    borderRadius: 10,
                    padding: 10,
                    background: '#253856',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <span>Pioneer DDJ-400</span>
                <span>Pioneer DDJ-400</span>
                <span>Pioneer DDJ-400</span>
                <span>Pioneer DDJ-400</span>

                {inputs
                    .filter(
                        (x) =>
                            x.connection === 'open' && x.state === 'connected'
                    )
                    .map((input) => (
                        <span>{input.name}</span>
                    ))}
            </div>
        </div>
    );
};
