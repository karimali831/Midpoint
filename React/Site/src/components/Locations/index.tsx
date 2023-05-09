import images from '../../assets/images'
import { isMobile } from 'react-device-detect'
import './styles.css'

export const Locations = () => {
    return (
        <div className="locations align-3 separate-margin">
            <span className="headline">Current locations served</span>
            {!isMobile ? (
                <img src={images.mapImg} className="locations-img" />
            ) : (
                <div className="align-5">
                    <div className="align-4">
                        <span className="tertiary">Europe</span>
                        <span className="secondary fs12">
                            Frankfurt (Germany)
                        </span>
                        <span className="secondary fs12">Ireland</span>
                        <span className="secondary fs12">
                            London (United Kingdom)
                        </span>
                        <span className="secondary fs12">Paris (France)</span>
                        <span className="secondary fs12">
                            Stockholm (Sweden)
                        </span>
                        <span className="secondary fs12">Milan (Italy)</span>

                        <span className="tertiary continents">USA East</span>
                        <span className="secondary fs12">North Virginia</span>
                        <span className="secondary fs12">Ohio</span>

                        <span className="tertiary continents">USA West</span>
                        <span className="secondary fs12">
                            Northern California
                        </span>
                        <span className="secondary fs12">Oregon</span>

                        <span className="tertiary continents">
                            South America
                        </span>
                        <span className="secondary fs12">
                            São Paulo (Brazil)
                        </span>

                        <span className="tertiary continents">Canada</span>
                        <span className="secondary fs12">Central Canada</span>
                    </div>
                    <div className="align-4">
                        <span className="tertiary">Asia Pacific</span>
                        <span className="secondary fs12">Hong Kong</span>
                        <span className="secondary fs12">Mumbai (India)</span>
                        <span className="secondary fs12">Osaka (Japan)</span>
                        <span className="secondary fs12">
                            Seoul (South Korea)
                        </span>
                        <span className="secondary fs12">Singapore</span>
                        <span className="secondary fs12">
                            Sydney (Australia)
                        </span>
                        <span className="secondary fs12">
                            Jakarta (Indonesia)
                        </span>
                        <span className="secondary fs12">Tokyo (Japan)</span>

                        <span className="tertiary continents">Africa</span>
                        <span className="secondary fs12">
                            Cape Town (South Africa)
                        </span>

                        <span className="tertiary continents">Middle East</span>
                        <span className="secondary fs12">Bahrain</span>
                    </div>
                </div>
            )}
        </div>
    )
}
