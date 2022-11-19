import React, { ReactElement } from "react"

interface IOwnProps {
    text: string
    icon?: ReactElement
    width?: number
    outline?: boolean
    onClick?: () => void
}

export const MainButton: React.FC<IOwnProps> = (props) => {

    React.useEffect(() => { }, [])

    return (
        <div
            onClick={props.onClick}
            style={{
                borderRadius: 25,
                width: props.width ?? '100%',
                background: props.outline ? 'transparent' : '#195DC4',
                padding: '5px 5px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                border: props.outline ? '1px solid #eee' : 'none',
                cursor: props.onClick ? 'pointer' : 'default'
            }}
        >
            {props.icon && <span style={{ marginRight: 10 }}>{props.icon}</span>}
            <span>{props.text}</span>
        </div>
    )
}