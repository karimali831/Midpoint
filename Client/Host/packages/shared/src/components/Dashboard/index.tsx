import FacebookIcon from '@mui/icons-material/Facebook';
import InsightsIcon from '@mui/icons-material/Insights';
import InstagramIcon from '@mui/icons-material/Instagram';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import AddLinkIcon from '@mui/icons-material/AddLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import images from '../../assets/images';
import { DashboardSection, MidPointStep } from '../../enum/DashboardSection';
import { StartHost } from '../../screens/Host';
import { SetDashboardSection } from '../../state/contexts/app/Actions';
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
import { SetHostRoomAction, SetUserConnectionAction } from '../../state/contexts/stream/Actions';

export const Dashboard = () => {

    const dispatch = useDispatch()
    const { dashboardSection, midpointStep } = useSelector(getAppState)

    const closeMidpoint = () => {
        dispatch(SetUserConnectionAction(null))
        dispatch(SetHostRoomAction(null))
        dispatch(SetDashboardSection(DashboardSection.Overview))
    }

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
                            {!!midpointStep ?
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <MainButton
                                        icon={<AddLinkIcon />}
                                        text="Generate invite link"
                                        disabled={midpointStep !== MidPointStep.Stream}
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        onClick={closeMidpoint}
                                        icon={<CloseIcon />}
                                        outline={true}
                                        text="Close MidPoint"
                                    />
                                </div>
                            :
                                <>
                                    <MainButton
                                        onClick={() => dispatch(SetDashboardSection(DashboardSection.Start))}
                                        icon={<PowerSettingsNewIcon />}
                                        text="Start MidPoint."
                                    />
                                    <div style={{ marginTop: 10 }} />
                                    <MainButton
                                        icon={<PeopleAltOutlinedIcon />}
                                        outline={true}
                                        text="Connect MidPoint."
                                        onClick={() => dispatch(SetDashboardSection(DashboardSection.Connect)) }
                                    />
                                </>
                            }

                            <div style={{ marginTop: 30 }}>
                                <DashboardLink
                                    section={DashboardSection.Overview}
                                    icon={<WindowIcon />}
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
                        ) : dashboardSection === DashboardSection.Statistics ? (
                            <Statistics />
                        ) : dashboardSection === DashboardSection.Settings ? (
                            <Settings />
                        ) : dashboardSection === DashboardSection.Connect ? (
                            <StartHost />
                        ) : dashboardSection === DashboardSection.Start ? (
                            <StartStream />
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
