import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    nativePosition: {
        justifyContent: 'flex-start',
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    topLeft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    topCenter: {
        justifyContent: 'flex-start',
        paddingTop: 60
    },
    topRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    leftCenter: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    center: {},
    rightCenter: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    bottomLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    bottomCenter: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    bottomRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
});

export default styles;
