import React from 'react';
import { MainButton } from '../../Buttons/MainButton';

export const StreamHostInfo = () => {
    React.useEffect(() => {}, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <MainButton text="Log" width={50} />
                <MainButton
                    text="Users on MidPoint."
                    outline={true}
                    width={120}
                />
            </div>
            <hr
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    marginTop: 10,
                }}
            />
            <span style={{ fontSize: 14 }}>MidPoint Id: 138-488-955-566</span>
        </div>
    );
};
