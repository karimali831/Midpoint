import { motion } from 'framer-motion';
import React from "react";

export const Settings = () => {
    React.useEffect(() => { }, [])

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div style={{ marginTop: 150, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: 28 }}>Settings</span>
                <span style={{ fontSize: 12, marginTop: 5, color: 'rgba(255, 255, 255, 0.6)' }}>
                    Coming soon
                </span>
            </div>
        </motion.div>
    )
}