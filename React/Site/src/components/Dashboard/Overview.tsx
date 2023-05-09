import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined'
import StreamIcon from '@mui/icons-material/Stream'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { DashboardSection } from '../../enum/DashboardSection'
import { SetDashboardSection } from '../../state/contexts/app/Actions'
import { getUserState } from '../../state/contexts/user/Selectors'
import { DashboardCard } from './DashboardCard'
import { dateDiff } from '../../utils/Utils'

export const DashboardOverview = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(getUserState)
    // const { dashboardSection } = useSelector(getAppState)

    // useEffect(() => {
    //     if (dashboardSection === DashboardSection.Overview) {
    //         dispatch(GetUserAction)
    //     }
    // }, [dashboardSection])

    if (!user) return null

    return (
        <>
            <span style={{ fontSize: 28 }}>Overview</span>
            <div className="align-2 mt20">
                <DashboardCard
                    title="Wallet"
                    icon={<AccountBalanceWalletOutlined />}
                    outlined={false}
                >
                    <div className="align-2" style={{ width: '100%' }}>
                        <span className="fs24 mr15">
                            {user?.remainingTokens ?? 0}
                        </span>
                        <div
                            className="align-1"
                            style={{
                                width: '100%'
                            }}
                        >
                            <span>Tokens</span>
                            <div
                                onClick={() =>
                                    dispatch(
                                        SetDashboardSection(
                                            DashboardSection.Tokens
                                        )
                                    )
                                }
                                style={{
                                    width: 100,
                                    borderRadius: 25,
                                    border: '1px solid #eee',
                                    padding: 5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <span>Get tokens</span>
                            </div>
                        </div>
                    </div>
                </DashboardCard>
                <DashboardCard
                    title="Total streams"
                    icon={<StreamIcon />}
                    outlined={true}
                >
                    <div className="align-2">
                        <span className="fs22">
                            {user.totalStreams} stream
                            {user.totalStreams === 1 ? '' : 's'}
                        </span>
                        {user.totalStreams > 0 && (
                            <span className="fs12">
                                Average of 1 stream
                                {user.totalStreams === 1 ? '' : 's'} per week
                            </span>
                        )}
                    </div>
                </DashboardCard>
                <DashboardCard
                    title="Last stream"
                    icon={<StreamOutlinedIcon />}
                    outlined={true}
                >
                    <div className="align-2">
                        <span className="fs22 mr15">
                            {user.lastStream ?? 'No streams'}
                        </span>
                        {user.lastStream && (
                            <span className="fs12">
                                {dateDiff(user.lastStream, Date.UTC)} days ago
                            </span>
                        )}
                    </div>
                </DashboardCard>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                style={{
                    marginTop: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >
                <span style={{ fontSize: 28 }}>
                    Thank you for choosing MidPoint.
                </span>
                <span
                    style={{
                        fontSize: 12,
                        marginTop: 5,
                        color: 'rgba(255, 255, 255, 0.6)'
                    }}
                >
                    If you run into any problems or want to provide feedback,
                    please join the <a href="/">Discord</a>.
                </span>
            </motion.div>
        </>
    )
}
