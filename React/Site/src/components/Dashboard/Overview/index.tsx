import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined'
import StreamIcon from '@mui/icons-material/Stream'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { DashboardCard } from '../DashboardCard'
import { SetDashboardSection } from '../../../state/contexts/app/Actions'
import { DashboardSection } from '../../../enum/DashboardSection'
import { dateDiff, ordinalDate } from '../../../utils/Utils'
import './styles.css'
import moment from 'moment'

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

    let lastStreamDaysAgo
    if (user.lastStream) {
        lastStreamDaysAgo = dateDiff(
            moment(new Date()),
            moment(user.lastStream)
        )
    }

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
                                className="get-tokens-btn align-6 link"
                                onClick={() =>
                                    dispatch(
                                        SetDashboardSection(
                                            DashboardSection.Tokens
                                        )
                                    )
                                }
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
                    <div
                        className="align-7 link"
                        onClick={() =>
                            dispatch(
                                SetDashboardSection(DashboardSection.Streams)
                            )
                        }
                    >
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
                    <div
                        className="align-7 link"
                        onClick={() =>
                            dispatch(
                                SetDashboardSection(DashboardSection.Streams)
                            )
                        }
                    >
                        <span className="fs22 mr15">
                            {user.lastStream
                                ? ordinalDate(
                                      moment(user.lastStream).format(`MMMM, E`)
                                  )
                                : 'No streams'}
                        </span>
                        {user.lastStream && (
                            <span className="fs12">
                                {lastStreamDaysAgo === 0
                                    ? 'Today'
                                    : ` day${
                                          lastStreamDaysAgo === 1 ? '' : 's'
                                      } ago`}
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
