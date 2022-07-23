import { isMobile as mobileChk } from 'react-device-detect';
import { Platform } from 'react-native';
export const isMobile =
    mobileChk || Platform.OS === 'android' || Platform.OS === 'ios';

export const isNativeDevice =
    Platform.OS === 'android' || Platform.OS === 'ios'