import React from "react"
import LoadingBar from 'react-redux-loading-bar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SetDashboardSection } from "../../../state/contexts/app/Actions";
import { DashboardSection } from "../../../enum/DashboardSection";
import { useDispatch } from "react-redux";


export const Starting = () => {

    React.useEffect(() => {}, [])
    const dispatch = useDispatch()

    return (
        <div
            style={{
                margin: '0 auto',
                width: 400,
                marginTop: 140,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative'
                }}
            >
                <span style={{ fontSize: 40 }}>MidPoint.</span>
                <span
                    style={{
                        marginTop: 5,
                        color: 'rgba(255, 255, 255, 0.6)',
                    }}
                >
                    Please be patient
                </span>
                <div style={{ display: 'flex', alignItems: 'center', width: 400, margin: 20 }}>
                    <LoadingBar
                        updateTime={100}
                        maxProgress={100} 
                        // progressIncrease={100 / Object.keys(LoadStartup).length}

                        progressIncrease={100 / 2}
                        style={{
                            height: 2,
                            backgroundColor: "#19C45D"
                        }}
                    />
        
                </div>
                <div
                    onClick={() => dispatch(SetDashboardSection(DashboardSection.Overview))}
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <ArrowBackIcon />
                    <span style={{ marginLeft: 10 }}>Cancel</span>
                </div>
            </div>
        </div>
    )

}