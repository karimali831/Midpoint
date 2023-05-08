import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getStreamState } from '../../../state/contexts/stream/Selectors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { ChatMessage } from './ChatMessage';
import { IMessage } from '../../../interface/IMessage';
import toast from 'react-hot-toast';
import { SendMessageAction} from '../../../state/contexts/stream/Actions';
import { uuidv4 } from '../../../utils/Utils';

export const StreamChat = () => {
    const [message, setMessage] = useState<string>('')
    const chatWindowRef = useRef<HTMLDivElement>(null)
    
    const dispatch = useDispatch()

    const { user } = useSelector(getUserState)

    const {
        userConnection,
        channelData,
        selectedHostRoom
    } = useSelector(getStreamState)


    if (user == null || selectedHostRoom == null) {
        return null;
    }

    const sendMessage = async () => {
        if (!userConnection?.hubConnection || message === "") {
            return
        }
        const date = new Date()

        chatWindowRef.current?.scrollTo(0, 0)
        setMessage('')
        
        const messageDto: IMessage = {
            id: uuidv4(),
            userId: userConnection.userId,
            message,
            createdAt: `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
            isBot: false,
            name: userConnection.displayName,
            roomId: selectedHostRoom.id
        }

        await userConnection.hubConnection.invoke("SendMessage", messageDto)
            .then(() => dispatch(SendMessageAction({ message: messageDto, roomId: userConnection.roomId })))
            .catch(err => {
                console.error(err);
                toast.error(err.message)
            });
    }
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendMessage()
        }
    }

    const data = channelData.filter(x => x.roomId === userConnection?.roomId)[0]
    const messages = data?.messages.filter(x => !x.isBot) ?? []

    return (
        <div className='align-11'>
            <div ref={chatWindowRef} className='chat-window'>
                {
                    messages.length > 0 ? messages.reverse().map(message => 
                        <ChatMessage message={message} key={message.id} />
                    )

                    :
                        <div className='chat-info center'>
                            <span className='secondary'>
                                Keep your team updated during the stream.
                            </span>
                        </div> 
                }
            </div>

            <div className='input-container'>
           
                    <input 
                        className='chat-input' 
                        placeholder='Type your message...' 
                        onChange={(e => setMessage(e.target.value))}
                        onKeyPress={handleKeyPress}
                        value={message}
                    />
                    
                    <div className='send-arrow' onClick={() => sendMessage()}   >
                        <ArrowForwardIcon className='fs20' style={{ fontSize: 20 }} />
                    </div>
       
            </div>
        </div>
    );
};
