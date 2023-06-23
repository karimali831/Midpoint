import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetPaymentsAction } from '../../../../state/contexts/user/Actions'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../../state/contexts/user/Selectors'
import { BarLoader } from 'react-spinners'
import './styles.css'
import { motion } from 'framer-motion'
import { Alert } from '@mui/material'

export const PaymentHistory = () => {
    const dispatch = useDispatch()

    const { loadingPayments, payments, paymentsFailure } =
        useSelector(getUserState)

    useEffect(() => {
        if (payments.length === 0) {
            dispatch(GetPaymentsAction())
        }
    }, [])

    return (
        <>
            <span className="fs28">Payment History</span>
            {paymentsFailure ? (
                <Alert severity="error">{paymentsFailure}</Alert>
            ) : loadingPayments ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {payments.length === 0 ? (
                        <Alert severity="info">
                            You have no payment history
                        </Alert>
                    ) : null}

                    {payments.map((payment) => {
                        return (
                            <div key={payment.id} className="item-container">
                                <div className="align-5 mt10">
                                    <span className="fs24">
                                        {payment.amountStr}
                                    </span>
                                    <div className="align-2">
                                        <span className="mr10">
                                            {payment.cardBrand}
                                        </span>
                                        <span>xxxx.{payment.cardLast4}</span>
                                    </div>
                                </div>
                                <div className="mt10">{payment.date}</div>
                                <div className="mt10 secondary">
                                    {payment.tokens} tokens
                                </div>
                                <div className="mt10 secondary">
                                    Status: {payment.status}
                                </div>
                                <hr className="b4 mt30" />
                            </div>
                        )
                    })}
                </motion.div>
            )}
        </>
    )
}
