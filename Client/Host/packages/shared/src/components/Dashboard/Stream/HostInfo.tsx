import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import { MainButton } from '../../Buttons/MainButton';
import EditIcon from '@mui/icons-material/Edit';
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <MainButton 
                    text="Info" 
                    width={80} 
                    onClick={() => setShowUsers(false)}
                    outline={showUsers}
                />
                <MainButton
                    onClick={() => setShowUsers(true)}
                    text="Online Now"
                    outline={!showUsers}
                    width={80}
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
                    onlineUsers.map(uc => {
                        return (
                            <div key={uc.userId} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
                        <span style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)'}}>
                            MidPoint ID: {selectedHostRoom.id.split('-')[4]}
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                            <span style={{ marginRight: 10, fontSize: 14, color: 'rgba(255, 255, 255, 0.6)'}}>
                                {selectedHostRoom.name}
                            </span>
                            <EditIcon style={{ fontSize: 14 }} />
                        </div>
                        {data?.messages.length > 0 && data.messages
                            .filter(x => x.isBot)
                            .reverse()
                            .map(message => 
                                
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <PermIdentityIcon style={{  marginRight: 15 }} />
                                    <span style={{ marginRight: 15 }}>{message.message}</span>
                                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>
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
