import React, { ReactElement } from "react";
import { DashboardSection } from ".";

interface IOwnProps {
    activeSection: DashboardSection
    section: DashboardSection
    icon: ReactElement
    onClick: (section: DashboardSection) => void
}

export const DashboardLink: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => { }, [])

    return (
        <div
            onClick={() => props.onClick(props.section)}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                cursor: 'pointer',
                marginTop: 10
            }}
        >
            {
                props.section === props.activeSection &&
                <div style={{
                        width: 6,
                        height: 6,
                        margin: '0 5px',
                        borderRadius: 50,
                        background: '#195DC4'
                    }}
                />
            }
            {props.icon}
            <span style={{
                marginLeft: 10,
                fontSize: 20,
                fontWeight: props.section === props.activeSection ? 500 : 400
            }}>
                {DashboardSection[props.section]}
            </span>
        </div>
    )
}