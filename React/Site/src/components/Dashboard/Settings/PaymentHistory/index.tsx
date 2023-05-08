import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetPaymentsAction } from '../../../../state/contexts/user/Actions'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../../state/contexts/user/Selectors'
import { BarLoader } from 'react-spinners'
import './styles.css'

export const PaymentHistory = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPaymentsAction())
    }, [])

    const { loadingPayments, payments } = useSelector(getUserState)

    return (
        <>
            <span className="fs28">Payment History</span>

            {loadingPayments ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <>
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
                </>
            )}
        </>
    )
}
