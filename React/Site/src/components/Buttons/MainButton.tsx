import React, { ReactElement } from 'react';

interface IOwnProps {
    text: string;
    icon?: ReactElement;
    width?: number;
    outline?: boolean;
    disabled?: boolean
    danger?: boolean
    success?: boolean
    onClick?: () => void;
}

export const MainButton: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => {}, []);

    const {
        text,
        icon,
        width,
        outline,
        disabled,
        danger,
        success,
        onClick
    } = props

    let bgColor;

    
    if (success) {
        bgColor = '#45C419'
    }
    else if (danger) {
        bgColor = 'rgb(196, 25, 25)'
    }
    else if (outline) {
        'transparent'
    }
    else{
        bgColor = '#195DC4'
    }


    return (
        <div
            onClick={onClick}
            style={{
                borderRadius: 25,
                width: props.width ?? '100%',
                background: bgColor,
                opacity: disabled ? 0.25 : 1,
                padding: '5px 10px',
                alignItems: 'center',
                height: 25,
                display: 'flex',
                justifyContent: 'center',
                border: outline ? '1px solid #eee' : 'none',
                cursor: onClick ? 'pointer' : 'default',
            }}
        >
            {icon && (
                <span style={{ marginRight: 10, marginTop: 5 }}>{icon}</span>
            )}
            <span style={{ fontSize: 14 }}>{text}</span>
        </div>
    );
};
