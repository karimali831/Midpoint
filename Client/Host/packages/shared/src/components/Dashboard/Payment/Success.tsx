import { Button } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { useDispatch } from "react-redux"
import { DashboardSection } from "../../../enum/DashboardSection"
import { SetDashboardSection } from "../../../state/contexts/app/Actions"
import { MainButton } from "../../Buttons/MainButton"

interface IOwnProps {

}


export const PaymentSuccess: React.FC<IOwnProps> = () => {
    React.useEffect(() => { }, [])
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
             <span style={{ fontSize: 28 }}>
                Payment successful
            </span>
            <div style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 10, marginBottom: 20, fontSize: 14 }}>
                Thanks for your payment. Tokens are usually added immediately but there maybe a short delay for up to 10 minutes <br />
                before purchased tokens appear in your account. If tokens don't appear after 30 minutes please contact support.
            </div>
            <MainButton
                onClick={() => dispatch(SetDashboardSection(DashboardSection.Overview))}
                width={120}
                text="Back to dashboard"
            />
        </motion.div>
    )

}