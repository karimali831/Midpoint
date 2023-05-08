import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import { MainButton } from '../../Buttons/MainButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import images from '../../../assets/images';

export const StreamHostInfo = () => {
    React.useEffect(() => {}, []);

    const [showUsers, setShowUsers] = useState<boolean>(false)

    const { selectedHostRoom, onlineUsers } = useSelector(getStreamState)

    const { 
        userConnection, 
        channelData 
    } = useSelector(getStreamState);

    if (!selectedHostRoom || userConnection == null)
        return null


    const data = channelData.filter(
        (x) => x.roomId === userConnection.roomId
    )[0];

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className='align-2'>
                <div className='mr5'>
                    <MainButton 
                        text="Info" 
                        secondary={true}
                        onClick={() => setShowUsers(false)}
                        outline={showUsers}
                    />
                </div>
                <MainButton
                    onClick={() => setShowUsers(true)}
                    text={`${onlineUsers.length} Connected`}
                    outline={!showUsers}
                    secondary={true}
                />
            </div>
            <hr
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    margin: '15px 0',
                }}
            />

            <div style={{  overflowY: 'auto', maxHeight: 200 }}>

                {showUsers ? 
                    onlineUsers.map((uc, idx) => {
                        return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img src={images.adamProfilePic} style={{
                                    width: 38,
                                    height: 38,
                                    objectFit: 'cover',
                                    borderRadius: 50,
                                    marginRight: 15
                                }} />
                                 <span>{uc.displayName}</span> 
                            </div>
                        )
                    })
                :
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        <span style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', marginBottom: 15}}>
                            MidPoint ID: {selectedHostRoom.id.split('-')[4]}
                            {/* MidPoint Id: {selectedHostRoom.id} */}
                        </span>
             
                        {data?.messages.length > 0 && data.messages
                            .filter(x => x.isBot)
                            .reverse()
                            .map(message => 
                                
                                <div key={message.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <PermIdentityIcon style={{  marginRight: 15 }} />
                                    <span style={{ marginRight: 15 }}>{message.message}</span>
                                    <span className='secondary fs12'>
                                        {message.createdAt}
                                    </span>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    );
};
