import {
    Alert,
    Box,
    CloseIcon,
    HStack,
    IconButton,
    Modal,
    Text,
    View,
    VStack
} from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isNativeDevice } from '../../Platform';
import { HideAlertAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import styles from './styles';

const AlertModal = () => {
    const { alertModal, showAlert } = useSelector(getAppState);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (alertModal.autoHide) {
            const timeoutId = setTimeout(() => {
                if (!showAlert) return;

                dispatch(HideAlertAction);
            }, alertModal.duration);

            return () => clearTimeout(timeoutId);
        }
    }, [alertModal, showAlert]);

    const animationByPosition = (): { in: string; out: string } => {
        switch (alertModal.position) {
            case 'topleft':
                return {
                    in: 'slideInDown',
                    out: 'slideInUp',
                };
            case 'topcenter':
                return {
                    in: 'slideInDown',
                    out: 'slideInUp',
                };
            case 'topright':
                return {
                    in: 'slideInDown',
                    out: 'slideInUp',
                };
            case 'centerleft':
                return {
                    in: 'slideInLeft',
                    out: 'slideOutRight',
                };
            case 'center':
                return {
                    in: 'slideInDown',
                    out: 'slideInUp',
                };
            case 'centerright':
                return {
                    in: 'slideInRight',
                    out: 'slideOutLeft',
                };
            case 'bottomleft':
                return {
                    in: 'slideInLeft',
                    out: 'slideOutRight',
                };
            case 'bottomcenter':
                return {
                    in: 'slideInUp',
                    out: 'slideInDown',
                };
            case 'bottomright':
                return {
                    in: 'slideInUp',
                    out: 'slideInDown',
                };
            default:
                return {
                    in: 'slideInDown',
                    out: 'slideInUp',
                };
        }
    };

    const stylesByPosition = () => {
        if (isNativeDevice) {
            return styles.nativePosition;
        }

        switch (alertModal.position) {
            case 'topleft':
                return styles.topLeft;
            case 'topcenter':
                return styles.topCenter;
            case 'topright':
                return styles.topRight;
            case 'centerleft':
                return styles.leftCenter;
            case 'center':
                return styles.center;
            case 'centerright':
                return styles.rightCenter;
            case 'bottomleft':
                return styles.bottomLeft;
            case 'bottomcenter':
                return styles.bottomCenter;
            case 'bottomright':
                return styles.bottomRight;
            default:
                return styles.center;
        }
    };

    if (!showAlert) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Modal
                isOpen={showAlert}
                onClose={() => dispatch(HideAlertAction)}
                animationPreset={'fade'}
                padding={isNativeDevice ? 0 : 1}
                overlayVisible={alertModal.blurBackground}
                style={[
                    stylesByPosition(), {
                        backgroundColor: alertModal.blurBackground ?
                            'rgba(52, 52, 52, 0.7)' : 'transparent',
                    }
                ]}
            >
                <Alert
                    w="100%"
                    maxW={isNativeDevice ? '100%' : 400}
                    status={alertModal.status}
                    colorScheme={alertModal.status}
                >
                    <VStack
                        space={2}
                        flexShrink={1}
                        w="100%"
                        style={{
                            marginTop: isNativeDevice ? 35 : 0,
                        }}
                    >
                        <HStack
                            flexShrink={1}
                            space={2}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <HStack
                                flexShrink={1}
                                space={2}
                                alignItems="center"
                            >
                                <Alert.Icon />
                                <Text
                                    fontSize="md"
                                    fontWeight="medium"
                                    color="coolGray.800"
                                >
                                    {alertModal.title}
                                </Text>
                            </HStack>
                            <IconButton
                                onPress={() => dispatch(HideAlertAction)}
                                variant="unstyled"
                                _focus={{
                                    borderWidth: 0,
                                }}
                                icon={
                                    <CloseIcon size="3" color="coolGray.600" />
                                }
                            />
                        </HStack>
                        {alertModal.message && (
                            <Box
                                pl="6"
                                _text={{
                                    color: 'coolGray.600',
                                }}
                            >
                                {alertModal.message}
                            </Box>
                        )}
                    </VStack>
                </Alert>
            </Modal>
        </View>
    );
};

export default AlertModal;
