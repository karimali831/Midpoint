import CloudDoneIcon from '@mui/icons-material/CloudDoneOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Text } from 'react-native';
import images from '../../assets/images/index.web';
import { isMobile } from '../../Platform';
import { Details } from '../Details';
import { Locations } from '../Locations';
import { FeatureCard } from './FeatureCard';
import { PersonCard } from './PersonCard';

export const Home = () => {
    React.useEffect(() => { })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}

        >
            <div style={{
                position: 'relative',
                justifyContent: 'center',
                display: 'flex',
                marginBottom: 75

            }}>
                {/* <div style={{
                    // position: 'relative',
                    backgroundImage: `url(${isMobile ? "/assets/images/bannermobile.png" : "../../../assets/images/banner.png"})`,
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height: '100%',
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat"
                }}> */}
                <img src={isMobile ? images.bannerMobileImg : images.bannerImg} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    boxShadow: 'rgb(25 93 196) 0px 4px 4px -2px'
                }}
                />
                {/* </div> */}
                <div style={{
                    position: 'absolute',
                    height: 130,
                    bottom: isMobile ? '25%' : '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    textAlign: 'center'
                }}>
                    <span style={{ color: '#fff', fontSize: 36, fontWeight: '500' }}>MidPoint. Cloud Streaming</span>
                    <span style={{ color: '#fff', marginBottom: 10, flexWrap: 'wrap', fontSize: 14 }}>The future of collaborative music industry projects is in the cloud</span>
                    <Button variant="contained" style={{ width: 170, borderRadius: 25 }}>
                        Join the Discord!
                    </Button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center'
            }}>

                <div style={{
                    marginTop: 50,
                    display: 'grid',
                    width: '100%',
                    gridGap: 10,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 0fr))',
                    justifyContent: 'center'
                }}>

                    <div style={{ position: 'relative', flexDirection: 'column' }}>
                        <span style={{
                            color: '#fff',
                            fontSize: 32,
                            position: 'absolute',
                            top: -60
                        }}>
                            Main features
                        </span>
                        <FeatureCard
                            icon={<WhereToVoteOutlinedIcon style={{ color: '#fff' }} />}
                            text="Geo-balanced"
                            desc="Connect to the nearest server based on the average latency of your team"
                        />

                    </div>
                    <FeatureCard
                        icon={<PeopleAltIcon style={{ color: '#fff' }} />}
                        text="Collaborative"
                        desc="Accessible and ease of use to perform B2B DJ sets,  VJs and soon XR streaming via the cloud at the comfort of your own home"
                    />
                    <FeatureCard
                        icon={<CloudDoneIcon style={{ color: '#fff' }} />}
                        text="Low-Latency"
                        desc="Super low sub-second latency with a gigabit up-link, streamed locally via the cloud without the need / use of relay servers"
                    />
                    <FeatureCard
                        icon={<MonetizationOnIcon style={{ color: '#fff' }} />}
                        text="Pay for what you use"
                        desc="No monthly commitment plans... Just hourl deductible tokens"
                    />

                </div>

                <div style={{
                    marginTop: 100,
                    display: 'grid',
                    width: '100%',
                    gridGap: 50,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 0fr))',
                    justifyContent: 'center'
                }}>
                    <div style={{ position: 'relative', flexDirection: 'column' }}>

                        <span style={{
                            color: '#fff',
                            fontSize: 32,
                            position: 'absolute',
                            top: -60
                        }}>
                            Details
                        </span>
                        <Details data={86} title="Registered users" desc="+6 LAST WEEK" />

                    </div>
                    <Details data={3} title="Cloud instances live now" desc="Average of 16 a week" />
                    <Details data={"99%"} title="Uptime" />
                </div>
                <Locations />
                <div style={{ marginTop: 50, flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 32,
                        marginBottom: 15,
                    }}>
                        Start within minutes
                    </Text>
                    <Button variant="contained" style={{ width: 120, borderRadius: 25 }}>
                        Sign Up
                    </Button>
                </div>

                <div style={{
                    marginTop: 100,
                    display: 'grid',
                    width: '100%',
                    gridGap: 10,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 0fr))',
                    justifyContent: 'center'
                }}>

                    <div style={{ position: 'relative', flexDirection: 'column' }}>

                        <span style={{
                            color: '#fff',
                            fontSize: 32,
                            position: 'absolute',
                            marginBottom: 30,
                            top: -60
                        }}>
                            Meet the team
                        </span>
                        <PersonCard name='Adam' title='CEO' />

                    </div>


                    <PersonCard name='Karim' title='MidPoint. Developer' />
                    <PersonCard name='Patrick van der Mark' title='UI/UX Designer' />
                    <PersonCard name='Jeff' title='MetaVerse Venue Creator' />
                </div>
            </div>


            <div style={{
                marginTop: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <span style={{ color: '#fff', fontSize: 18 }}>
                    We’d like to meet you too.
                </span>
                <span style={{ color: 'grey', marginTop: 5 }}>
                    Join the <a href="" style={{ color: 'grey' }}>Discord.</a>
                </span>
                <Button variant="contained" style={{ width: 140, borderRadius: 25, marginTop: 30 }}>
                    Get in touch
                </Button>
                <span style={{ color: 'grey', marginTop: 5 }}>
                    Business inqueries only*
                </span>
            </div>
        </motion.div>
    )
}