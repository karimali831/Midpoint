import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetOnConfirmLoadingAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { Modal } from '@mui/material';

interface IOwnProps {
    headerText: string;
    children: ReactElement;
    disabled?: boolean;
    submitText?: string;
    onSubmit: () => void;
    onClose: () => void;
}

const PopupModal = (props: IOwnProps) => {
    const { modalOnConfirmLoading } = useSelector(getAppState);
    const dispatch = useDispatch();

    const { children, headerText, disabled, submitText, onClose, onSubmit } =
        props;

    const confirmed = () => {
        dispatch(SetOnConfirmLoadingAction(true));
        onSubmit();
    };

    return (
        <Modal 
            open={true} 
            onClose={onClose}
        >
            {children}
        </Modal>
    );
};

export default PopupModal;
