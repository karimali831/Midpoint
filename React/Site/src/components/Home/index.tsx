import CloudDoneIcon from '@mui/icons-material/CloudDoneOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Details } from '../Details';
import { Locations } from '../Locations';
import { FeatureCard } from './FeatureCard';
import { MeetTheTeam } from './Team';
import images from '../../assets/images';
import './styles.css'
import { MainButton } from '../Buttons/MainButton';

export const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='container'>
                <img src={images.bannerImg} className='banner-img' />
                <div className='join-discord' style={{ bottom: isMobile ? '25%' : '10%'}}>
                    <span className='title'>
                        MidPoint. Cloud Streaming</span>
                    <span className='sub-title '>
                        The future of collaborative music industry projects is in the cloud
                    </span>
                    <MainButton text={'Join the Discord!'} />
                </div>
            </div>
            <div className='align-3'>
                <div className='grid-1'>
                    <div style={{ position: 'relative', flexDirection: 'column' }}>
                        <span className='headline'>
                            Main features
                        </span>
                        <FeatureCard
                            icon={<WhereToVoteOutlinedIcon />}
                            text="Geo-balanced"
                            desc="Connect to the nearest server based on the average latency of your team"
                        />

                    </div>
                    <FeatureCard
                        icon={<PeopleAltIcon />}
                        text="Collaborative"
                        desc="Accessible and ease of use to perform B2B DJ sets,  VJs and soon XR streaming via the cloud at the comfort of your own home"
                    />
                    <FeatureCard
                        icon={<CloudDoneIcon />}
                        text="Low-Latency"
                        desc="Super low sub-second latency with a gigabit up-link, streamed locally via the cloud without the need / use of relay servers"
                    />
                    <FeatureCard
                        icon={<MonetizationOnIcon />}
                        text="Pay for what you use"
                        desc="No monthly commitment plans... Just hourl deductible tokens"
                    />

                </div>
                <div className='grid-2 separate-margin2'>
                    <div style={{ position: 'relative', flexDirection: 'column' }}>

                        <span className='headline'>
                            Details
                        </span>
                        <Details data={86} title="Registered users" desc="+6 LAST WEEK" />

                    </div>
                    <Details data={3} title="Cloud instances live now" desc="Average of 16 a week" />
                    <Details data={"99%"} title="Uptime" />
                </div>
                <Locations />
                <div className='align-3 separate-margin'>
                    <span className='headline-2'>
                        Start within minutes
                    </span>
                    <MainButton text={'Sign Up'} />
                </div>
                <MeetTheTeam />
            </div>


            <div className='align-3 separate-margin2'>
                <span className='meet-team-txt'>
                    We’d like to meet you too.
                </span>
                <span className='alternate mt5'>
                    Join the <a href="" className='alternate'>Discord.</a>
                </span>
                <div className='mt30'>
                    <MainButton text='Get in touch' />
                </div>
                <span className='alternate mt5'>
                    Business enquiries only*
                </span>
            </div>
        </motion.div>
    )
}