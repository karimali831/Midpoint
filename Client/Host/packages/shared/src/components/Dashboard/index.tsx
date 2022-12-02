import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InsightsIcon from '@mui/icons-material/Insights';
import InstagramIcon from '@mui/icons-material/Instagram';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import TwitterIcon from '@mui/icons-material/Twitter';
import WindowIcon from '@mui/icons-material/Window';
import { motion } from 'framer-motion';
import React from "react";
import { useDispatch } from 'react-redux';
import images from "../../assets/images";
import { AppScreen } from '../../enum/AppScreen';
import { ShowScreenAction } from '../../state/contexts/app/Actions';
import { MainButton } from '../Buttons/MainButton';
import { DashboardLink } from './Link';
import { DashboardOverview } from './Overview';
import { Settings } from './Settings';
import { Statistics } from './Statistics';
import './styles.css';

export enum DashboardSection {
    Overview,
    Statistics,
    Settings
}

export const Dashboard = () => {
    const [activeSection, setActiveSection] = React.useState<DashboardSection>(DashboardSection.Overview)

    const dispatch = useDispatch()

    return (
        <motion.div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 100
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div
                style={{
                    margin: '0 auto',
                    marginTop: 100
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%'
                }}>

                    <div className="left-col">

                        <img src={images.adamProfilePic} style={{
                            width: 120,
                            height: 120,
                            objectFit: 'cover',
                            borderRadius: 50
                        }} />
                        <span style={{ marginTop: 15, fontSize: 20 }}>Adam</span>
                        <span style={{ marginTop: 10, color: 'rgba(255, 255, 255, 0.6)' }}>DJ</span>

                        <div style={{ marginTop: 30 }}>

                            <MainButton
                                icon={<ArrowForwardIcon />}
                                text="Start MidPoint."
                            />
                            <div style={{ marginTop: 10 }} />
                            <MainButton
                                icon={<PeopleAltOutlinedIcon />}
                                outline={true}
                                text="Connect MidPoint."
                                onClick={() => dispatch(ShowScreenAction({ screen: AppScreen.Host }))}
                            />

                            <div style={{ marginTop: 30 }}>
                                <DashboardLink
                                    activeSection={activeSection}
                                    section={DashboardSection.Overview}
                                    onClick={setActiveSection}
                                    icon={<WindowIcon />}
                                />
                                <DashboardLink
                                    activeSection={activeSection}
                                    section={DashboardSection.Statistics}
                                    onClick={setActiveSection}
                                    icon={<InsightsIcon />}
                                />
                                <DashboardLink
                                    activeSection={activeSection}
                                    section={DashboardSection.Settings}
                                    onClick={setActiveSection}
                                    icon={<SettingsIcon />}
                                />
                            </div>
                            <div style={{ margin: '30px 0' }}>
                                <span>Need help? Find us here.</span>
                                <div style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <TwitterIcon style={{ fontSize: 20, marginRight: 10 }} />
                                    <FacebookIcon style={{ fontSize: 20, marginRight: 10 }} />
                                    <InstagramIcon style={{ fontSize: 20, marginRight: 10 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <span style={{ fontSize: 28 }}>
                            {DashboardSection[activeSection]}
                        </span>

                        {
                            activeSection === DashboardSection.Overview ?
                                <DashboardOverview />
                                :
                                activeSection === DashboardSection.Statistics ?
                                    <Statistics />
                                    : activeSection === DashboardSection.Settings ?
                                        <Settings />
                                        : null
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    )
}