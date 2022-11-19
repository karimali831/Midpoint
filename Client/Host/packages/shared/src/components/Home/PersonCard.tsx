import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import { Text, View } from 'react-native';
import images from '../../assets/images/index.web';

interface IOwnProps {
    name: string
    title: string
}

export const PersonCard: React.FC<IOwnProps> = (props) => {
    return (
        <View style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: 220,
            marginRight: 20,
            borderRadius: 5
        }}>
            <img src={images.adamProfilePic} style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
                boxShadow: '7px 8px #195DC4'
            }} />

            <Text style={{ color: '#fff', fontWeight: "700", marginTop: 15 }}>{props.name}</Text>
            <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, marginTop: 5 }}>
                {props.title}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <TwitterIcon style={{ fontSize: 20, marginRight: 10 }} />
                <FacebookIcon style={{ fontSize: 20, marginRight: 10 }} />
                <InstagramIcon style={{ fontSize: 20, marginRight: 10 }} />
                <YouTubeIcon style={{ fontSize: 20, marginRight: 10 }} />
            </View>
        </View>
    )
}