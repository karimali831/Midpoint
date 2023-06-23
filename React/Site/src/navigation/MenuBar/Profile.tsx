import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import images from '../../assets/images'
import { MainButton } from '../../components/Buttons/MainButton'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import { getUserState } from '../../state/contexts/user/Selectors'
import { auth } from '../../config/firebase'
import { getAppState } from '../../state/contexts/app/Selectors'
import { DashboardSection } from '../../enum/DashboardSection'
import { useDispatch } from 'react-redux'
import {
    SetDashboardSection,
    ShowPageAction
} from '../../state/contexts/app/Actions'
import { Page } from '../../enum/Page'

export const NavbarProfile = () => {
    const { user } = useSelector(getUserState)

    if (user == null) return null

    const { dashboardSection, page } = useSelector(getAppState)
    const dispatch = useDispatch()

    return (
        <div className="p20">
            <div className="align-2">
                <img
                    src={images.adamProfilePic}
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        borderRadius: 50,
                        marginRight: 10
                    }}
                />
                <div className="align-4">
                    <span className="fs20 mb10">{user.displayName}</span>
                    <span className="secondary">{user.email}</span>
                </div>
            </div>
            <hr className="b4 mt10 mb20" />
            <div
                className="align-2 mt20 link"
                onClick={() =>
                    page !== Page.Dashboard &&
                    dispatch(ShowPageAction(Page.Dashboard))
                }
            >
                <DashboardOutlinedIcon />
                <span className="ml10 fs14">Dashboard</span>
            </div>
            <div
                className="align-2 mt10 mb20 link"
                onClick={() =>
                    page !== Page.Home && dispatch(ShowPageAction(Page.Home))
                }
            >
                <LanguageIcon />
                <span className="ml10 fs14">Website</span>
            </div>
            <div className="mt10 mb10">
                <MainButton
                    icon={<PeopleAltOutlinedIcon style={{ fontSize: 16 }} />}
                    small={true}
                    outline={true}
                    text="Connect MidPoint."
                    disabled={
                        dashboardSection === DashboardSection.Connect &&
                        page == Page.Dashboard
                    }
                    onClick={() => {
                        page !== Page.Dashboard &&
                            dispatch(ShowPageAction(Page.Dashboard))

                        dashboardSection !== DashboardSection.Connect &&
                            dispatch(
                                SetDashboardSection(DashboardSection.Connect)
                            )
                    }}
                />
            </div>
            <div className="align-6 mt20 link" onClick={() => auth.signOut()}>
                <LogoutIcon />
                <span className="ml10">Sign out</span>
            </div>
        </div>
    )
}
