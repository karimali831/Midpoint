import React from "react"
import images from "../../../assets/images"
import { IMessage } from "../../../interface/IMessage"

interface IOwnProps {
    message: IMessage
}

export const ChatMessage: React.FC<IOwnProps> = (props) => {

    React.useEffect(() => {}, [])

    const {
        message,
        createdAt,
        name,
        user
    } = props.message

    const date = new Date(createdAt)

    // console.log(user)


    return (
        <div style={{ marginTop: 15, display: 'flex', flexDirection: 'row'}}>
            <div style={{ maxWidth: 60 }}>
                <img src={images.adamProfilePic} style={{
                    width: 38,
                    height: 38,
                    objectFit: 'cover',
                    borderRadius: 50,
                    marginRight: 15
                }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'  }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <span style={{ marginRight: 15 }}>{user?.displayName ?? name}</span>
                    <span className='secondary fs12'>
                        {createdAt}
                    </span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 5 }}>
                    {message}
                </span>
            </div>
        </div>
    )
}