import { useEffect, useState } from 'react'

const useNetworkStatus = () => {
    const [connected, setConnected] = useState(navigator.onLine)

    // useEffect(() => {
    //      const networkState = async () => {
    //         await Network.getNetworkStateAsync()
    //             .then((state) => {
    //                 if (state.isConnected && state.isInternetReachable)   {
    //                     setConnected(true)
    //                 }
    //                 else {
    //                     setConnected(false)
    //
    //             })
    //     }

    //     networkState()
    // }, [])

    // const setStatus = (status: boolean) => {
    //     setConnected(status);
    // };

    useEffect(() => {
        window.addEventListener('online', () => setConnected(true))
        window.addEventListener('offline', () => setConnected(false))

        return () => {
            window.removeEventListener('online', () => setConnected(true))
            window.removeEventListener('offline', () => setConnected(false))
        }
    }, [])

    return connected
}

export default useNetworkStatus
