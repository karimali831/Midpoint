import React from 'react';
import { Text, View } from 'react-native';


interface IOwnProps {
    icon: React.ReactElement
    text: string
    desc: string
}

export const FeatureCard: React.FC<IOwnProps> = (props) => {
    return (
        <View style={{ alignItems: 'center', flexDirection: 'column', width: 220 }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#195DC4',
                width: 230,
                borderRadius: 5,
                height: 45,
                marginBottom: 10,
                boxShadow: 'rgb(0 0 0) 0px 5px 15px'
            }}>
                <View style={{ marginLeft: 10 }}>{props.icon}</View>
                <Text style={{ fontWeight: "600", fontSize: 15, marginLeft: 10, color: '#fff' }}>
                    {props.text}
                </Text>
            </div>
            <Text style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 10, marginBottom: 25, fontSize: 12 }}>
                {props.desc}
            </Text>
        </View>
    )
}