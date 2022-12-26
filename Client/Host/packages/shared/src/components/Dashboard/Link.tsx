import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DashboardSection } from "../../enum/DashboardSection";
import { SetDashboardSection } from "../../state/contexts/app/Actions";
import { getAppState } from "../../state/contexts/app/Selectors";

interface IOwnProps {
    section: DashboardSection
    icon: ReactElement
}

export const DashboardLink: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => { }, [])

    const dispatch = useDispatch()
    const { dashboardSection } = useSelector(getAppState)

    return (
        <div
            onClick={() => dispatch(SetDashboardSection(props.section))}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                cursor: 'pointer',
                marginTop: 10
            }}
        >
            {
                props.section === dashboardSection &&
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
                fontWeight: props.section === dashboardSection ? 500 : 400
            }}>
                {DashboardSection[props.section]}
            </span>
        </div>
    )
}