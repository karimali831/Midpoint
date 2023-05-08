import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import PaymentOutlined from '@mui/icons-material/PaymentOutlined'
import TranslateOutlined from '@mui/icons-material/TranslateOutlined'
import { motion } from 'framer-motion'
import './styles.css'
import { useDispatch } from 'react-redux'
import { Setting } from '../../../enum/DashboardSection'
import { SetSettingAction } from '../../../state/contexts/app/Actions'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAppState } from '../../../state/contexts/app/Selectors'
import { PaymentHistory } from './PaymentHistory'

export const Settings = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => setSetting(null)
    }, [])

    const setSetting = (setting: Setting | null) => {
        dispatch(SetSettingAction(setting))
    }

    const { setting } = useSelector(getAppState)

    if (setting == Setting.Payments) {
        return <PaymentHistory />
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <span className="fs28">Settings</span>
            <div
                className="tab-item"
                onClick={() => setSetting(Setting.Account)}
            >
                <AccountCircleOutlined />
                <span className="ml10 fs14">Account</span>
            </div>

            <div
                className="tab-item"
                onClick={() => setSetting(Setting.Security)}
            >
                <LockOutlined />
                <span className="ml10 fs14">Password & Security</span>
            </div>

            <div
                className="tab-item"
                onClick={() => setSetting(Setting.Payments)}
            >
                <PaymentOutlined />
                <span className="ml10 fs14">Payment history</span>
            </div>

            <div
                className="tab-item"
                onClick={() => setSetting(Setting.Language)}
            >
                <TranslateOutlined />
                <span className="ml10 fs14">Language</span>
            </div>
        </motion.div>
    )
}
