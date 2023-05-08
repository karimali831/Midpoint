import FacebookIcon from '@mui/icons-material/Facebook'
import InsightsIcon from '@mui/icons-material/Insights'
import InstagramIcon from '@mui/icons-material/Instagram'
import CastConnectedIcon from '@mui/icons-material/CastConnected'
import CloseIcon from '@mui/icons-material/Close'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import DiscountIcon from '@mui/icons-material/Discount'
import SettingsIcon from '@mui/icons-material/Settings'
import AddLinkIcon from '@mui/icons-material/AddLink'
import TwitterIcon from '@mui/icons-material/Twitter'
import WindowIcon from '@mui/icons-material/Window'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import images from '../../assets/images'
import { DashboardSection, MidPointStep } from '../../enum/DashboardSection'
import {
    SetDashboardSection,
    SetMidPointStep
} from '../../state/contexts/app/Actions'
import toast from 'react-hot-toast'
import { getAppState } from '../../state/contexts/app/Selectors'
import { MainButton } from '../Buttons/MainButton'
import { ConnectedMidi } from './ConnectedMidi'
import { DashboardLink } from './Link'
import { DashboardOverview } from './Overview'
import { Settings } from './Settings'
import { SoftwareSelect } from './Software/SoftwareSelect'
import { SoftwareInstall } from './Software/SoftwreInstall'
import { Statistics } from './Statistics'
import { Stream } from './Stream'
import { StartStream } from './Stream/Start'
import './styles.css'
import { Welcome } from './Welcome'
import { getStreamState } from '../../state/contexts/stream/Selectors'
import { joinLink } from '../../utils/UrlHelper'
import { useParams } from 'react-router-dom'
import { getUserState } from '../../state/contexts/user/Selectors'
import { Connect } from './Stream/Connect'
import { HubConnectionState } from '@microsoft/signalr'
import { Tokens } from './Tokens'
import { Payment } from './Payment/Payment'
import { PaymentSuccess } from './Payment/Success'
import { TerminateAction } from '../../state/contexts/instance/Actions'
import { HostParams } from '../../types/types'
import { GetUserAction } from '../../state/contexts/user/Actions'
import { Promotions } from './Promotions'
import { SetMidPointJoinIdAction } from '../../state/contexts/stream/Actions'
import { WebRTC } from './WebRTC'
import WarningIcon from '@mui/icons-material/Warning'
import { InstanceTimer } from './InstanceTimer'
import { duration } from 'moment'

export const Dashboard = () => {
    const [leeWayActive, setLeeWayActive] = useState<boolean>(true)

    const { dashboardSection, midpointStep } = useSelector(getAppState)
    const { user } = useSelector(getUserState)

    const { userConnection, timeLiveDuration } = useSelector(getStreamState)

    const { midPointJoinId } = useParams<HostParams>()

    const dispatch = useDispatch()

    const leeWayMinutes = 0

    const ref = useRef<ReturnType<typeof setInterval> | null>(null)

    React.useEffect(() => {
        subscribeTokenUpdate()
    }, [userConnection])

    const subscribeTokenUpdate = () => {
        if (ref.current) {
            clearInterval(ref.current)
        }

        ref.current = setInterval(() => {
            if (
                userConnection?.connectionState === HubConnectionState.Connected
            ) {
                dispatch(GetUserAction())
            } else {
                if (ref.current) {
                    clearInterval(ref.current)
                }
            }
        }, 30 * 1000)
    }

    React.useEffect(() => {
        if (!!midPointJoinId && !!user) {
            dispatch(SetMidPointJoinIdAction(midPointJoinId))
        }
    }, [midPointJoinId, user])

    React.useEffect(() => {
        if (leeWayActive && timeLiveDuration != null) {
            const minutesRemaining = timeLiveDuration.minutes()

            if (minutesRemaining >= leeWayMinutes) {
                setLeeWayActive(false)
            }
        }
    }, [timeLiveDuration])

    React.useEffect(() => {
        if (
            user?.remainingTokens != null &&
            user.remainingTokens < 100 &&
            userConnection?.connectionState === HubConnectionState.Connected
        ) {
            toast(
                "Warning: You're running low on tokens! Please top-up to remain connected.",
                {
                    icon: <WarningIcon color="warning" />
                }
            )

            if (user.remainingTokens <= 0) {
                dispatch(TerminateAction())
            }
        }
    }, [user?.remainingTokens])

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                .then(() => {
                    dispatch(TerminateAction())
                })
                .catch((err) => {
                    console.error(err)
                    toast.error(err.message)
                })
        }
    }

    const copyJoinLink = () => {
        if (userConnection == null) return

        navigator.clipboard.writeText(joinLink(userConnection.roomId))
        toast.success('MidPoint join link copied to clipboard')
    }

    if (midpointStep === MidPointStep.WebRTC) {
        return <WebRTC closeConnection={closeConnection} />
    }

    return (
        <motion.div
            className="dasboard-container"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{
                x: window.innerWidth,
                transition: {
                    duration: 0.3
                }
            }}
        >
            <div className="dashboard-outer">
                <div className="dashboard-inner">
                    <div className="left-col">
                        <img
                            src={images.adamProfilePic}
                            className="dashboard-userpic"
                        />
                        <span className="mt15 fs20">Adam</span>
                        <span className="mt10 secondary">DJ</span>

                        <div className="mt30">
                            {userConnection?.connectionState ===
                            HubConnectionState.Connected ? (
                                <div className="align-3">
                                    <InstanceTimer isMini={false} />
                                    <div style={{ marginTop: 10 }} />
                                    {midpointStep !== MidPointStep.Stream && (
                                        <MainButton
                                            onClick={() =>
                                                dispatch(
                                                    SetMidPointStep(
                                                        MidPointStep.Stream
                                                    )
                                                )
                                            }
                                            icon={<CastConnectedIcon />}
                                            text="Stream"
                                            width={140}
                                        />
                                    )}
                                    {midpointStep === MidPointStep.Stream && (
                                        <MainButton
                                            danger={true}
                                            icon={<CloseIcon />}
                                            width={140}
                                            text="Close MidPoint"
                                            onClick={closeConnection}
                                        />
                                    )}
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<AddLinkIcon />}
                                        outline={true}
                                        width={140}
                                        text="Copy join link"
                                        onClick={copyJoinLink}
                                    />
                                    <div style={{ marginTop: 20 }} />
                                    <hr
                                        className="b3"
                                        style={{
                                            marginBottom: '-10px',
                                            width: '100%'
                                        }}
                                    />
                                </div>
                            ) : (
                                <>
                                    <MainButton
                                        onClick={() =>
                                            dashboardSection !==
                                                DashboardSection.Start &&
                                            dispatch(
                                                SetDashboardSection(
                                                    DashboardSection.Start
                                                )
                                            )
                                        }
                                        icon={<PowerSettingsNewIcon />}
                                        disabled={
                                            dashboardSection ===
                                            DashboardSection.Start
                                        }
                                        text="Start MidPoint."
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<PeopleAltOutlinedIcon />}
                                        outline={true}
                                        text="Connect MidPoint."
                                        disabled={
                                            dashboardSection ===
                                            DashboardSection.Connect
                                        }
                                        onClick={() =>
                                            dashboardSection !==
                                                DashboardSection.Connect &&
                                            dispatch(
                                                SetDashboardSection(
                                                    DashboardSection.Connect
                                                )
                                            )
                                        }
                                    />
                                </>
                            )}

                            <div style={{ marginTop: 30 }}>
                                <DashboardLink
                                    section={DashboardSection.Overview}
                                    icon={<WindowIcon />}
                                />
                                <DashboardLink
                                    section={DashboardSection.Tokens}
                                    icon={<ShoppingCartIcon />}
                                />
                                <DashboardLink
                                    section={DashboardSection.Promotions}
                                    icon={<DiscountIcon />}
                                />
                                <DashboardLink
                                    section={DashboardSection.Statistics}
                                    icon={<InsightsIcon />}
                                />
                                <DashboardLink
                                    section={DashboardSection.Settings}
                                    icon={<SettingsIcon />}
                                />
                            </div>
                            <div style={{ margin: '30px 0' }}>
                                <span>Need help? Find us here.</span>
                                <div
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}
                                >
                                    <TwitterIcon
                                        className="mr10"
                                        style={{ fontSize: 20 }}
                                    />
                                    <FacebookIcon
                                        className="mr10"
                                        style={{ fontSize: 20 }}
                                    />
                                    <InstagramIcon
                                        className="mr10"
                                        style={{ fontSize: 20 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        {midpointStep === MidPointStep.SoftwareSelect ? (
                            <SoftwareSelect />
                        ) : midpointStep === MidPointStep.Stream ? (
                            <Stream />
                        ) : midpointStep === MidPointStep.SoftwareInstall ? (
                            <SoftwareInstall />
                        ) : midpointStep === MidPointStep.ConnectedMidi ? (
                            <ConnectedMidi />
                        ) : midpointStep === MidPointStep.Welcome ? (
                            <Welcome />
                        ) : dashboardSection === DashboardSection.Overview ? (
                            <DashboardOverview />
                        ) : dashboardSection === DashboardSection.Tokens ? (
                            <Tokens />
                        ) : dashboardSection === DashboardSection.Payment ? (
                            <Payment />
                        ) : dashboardSection ===
                          DashboardSection.PaymentSuccessful ? (
                            <PaymentSuccess />
                        ) : dashboardSection === DashboardSection.Statistics ? (
                            <Statistics />
                        ) : dashboardSection === DashboardSection.Settings ? (
                            <Settings />
                        ) : dashboardSection === DashboardSection.Connect ? (
                            <Connect />
                        ) : dashboardSection === DashboardSection.Promotions ? (
                            <Promotions />
                        ) : dashboardSection === DashboardSection.Start ? (
                            <StartStream />
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
