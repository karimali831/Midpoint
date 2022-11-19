import React from "react"

interface IOwnProps {
    title: string
    desc: string
    icon: React.ReactNode
}

export const LoginHighlight = (props: IOwnProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span style={{ fontSize: 32, marginRight: 20 }}>{props.icon}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                    marginBottom: 5,
                    fontWeight: 500,
                    fontSize: 17
                }}
                >
                    {props.title}
                </span>

                <span style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 14
                }}>
                    {props.desc}
                </span>
            </div>
        </div>
    )
}