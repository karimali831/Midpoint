import React, { ReactElement } from 'react'
import './styles.css'

interface IOwnProps {
    text: string
    icon?: ReactElement
    width?: number
    height?: number
    outline?: boolean
    disabled?: boolean
    danger?: boolean
    warning?: boolean
    success?: boolean
    secondary?: boolean
    small?: boolean
    onClick?: () => void
}

export const MainButton: React.FC<IOwnProps> = (props) => {
    const {
        text,
        icon,
        width,
        outline,
        disabled,
        danger,
        success,
        secondary,
        small,
        warning,
        height,
        onClick
    } = props

    let bgColor

    if (success) {
        bgColor = '#45C419'
    } else if (danger) {
        bgColor = 'rgb(196, 25, 25)'
    } else if (warning) {
        bgColor = 'rgb(255, 167, 38)'
    } else if (outline) {
        ;('transparent')
    } else {
        bgColor = '#195DC4'
    }

    return (
        <div
            onClick={onClick}
            className={`align-6 button-1 ${
                outline ? (secondary ? 'b2' : 'b1') : 'b0'
            }`}
            style={{
                background: bgColor,
                opacity: disabled ? 0.25 : 1,
                width: width ?? undefined,
                cursor: onClick ? 'pointer' : 'default',
                height: secondary || small ? 15 : height ?? undefined
            }}
        >
            {icon && <span className="mr10 mt5">{icon}</span>}
            <span className={secondary || small ? 'fs12' : 'fs14'}>{text}</span>
        </div>
    )
}
