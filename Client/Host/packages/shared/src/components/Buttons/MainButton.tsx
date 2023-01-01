import React, { ReactElement } from 'react';

interface IOwnProps {
    text: string;
    icon?: ReactElement;
    width?: number;
    outline?: boolean;
    disabled?: boolean
    danger?: boolean
    onClick?: () => void;
}

export const MainButton: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => {}, []);

    return (
        <div
            onClick={props.onClick}
            style={{
                borderRadius: 25,
                width: props.width ?? '100%',
                background: props.danger ? 'rgb(196, 25, 25)' : props.outline ? 'transparent' : '#195DC4',
                opacity: props.disabled ? 0.25 : 1,
                padding: '5px 10px',
                alignItems: 'center',
                height: 25,
                display: 'flex',
                justifyContent: 'center',
                border: props.outline ? '1px solid #eee' : 'none',
                cursor: props.onClick ? 'pointer' : 'default',
            }}
        >
            {props.icon && (
                <span style={{ marginRight: 10 }}>{props.icon}</span>
            )}
            <span style={{ fontSize: 14 }}>{props.text}</span>
        </div>
    );
};
