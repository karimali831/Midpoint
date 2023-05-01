import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { DashboardSection } from "../../../enum/DashboardSection"
import { SetDashboardSection } from "../../../state/contexts/app/Actions"
import { MainButton } from "../../Buttons/MainButton"
import { Steps } from "../../Stepper"


export const PaymentSuccess = () => {
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
             <span style={{ fontSize: 34 }}>
                Payment successful
            </span>
            <div style={{ margin: '50px -90px', width: '100%' }}>
                <Steps activeStep={2} />
            </div>
            <div style={{ marginTop: 10, marginBottom: 10, fontSize: 22 }}>
                Thank you for your order
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: 30, fontSize: 14, lineHeight: 1.5 }}>
                Tokens are usually added immediately but there maybe a short delay for up to 10 minutes before <br />
                purchased tokens appear in your account. If tokens don't appear after 30 minutes please contact support.
            </div>
            <MainButton
                onClick={() => dispatch(SetDashboardSection(DashboardSection.Overview))}
                width={120}
                text="Back to dashboard"
            />
        </motion.div>
    )

}