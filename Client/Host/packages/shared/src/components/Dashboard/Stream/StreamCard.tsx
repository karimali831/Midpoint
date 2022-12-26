import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { ReactElement } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

interface IOwnProps {
    title: string;
    size: 'small' | 'large';
    icon: ReactElement;
    children: ReactElement;
}

export const StreamCard: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => {}, []);

    return (
        <div
            className='stream-card'
            style={{
                width: props.size == 'large' ? '65%' : '35%'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#154C9F',
                    height: 25,
                    padding: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            >
                {props.icon}
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <span style={{ marginLeft: 10 }}>{props.title}</span>
                    <div>
                        <InfoOutlinedIcon style={{ fontSize: 16, marginRight: 10 }} />
                        <OpenInFullIcon style={{ fontSize: 16 }} />
                    </div>
                </div>
            </div>
            <div
                style={{
                    background: 'rgba(25, 93, 196, 0.15)',
                    display: 'flex',
                    padding: 15,
                    maxHeight: 550,
                    minHeight: 280,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}
            >
                {props.children}
            </div>
        </div>
    );
};
