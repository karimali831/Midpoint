import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import { isMobile } from "react-device-detect";

export const Footer = () => {

    React.useEffect(() => { })

    return (
        <div style={{ margin: '50px 0' }}>
            <div style={{
                display: 'flex',
                width: isMobile ? '90%' : '70%',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0 auto'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
                    <span style={{
                        fontSize: 28,
                        marginBottom: 5,
                    }}>
                        MidPoint.
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14 }}>
                        © Copyright {new Date().getFullYear()} MidPoint
                    </span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: isMobile ? '100%' : 300,
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Support</span>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Careers</span>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Terms of use</span>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Privacy Policy</span>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Disclaimer</span>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>Press</span>
                    </div>
                    <div style={{ flexDirection: 'column' }}>
                        <span style={{ marginBottom: 5, fontSize: 14 }}>contact@midpoint.dj</span>
                        <div style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TwitterIcon style={{ fontSize: 20, marginRight: 10 }} />
                            <FacebookIcon style={{ fontSize: 20, marginRight: 10 }} />
                            <InstagramIcon style={{ fontSize: 20, marginRight: 10 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}