import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PaymentOutlined from '@mui/icons-material/PaymentOutlined';
import TranslateOutlined from '@mui/icons-material/TranslateOutlined';
import { motion } from 'framer-motion';
import React from 'react';

export const Settings = () => {
    React.useEffect(() => {}, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <span style={{ fontSize: 28 }}>
                Settings
            </span>
            <div
                style={{
                    width: 250,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: 5,
                    marginTop: 20
                }}
            >
                <AccountCircleOutlined />
                <span style={{ marginLeft: 10, fontSize: 14 }}>Account</span>
            </div>

            <div
                style={{
                    width: 250,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: 5,
                    margin: '20px 0',
                }}
            >
                <LockOutlined />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                    Password & Security
                </span>
            </div>

            <div
                style={{
                    width: 250,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: 5,
                    margin: '20px 0',
                }}
            >
                <PaymentOutlined />
                <span style={{ marginLeft: 10, fontSize: 14 }}>
                    Payment Method
                </span>
            </div>

            <div
                style={{
                    width: 250,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: 5,
                    margin: '20px 0',
                }}
            >
                <TranslateOutlined />
                <span style={{ marginLeft: 10, fontSize: 14 }}>Language</span>
            </div>
        </motion.div>
    )
};
