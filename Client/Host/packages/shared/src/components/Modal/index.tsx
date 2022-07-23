import { Button, Modal } from 'native-base';
import { ReactElement } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SetOnConfirmLoadingAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';

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
        <Modal isOpen={true} onClose={onClose}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>
                    <Text
                        style={{
                            fontSize: 18,
                        }}
                    >
                        {headerText}
                    </Text>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button
                            variant={'ghost'}
                            size={10}
                            onPress={onClose}
                            borderWidth={1}
                            style={{ width: 100 }}
                        >
                            <Text
                                style={{
                                    color: '#00a884',
                                    fontWeight: '500',
                                }}
                            >
                                CANCEL
                            </Text>
                        </Button>
                        <Button
                            onPress={confirmed}
                            size={10}
                            disabled={disabled}
                            backgroundColor="#00a884"
                            style={{
                                width: 100,
                            }}
                        >
                            <Text style={{ fontWeight: '500' }}>
                                {modalOnConfirmLoading ? (
                                    <ActivityIndicator color="white" />
                                ) : (
                                    submitText ?? 'OK'
                                )}
                            </Text>
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
};

export default PopupModal;
