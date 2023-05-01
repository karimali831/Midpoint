import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import StreamIcon from '@mui/icons-material/Stream';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import { motion } from 'framer-motion';;
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DashboardSection } from '../../enum/DashboardSection';
import { SetDashboardSection } from '../../state/contexts/app/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import { DashboardCard } from './DashboardCard';
import { GetUserAction } from '../../state/contexts/user/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';

export const DashboardOverview = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(getUserState)
    const { dashboardSection } = useSelector(getAppState)

    // useEffect(() => {
    //     if (dashboardSection === DashboardSection.Overview) {
    //         dispatch(GetUserAction)
    //     }
    // }, [dashboardSection])

    return (
        <>
            <span style={{ fontSize: 28 }}>
                Overview
            </span>
            <div
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >

                <DashboardCard
                    title='Wallet'
                    icon={<AccountBalanceWalletOutlined />}
                    outlined={false}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <span style={{ fontSize: 24, marginRight: 15 }}>
                            {user?.remainingTokens ?? 0}
                        </span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <span>Tokens</span>
                            <div onClick={() => dispatch(SetDashboardSection(DashboardSection.Tokens))} style={{
                                width: 100,
                                borderRadius: 25,
                                border: '1px solid #eee',
                                padding: 5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <span>Get tokens</span>
                            </div>
                        </div>
                    </div>
                </DashboardCard>
                <DashboardCard
                    title='Total streams'
                    icon={<StreamIcon />}
                    outlined={true}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 22 }}>2 streams</span>
                        <span style={{ fontSize: 12 }}>Average of 1 stream per week</span>
                    </div>
                </DashboardCard>
                <DashboardCard
                    title='Last stream'
                    icon={<StreamOutlinedIcon />}
                    outlined={true}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 22, marginRight: 15 }}>October 23rd</span>
                        <span style={{ fontSize: 12 }}>6 days ago</span>
                    </div>
                </DashboardCard>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                style={{
                    marginTop: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}>
                <span style={{ fontSize: 28 }}>Thank you for choosing MidPoint.</span>
                <span style={{ fontSize: 12, marginTop: 5, color: 'rgba(255, 255, 255, 0.6)' }}>
                    If you run into any problems or want to provide feedback, please join the <a href="/">Discord</a>.
                </span>
            </motion.div>
        </>
    )

}