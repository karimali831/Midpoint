import FacebookIcon from '@mui/icons-material/Facebook';
import InsightsIcon from '@mui/icons-material/Insights';
import InstagramIcon from '@mui/icons-material/Instagram';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import BlockIcon from '@mui/icons-material/Block';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import AddLinkIcon from '@mui/icons-material/AddLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import images from '../../assets/images';
import { DashboardSection, MidPointStep } from '../../enum/DashboardSection';
import { SetDashboardSection, SetMidPointStep } from '../../state/contexts/app/Actions';
import toast from 'react-hot-toast';
import { getAppState } from '../../state/contexts/app/Selectors';
import { MainButton } from '../Buttons/MainButton';
import { ConnectedMidi } from './ConnectedMidi';
import { DashboardLink } from './Link';
import { DashboardOverview } from './Overview';
import { Settings } from './Settings';
import { SoftwareSelect } from './Software/SoftwareSelect';
import { SoftwareInstall } from './Software/SoftwreInstall';
import { Statistics } from './Statistics';
import { Stream } from './Stream';
import { StartStream } from './Stream/Start';
import './styles.css';
import { Welcome } from './Welcome';
import { getStreamState } from '../../state/contexts/stream/Selectors';
import { joinLink } from '../../utils/UrlHelper';
import { useParams } from 'react-router-dom';
import { getUserState } from '../../state/contexts/user/Selectors';
import { Connect } from './Stream/Connect';
import { DeleteHostRoomAction, SetHostRoomAction, SetMidPointJoinIdAction, SetUserConnectionAction } from '../../state/contexts/stream/Actions';
import { HubConnectionState } from '@microsoft/signalr';
import { Tokens } from './Tokens';
import { Payment } from './Payment/Payment';
import { PaymentSuccess } from './Payment/Success';
import { TerminateAction } from '../../state/contexts/instance/Actions';
import { Box, LinearProgress } from '@mui/material';
import { subscriptionApi } from '../../api/subscriptionApi';
import { HostParams } from '../../types/types';
import { SubscriptionValue } from '../../graphql/api';
import { OnUpdateUserSubscription } from '../../API';
import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub';
import { GetUserAction } from '../../state/contexts/user/Actions';
import { Hub } from 'aws-amplify';

export const Dashboard = () => {

    const [tokensRemaining, setTokensRemaining] = useState<number>(0)
    const [minutesRemaining, setMinutesRemaining] = useState<number>(0)
    const [percentageRemaining, setPercentageRemaining] = useState<number>(0)
    const [leeWayActive, setLeeWayActive] = useState<boolean>(true)

    const { dashboardSection, midpointStep } = useSelector(getAppState)
    const { user } = useSelector(getUserState)

    const { 
        userConnection, 
        selectedHostRoom, 
        timeLiveDuration
    } = useSelector(getStreamState)
    
    const { midPointJoinId } = useParams<HostParams>();

    const dispatch = useDispatch()

    const deductTokens = 500 / 60
    const leeWayMinutes = 0

    React.useEffect(() => {
        if (!!midPointJoinId && !!user) {
            dispatch(SetMidPointJoinIdAction(midPointJoinId))
        }
    }, [midPointJoinId, user]);
    
    React.useEffect(() => {
        if (leeWayActive && timeLiveDuration != null) {
            const minutesRemaining = timeLiveDuration.minutes()

            if (minutesRemaining >= leeWayMinutes) {
                setLeeWayActive(false)
            }
        }

    }, [timeLiveDuration]);

    React.useEffect(() => {
        if (user) {
            if (user.purchasedTokens === 0 && midpointStep === MidPointStep.Stream) {
                dispatch(SetMidPointStep(MidPointStep.Welcome))
            }

            if (user.purchasedTokens != null && user.remainingTokens != null) {
                setTokensRemaining(user.remainingTokens)

                const minutesRemaining = Math.round(user.remainingTokens / deductTokens)

                setMinutesRemaining(minutesRemaining)

                const calc = (user.purchasedTokens - user.remainingTokens) / user.purchasedTokens
                const percentageRemaining = Math.floor(100 - calc * 100)

                setPercentageRemaining(percentageRemaining)
            }

            const subscribeTokenUpdate = async() => {
                const subscription = (await subscriptionApi.tokensRemaining(user)).subscribe({
                    next: (response: SubscriptionValue<OnUpdateUserSubscription>) => {;
                        console.log(response.value.data.onUpdateUser)
                        // this is non-sense, socket connected obj returns null (except id)
                        dispatch(GetUserAction())
                    },
                    error: (error: any) => console.error(error)
                })
                return () => subscription.unsubscribe()
            }

            // let priorConnectionState: ConnectionState;

            Hub.listen('api', (data: any) => {
                const { payload } = data;

                if (payload.event === CONNECTION_STATE_CHANGE) {
                    const connectionState = payload.data.connectionState as ConnectionState;
                    console.log(connectionState);

                    // if (priorConnectionState === ConnectionState.Connecting && payload.data.connectionState === ConnectionState.Connected) {
                    //     dispatch(GetUserAction())
                    // }

                    // priorConnectionState = payload.data.connectionState;
                }
            });

            subscribeTokenUpdate()

        }
    }, [user])

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                .then(() => {
                    dispatch(TerminateAction())
                    dispatch(SetUserConnectionAction(null))
                    dispatch(SetHostRoomAction(null))
                    dispatch(SetDashboardSection(DashboardSection.Overview))

                    if (selectedHostRoom )
                        dispatch(DeleteHostRoomAction(selectedHostRoom.id))

                })
                .catch((err) => {
                    console.error(err);
                    toast.error(err.message)
                });
        }
    };

    const copyJoinLink = () => {
        if (userConnection == null)
            return

        navigator.clipboard.writeText(joinLink(userConnection.roomId));
        toast.success("MidPoint join link copied to clipboard")
    };

    return (
        <motion.div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 100,
            }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div
                style={{
                    margin: '0 auto',
                    marginTop: 100,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}
                >
                    <div className="left-col">
                        <img
                            src={images.adamProfilePic}
                            style={{
                                width: 120,
                                height: 120,
                                objectFit: 'cover',
                                borderRadius: 50,
                            }}
                        />
                        <span style={{ marginTop: 15, fontSize: 20 }}>
                            Adam
                        </span>
                        <span
                            style={{
                                marginTop: 10,
                                color: 'rgba(255, 255, 255, 0.6)',
                            }}
                        >
                            DJ
                        </span>

                        <div style={{ marginTop: 30 }}>
                            {userConnection?.connectionState === HubConnectionState.Connected ?
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                    {
                                      
                                        <Box sx={{ width: '100%', marginBottom: 5 }}>
                                            <LinearProgress variant="determinate" value={percentageRemaining} color={minutesRemaining < 10 ? "error" : "info"}  />
                                            <div style={{ marginTop: 15, color: minutesRemaining < 10 ? "rgb(238, 175, 175)" : "white" }}>
                                                {minutesRemaining} minutes left
                                            </div>
                                            <div className='secondary' style={{ marginTop: 5 }}>{tokensRemaining} tokens</div>
                                        </Box>
                                    }

                                    <MainButton
                                        onClick={() => midpointStep !== MidPointStep.Stream && dispatch(SetMidPointStep(MidPointStep.Stream))}
                                        icon={<CastConnectedIcon />}
                                        text="Stream"
                                        // success={true}
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<AddLinkIcon />}
                                        outline={true}
                                        text="Copy join link"
                                        onClick={copyJoinLink}
                                        
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        danger={true}
                                        icon={<BlockIcon />}
                                        text="Close MidPoint"
                                        onClick={closeConnection}
                                        
                                    />
                                     <div style={{ marginTop: 20 }} />
                                    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.6)', marginBottom: '-10px', width: '100%' }} />
                                </div>
                            :
                                <>
                                    <MainButton
                                        onClick={() => dashboardSection !== DashboardSection.Start && dispatch(SetDashboardSection(DashboardSection.Start))}
                                        icon={<PowerSettingsNewIcon />}
                                        disabled={dashboardSection === DashboardSection.Start}
                                        text="Start MidPoint."
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<PeopleAltOutlinedIcon />}
                                        outline={true}
                                        text="Connect MidPoint."
                                        disabled={dashboardSection === DashboardSection.Connect}
                                        onClick={() => dashboardSection !== DashboardSection.Connect && dispatch(SetDashboardSection(DashboardSection.Connect)) }
                                    />
                                </>
                            }

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
                                        marginTop: 10,
                                    }}
                                >
                                    <TwitterIcon
                                        style={{
                                            fontSize: 20,
                                            marginRight: 10,
                                        }}
                                    />
                                    <FacebookIcon
                                        style={{
                                            fontSize: 20,
                                            marginRight: 10,
                                        }}
                                    />
                                    <InstagramIcon
                                        style={{
                                            fontSize: 20,
                                            marginRight: 10,
                                        }}
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
                        ) : dashboardSection === DashboardSection.PaymentSuccessful ? (
                            <PaymentSuccess />
                        ) : dashboardSection === DashboardSection.Statistics ? (
                            <Statistics />
                        ) : dashboardSection === DashboardSection.Settings ? (
                            <Settings />
                        ) : dashboardSection === DashboardSection.Connect ? (
                            <Connect />
                        ) : dashboardSection === DashboardSection.Start ? (
                            <StartStream />
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
