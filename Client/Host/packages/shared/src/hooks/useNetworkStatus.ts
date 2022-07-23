import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            if (state.isConnected) {
                setConnected(true);
            }
        });

        return () => unsubscribe();
    }, []);

    return connected;
};

export default useNetworkStatus;
