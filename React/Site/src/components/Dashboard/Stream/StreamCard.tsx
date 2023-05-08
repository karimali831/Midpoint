import React, { ReactElement, useState } from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { StreamCardType } from '../../../enum/StreamCardType'
import { SecondaryButton } from '../../Buttons/SecondaryButton'

interface IOwnProps {
    title: string
    height: number
    size: 'small' | 'large'
    icon: ReactElement
    children: ReactElement
    maximiseCard: StreamCardType | null
    webRtcCard?: boolean
    onOpenInFull: () => void
}

export const StreamCard: React.FC<IOwnProps> = (props) => {
    const [width, setWidth] = useState<string>(
        props.size == 'large' ? '65%' : '35%'
    )

    React.useEffect(() => {
        if (props.maximiseCard) {
            setWidth('100%')
        } else {
            setWidth(props.size == 'large' ? '65%' : '35%')
        }
    }, [props.maximiseCard])

    return (
        <div className="stream-card-container" style={{ width }}>
            <div className="align-1 stream-card">
                <div className="align-1">
                    {props.icon}
                    <span className="ml10">{props.title}</span>
                </div>
                {props.webRtcCard ? (
                    <SecondaryButton
                        text="Enlarge"
                        icon={<FullscreenIcon />}
                        onClick={props.onOpenInFull}
                    />
                ) : (
                    <div onClick={props.onOpenInFull} className="align-8 link">
                        <OpenInFullIcon style={{ fontSize: 16 }} />
                    </div>
                )}
            </div>
            <div
                className="stream-card-content"
                style={{ height: props.height }}
            >
                {props.children}
            </div>
        </div>
    )
}
