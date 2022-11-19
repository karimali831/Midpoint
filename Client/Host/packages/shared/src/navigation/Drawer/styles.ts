import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#212121',
        padding: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        backgroundColor: '#cacaca',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    nameTxt: {
        color: 'white',
        fontSize: 24,
    },
    emailTxt: {
        color: 'lightgrey',
    },
    menuItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#919191',
        borderTopWidth: 1,
        borderTopColor: '#919191',
        paddingVertical: 5,
        marginVertical: 10,
    },
    menuItemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    menuItemTxt: {
        color: '#dddddd',
        paddingVertical: 5,
    },
    logoutTxt: {
        padding: 5,
        paddingLeft: 20,
    },
    menuIcon: {
        marginRight: 10,
    },
});

export default styles;
