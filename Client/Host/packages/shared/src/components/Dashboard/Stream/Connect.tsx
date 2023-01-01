import { HubConnectionState } from '@microsoft/signalr';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { motion } from 'framer-motion';
import { Button} from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSection } from '../../../enum/DashboardSection';
import { IUserConnection } from '../../../interface/IUserConnection';
import { FormValidation } from '../../../screens/Login';
import { SetDashboardSection } from '../../../state/contexts/app/Actions';
import { SetUserConnectionAction } from '../../../state/contexts/stream/Actions';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { newHubConnection } from '../../../utils/HubHelper';
import { joinLink } from '../../../utils/UrlHelper';
import { uuidv4 } from '../../../utils/Utils';
import { FormInput } from '../../Form/input';


export const Connect = () => {
    const { user } = useSelector(getUserState);

    if (user == null)
        return null

    const dispatch = useDispatch();

    const [channelName, setChannelName] = useState<FormValidation>({
        value: '',
        urlValidator: true,
    });
    const [loading, setLoading] = useState<boolean>(false);


    const join = () => {
        const userConnection: IUserConnection = {
            hubConnection: newHubConnection(),
            connectionState: HubConnectionState.Disconnected,
            showConnectionStatus: false,
            userId: user.id,
            displayName: user.displayName,
            roomId: uuidv4(),
            roomName: channelName.value,
        };

        dispatch(SetUserConnectionAction(userConnection));
    };

    const onSubmit = () => {
        setLoading(true);
        join();
    };

    return (
        <div>
            <motion.form
                initial={{ width: 0 }}
                animate={{ width: 400 }}
                exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
                className="midpoint-form"
                style={{
                    margin: '0 auto',
                    width: 380,
                    marginTop: 140,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <span style={{ fontSize: 40 }}>Connect MidPoint.</span>
                    <span
                        style={{
                            marginTop: 5,
                            color: 'rgba(255, 255, 255, 0.6)',
                        }}
                    >
                        Stream with your team. Set the standard.
                    </span>
                </div>

                <FormInput
                    onChange={(text) =>
                        setChannelName({
                            ...channelName,
                            value: text,
                        })
                    }
                    validation={channelName}
                    placeholder={`${joinLink('room-id')}`}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <div
                        onClick={() => dispatch(SetDashboardSection(DashboardSection.Overview))}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <ArrowBackIcon />
                        <span style={{ marginLeft: 10 }}>Go back</span>
                    </div>
                    <Button
                        disabled={channelName.value === ''}
                        onPress={onSubmit}
                        style={{
                            borderRadius: 25,
                            backgroundColor:
                                channelName.value === '' ? 'grey' : '#195DC4',
                        }}
                        colorScheme="cyan"
                        isLoading={loading}
                        isLoadingText="Initialising..."
                        startIcon={<PeopleAltOutlinedIcon />}
                    >
                        Join MidPoint.
                    </Button>
                </div>
            </motion.form>
        </div>
    );
};
