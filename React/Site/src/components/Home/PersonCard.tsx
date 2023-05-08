import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import images from '../../assets/images';

interface IOwnProps {
    name: string
    title: string
}

export const PersonCard: React.FC<IOwnProps> = (props) => {
    return (
        <div className='person-container'>
            <img src={images.adamProfilePic} className='person-img' />

            <span className='person-name'>
                {props.name}
            </span>
            <span className='secondary fs12 mt5'>
                {props.title}
            </span>
            <div className='align-2 mt10'>
                <TwitterIcon style={{ fontSize: 20, marginRight: 10 }} />
                <FacebookIcon style={{ fontSize: 20, marginRight: 10 }} />
                <InstagramIcon style={{ fontSize: 20, marginRight: 10 }} />
                <YouTubeIcon style={{ fontSize: 20, marginRight: 10 }} />
            </div>
        </div>
    )
}