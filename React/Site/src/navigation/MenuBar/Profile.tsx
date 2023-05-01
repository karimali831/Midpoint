import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import { useSelector } from "react-redux";
import images from "../../assets/images";
import { MainButton } from "../../components/Buttons/MainButton";
import { getUserState } from "../../state/contexts/user/Selectors";
import { auth } from '../../config/firebase';

export const NavbarProfile = () => {

    const { user } = useSelector(getUserState)
    React.useEffect(() => { }, [])

    if (user == null)
        return null

    return (
        <div style={{
            padding: 10,
            marginRight: 5
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <img src={images.adamProfilePic} style={{
                    width: 60,
                    height: 60,
                    objectFit: 'cover',
                    borderRadius: 50,
                    marginRight: 10
                }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 20, marginBottom: 10 }}>{user.displayName}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{user.email}</span>
                </div>
            </div>
            <div style={{ margin: '10px 0', borderBottom: '1px solid grey' }} />
            <MainButton
                icon={<LogoutIcon />}
                text='Sign out'
                onClick={() => auth.signOut()}
            />
        </div>
    )
}