import LoadingBar from 'react-redux-loading-bar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SetDashboardSection } from "../../../state/contexts/app/Actions";
import { DashboardSection } from "../../../enum/DashboardSection";
import { useDispatch } from "react-redux";
import { TerminateAction } from "../../../state/contexts/instance/Actions";

export const Starting = () => {
    const dispatch = useDispatch()

    const cancel = () => {
        dispatch(TerminateAction())
        dispatch(SetDashboardSection(DashboardSection.Overview))
    }

    return (
        <div className='starting-container'>
            <div className='align-3 starting' >
                <span className='fs40'>MidPoint.</span>
                <span className='mt5 secondary'>
                    Please be patient
                </span>
                <div className='align-9 starting-loading'>
                    <LoadingBar
                        updateTime={100}
                        maxProgress={100} 
                        progressIncrease={1}
                        style={{ height: 2, background: '#19C45D' }}
                    />
        
                </div>
                <div className='align-12 link'onClick={cancel}>
                    <ArrowBackIcon />
                    <span className='ml10'>Cancel</span>
                </div>
            </div>
        </div>
    )

}