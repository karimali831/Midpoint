import React from "react"
import images from "../../assets/images/index.web"
import { isMobile } from "../../Platform"

export const Locations = () => {
    React.useEffect(() => { })

    return (
        <div style={{
            marginTop: 50,
            maxWidth: 1000,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{
                fontSize: 32,
                marginBottom: 30,
            }}>
                Current locations served
            </span>
            {
                !isMobile ?
                    <img src={images.mapImg} width="100%" height="100%" />
                    :
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: '#eee' }}>Europe</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Frankfurt (Germany)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Ireland</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>London (United Kingdom)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Paris (France)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Stockholm (Sweden)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Milan (Italy)</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>USA East</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>North Virginia</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Ohio</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>USA West</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Northern California</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Oregon</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>South America</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>São Paulo (Brazil)</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>Canada</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Central Canada</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: '#eee' }}>Asia Pacific</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Hong Kong</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Mumbai (India)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Osaka (Japan)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Seoul (South Korea)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Singapore</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Sydney (Australia)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Jakarta (Indonesia)</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Tokyo (Japan)</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>Africa</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Cape Town (South Africa)</span>

                            <span style={{ color: '#eee', marginTop: 20 }}>Middle East</span>
                            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>Bahrain</span>
                        </div>
                    </div>
            }
        </div>
    )
}