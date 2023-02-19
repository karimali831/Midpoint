import FacebookIcon from '@mui/icons-material/Facebook';
import InsightsIcon from '@mui/icons-material/Insights';
import InstagramIcon from '@mui/icons-material/Instagram';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import AddLinkIcon from '@mui/icons-material/AddLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import React from 'react';
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
import { HostParams } from '../../../types/types';
import { getUserState } from '../../state/contexts/user/Selectors';
import { Connect } from './Stream/Connect';
import { SetHostRoomAction, SetMidPointJoinIdAction, SetUserConnectionAction } from '../../state/contexts/stream/Actions';
import { HubConnectionState } from '@microsoft/signalr';
import { Tokens } from './Tokens';
import { Payment } from './Payment/Payment';
import { PaymentSuccess } from './Payment/Success';

export const Dashboard = () => {

    const { dashboardSection, midpointStep } = useSelector(getAppState)
    const { user } = useSelector(getUserState)
    const { userConnection, selectedHostRoom } = useSelector(getStreamState);
    const { midPointJoinId } = useParams<HostParams>();

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (!!midPointJoinId && !!user) {
            // dispatch(SetDashboardSection(DashboardSection.Start))
            dispatch(SetMidPointJoinIdAction(midPointJoinId))
        }
    }, [midPointJoinId, user]);

    const closeConnection = async () => {
        if (!!userConnection?.hubConnection) {
            await userConnection.hubConnection
                .stop()
                .then(() => {
                    dispatch(SetUserConnectionAction(null))
                    dispatch(SetHostRoomAction(null))
                    dispatch(SetDashboardSection(DashboardSection.Overview))
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
                                    <MainButton
                                        onClick={() => midpointStep !== MidPointStep.Stream && dispatch(SetMidPointStep(MidPointStep.Stream))}
                                        icon={<CastConnectedIcon />}
                                        text="Stream"
                                        success={true}
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<AddLinkIcon />}
                                        outline={true}
                                        text="Copy join link"
                                        onClick={copyJoinLink}
                                        
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <div
                                        onClick={closeConnection}
                                        style={{ display: 'flex', alignItems: 'center', margin: '15px 0', cursor: 'pointer' }}
                                    >
                                        <CloseIcon style={{ fontSize: 20, marginRight: 10 }} />
                                        <span>Disconnect</span>
                                    </div>
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
