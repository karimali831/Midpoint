import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { ReactElement } from 'react';

interface IOwnProps {
    title: string
    outlined: boolean
    icon: ReactElement
    children: ReactElement
}

export const DashboardCard: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => { }, [])

    return (
        <div style={{
            width: 270,
            marginRight: 30,
            marginBottom: 20,
            borderRadius: 10
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                background: '#154C9F',
                height: 25,
                padding: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}>
                {props.icon}
                <div style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span style={{ marginLeft: 10 }}>{props.title}</span>
                    <InfoOutlinedIcon style={{ fontSize: 16 }} />
                </div>
            </div>
            <div style={{
                background: props.outlined ? 'transparent' : '#195DC4',
                border: '1px solid #195DC4',
                display: 'flex',
                padding: 15,
                height: 50,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            }}>
                {props.children}
            </div>
        </div>
    )
}