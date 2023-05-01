import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { ReactElement, useState } from 'react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { StreamCardType } from '../../../enum/StreamCardType';

interface IOwnProps {
    title: string;
    height: number
    size: 'small' | 'large';
    icon: ReactElement;
    children: ReactElement;
    maximiseCard: StreamCardType | null
    onOpenInFull: () => void
}


export const StreamCard: React.FC<IOwnProps> = (props) => {
    const [width, setWidth] = useState<string>(props.size == 'large' ? '65%' : '35%')


    React.useEffect(() => {


        if (props.maximiseCard) {
            setWidth('100%')
        }
        else{
            setWidth(props.size == 'large' ? '65%' : '35%')
        }
    }, [props.maximiseCard]);

    return (
        <div
            className='stream-card'
            style={{
                width: width
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
                    <div onClick={props.onOpenInFull} style={{ cursor: 'pointer' }}>
                        {/* <InfoOutlinedIcon style={{ fontSize: 16, marginRight: 10 }} /> */}
                        <OpenInFullIcon style={{ fontSize: 16 }} />
                    </div>
                </div>
            </div>
            <div
                style={{
                    background: 'rgba(25, 93, 196, 0.15)',
                    display: 'flex',
                    padding: 15,
                    height: props.height,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}
            >
                {props.children}
            </div>
        </div>
    );
};
