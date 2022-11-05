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
                backgroundColor: '#fff',
                width: 230,
                borderRadius: 5,
                height: 45,
                marginBottom: 10,
                marginRight: 0,
                boxShadow: '7px 8px #195DC4'
            }}>
                <View style={{ marginLeft: 10 }}>{props.icon}</View>
                <Text style={{ fontWeight: "700", fontSize: 15, marginLeft: 5 }}>
                    {props.text}
                </Text>
            </div>
            <Text style={{ color: 'darkgrey', marginTop: 10, marginBottom: 25, fontSize: 12 }}>
                {props.desc}
            </Text>
        </View>
    )
}