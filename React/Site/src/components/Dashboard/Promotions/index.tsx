import { useEffect } from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { BarLoader } from 'react-spinners'
import { GetPromotionsAction } from '../../../state/contexts/user/Actions'
import { motion } from 'framer-motion'
import { Alert } from '@mui/material'

export const Promotions = () => {
    const { promotions, loadingPromoCodes, promotionsFailure } =
        useSelector(getUserState)

    const dispatch = useDispatch()

    useEffect(() => {
        if (promotions.length === 0) {
            dispatch(GetPromotionsAction())
        }
    }, [])

    return (
        <>
            <span className="fs28">Promotions</span>
            {promotionsFailure ? (
                <Alert severity="error">{promotionsFailure}</Alert>
            ) : loadingPromoCodes ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Expires</th>
                                <th>They Claimed</th>
                                <th>You Claimed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {promotions.length > 0 &&
                                promotions.map((promo, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{promo.couponName}</td>
                                            <td>{promo.code}</td>
                                            <td>{promo.expiresStr}</td>
                                            <td>
                                                {promo.receiverClaimedDateStr
                                                    ? 'Yes'
                                                    : 'No'}
                                            </td>
                                            <td>
                                                {promo.creatorClaimedDateStr
                                                    ? 'Yes'
                                                    : 'No'}
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </motion.div>
            )}
        </>
    )
}
