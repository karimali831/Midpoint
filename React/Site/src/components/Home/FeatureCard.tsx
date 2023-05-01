import React from 'react';


interface IOwnProps {
    icon: React.ReactElement
    text: string
    desc: string
}

export const FeatureCard: React.FC<IOwnProps> = (props) => {
    return (
        <div style={{ alignItems: 'center', flexDirection: 'column', width: 220 }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#195DC4',
                width: 230,
                borderRadius: 5,
                height: 45,
                marginBottom: 10,
                boxShadow: 'rgb(0 0 0) 0px 5px 15px'
            }}>
                <div style={{ marginLeft: 10 }}>{props.icon}</div>
                <div style={{ fontWeight: "600", fontSize: 15, marginLeft: 10, color: '#fff' }}>
                    {props.text}
                </div>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 10, marginBottom: 25, fontSize: 12 }}>
                {props.desc}
            </span>
        </div>
    )
}