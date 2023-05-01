import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSection } from '../../../enum/DashboardSection';
import { SetDashboardSection } from '../../../state/contexts/app/Actions';
import { SetMidPointJoinIdAction} from '../../../state/contexts/stream/Actions';
import { getUserState } from '../../../state/contexts/user/Selectors';
import { FormInput } from '../../Form/input';
import { Button } from '@mui/material';
import { FormValidation } from '../../Login';


export const Connect = () => {
    const { user } = useSelector(getUserState);

    if (user == null)
        return null

    const dispatch = useDispatch();

    const [midPointJoinId, setMidPointJoinId] = useState<FormValidation>({
        value: '',
        minCharsRequired: 36,
        maxCharsRequired: 36
    });
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = () => {
        setLoading(true);
        dispatch(SetMidPointJoinIdAction(midPointJoinId.value))
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
                        setMidPointJoinId({
                            ...midPointJoinId,
                            value: text,
                        })
                    }
                    type={"password"}
                    validation={midPointJoinId}
                    placeholder={`Enter MidPoint. join ID`}
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
                        disabled={midPointJoinId.value === ''}
                        onClick={onSubmit}
                        style={{
                            borderRadius: 25,
                            backgroundColor:
                                midPointJoinId.value === '' ? 'grey' : '#195DC4',
                        }}
                        // isLoading={loading}
                        // isLoadingText="Initialising..."
                        startIcon={<PeopleAltOutlinedIcon />}
                    >
                        Join MidPoint.
                    </Button>
                </div>
            </motion.form>
        </div>
    );
};
