import CloudDoneIcon from '@mui/icons-material/CloudDoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import { Button } from '@mui/material';
import React from 'react';
import { Text, View } from 'react-native';
import images from '../../assets/images/index.web';
import { isMobile } from '../../Platform';
import { FeatureCard } from './FeatureCard';
import { PersonCard } from './PersonCard';

interface IOwnProps {
}

export const Home: React.FC<IOwnProps> = () => {


    return (
        <View style={{ backgroundColor: '#121212' }}>
            <div style={{
                position: 'relative',
                justifyContent: 'center',
                display: 'flex',
                marginBottom: 75

            }}>
                <img src={isMobile ? images.bannerMobileImg : images.bannerImg} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    boxShadow: 'rgb(25 93 196) 0px 4px 4px -2px'
                }}
                />

                <View style={{
                    position: 'absolute',
                    height: 130,
                    bottom: isMobile ? '25%' : '10%',
                    display: 'flex',
                    padding: 20,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <Text style={{ color: '#fff', fontSize: 38, fontWeight: '500' }}>MidPoint. Cloud Streaming</Text>
                    <Text style={{ color: '#fff', marginBottom: 10, flexWrap: 'wrap' }}>The future of collaborative music industry projects is in the cloud</Text>
                    <Button variant="contained" style={{ width: 170, borderRadius: 25 }}>
                        Join the Discord!
                    </Button>
                </View>
            </div>
            <View style={{
                alignSelf: 'center',
                width: isMobile ? '90%' : '70%'
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 32
                }}>
                    Main features
                </Text>

                <View style={{ marginTop: 30, alignItems: isMobile ? 'center' : 'stretch' }}>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'

                    }}>
                        <FeatureCard
                            icon={<WhereToVoteOutlinedIcon />}
                            text="Geo-balanced"
                            desc="Connect to the nearest server based on the average latency of your team"
                        />
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
                </View>
                <Text style={{
                    color: '#fff',
                    fontSize: 32,
                    marginTop: 30,
                    marginBottom: 30,
                }}>
                    Details
                </Text>
                <View style={{ alignItems: isMobile ? 'center' : 'stretch' }}>

                    <div style={{
                        alignItems: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}>
                        <View style={{ width: 300, marginRight: 15, marginBottom: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 32, marginRight: 15 }}>86</Text>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Registered users</Text>
                                        <Text style={{ color: '#fff', fontSize: 11 }}>+6 LAST WEEK</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: '#195DC4', borderBottomWidth: 2, marginTop: 20 }} />
                        </View>

                        <View style={{ width: 300, marginRight: 15, marginBottom: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 32, marginRight: 15 }}>3</Text>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Cloud instances live now</Text>
                                        <Text style={{ color: '#fff', fontSize: 11 }}>Average of 16 a week</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: '#195DC4', borderBottomWidth: 2, marginTop: 20 }} />
                        </View>

                        <View style={{ width: 300, marginRight: 15, marginBottom: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 32, marginRight: 15 }}>99%</Text>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Uptime</Text>
                                        <Text style={{ color: '#fff', fontSize: 11 }}></Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomColor: '#195DC4', borderBottomWidth: 2, marginTop: 20 }} />
                        </View>
                    </div>

                    <View style={{ marginTop: 25, alignItems: 'center' }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 32,
                            marginBottom: 30,
                        }}>
                            Current locations served
                        </Text>
                        {
                            !isMobile ?
                                <img src={images.mapImg} width="100%" height="100%" />
                                :
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: '#eee' }}>Europe</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Frankfurt (Germany)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Ireland</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>London (United Kingdom)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Paris (France)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Stockholm (Sweden)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Milan (Italy)</Text>

                                        <Text style={{ color: '#eee' }}>USA East</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>North Virginia</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Ohio</Text>

                                        <Text style={{ color: '#eee', marginTop: 10 }}>USA West</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Northern California</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Oregon</Text>

                                        <Text style={{ color: '#eee', marginTop: 10 }}>South America</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>São Paulo (Brazil)</Text>

                                        <Text style={{ color: '#eee', marginTop: 10 }}>Canada</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Central Canada</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: '#eee' }}>Asia Pacific</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Hong Kong</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Mumbai (India)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Osaka (Japan)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Seoul (South Korea)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Singapore</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Sydney (Australia)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Jakarta (Indonesia)</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Tokyo (Japan)</Text>

                                        <Text style={{ color: '#eee', marginTop: 10 }}>Africa</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Cape Town (South Africa)</Text>

                                        <Text style={{ color: '#eee', marginTop: 10 }}>Middle East</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 12 }}>Bahrain</Text>
                                    </View>
                                </View>
                        }
                    </View>

                </View>

                <View style={{ marginTop: 75, alignItems: 'center' }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 32,
                        marginBottom: 15,
                    }}>
                        Start within minutes
                    </Text>
                    <Button variant="contained" style={{ width: 140, borderRadius: 25 }}>
                        Dashboard
                    </Button>
                </View>
                <Text style={{
                    color: '#fff',
                    fontSize: 32,
                    marginTop: 75,
                    marginBottom: 30,
                }}>
                    Meet the team
                </Text>
                <View style={{ alignItems: isMobile ? 'center' : 'stretch' }}>

                    <div style={{
                        alignItems: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
                    }}>
                        <PersonCard name='Adam' title='CEO' />
                        <PersonCard name='Karim' title='MidPoint. Developer' />
                        <PersonCard name='Patrick van der Mark' title='UI/UX Designer' />
                        <PersonCard name='Jeff' title='MetaVerse Venue Creator' />
                    </div>
                </View>


                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>
                        We’d like to meet you too.
                    </Text>
                    <Text style={{ color: 'grey', marginTop: 5 }}>
                        Join the <a href="" style={{ color: 'grey' }}>Discord.</a>
                    </Text>
                    <Button variant="contained" style={{ width: 140, borderRadius: 25, marginTop: 30 }}>
                        Get in touch
                    </Button>
                    <Text style={{ color: 'grey', marginTop: 5 }}>
                        Business inqueries only*
                    </Text>
                </View>

                <View style={{
                    marginTop: 75,
                    marginBottom: 30,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 32,
                            marginBottom: 10,
                        }}>
                            MidPoint.
                        </Text>
                        <Text style={{ color: '#fff' }}>
                            © Copyright {new Date().getFullYear()} MidPoint
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: isMobile ? '100%' : 265,
                        justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Support</Text>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Careers</Text>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Terms of use</Text>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Privacy Policy</Text>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Disclaimer</Text>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>Press</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#fff', marginBottom: 5 }}>contact@midpoint.dj</Text>
                            <Text style={{ color: '#fff', marginBottom: 10 }}>011 921 791</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TwitterIcon style={{ color: '#fff', fontSize: 20, marginRight: 10 }} />
                                <FacebookIcon style={{ color: '#fff', fontSize: 20, marginRight: 10 }} />
                                <InstagramIcon style={{ color: '#fff', fontSize: 20, marginRight: 10 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}