import { useEffect, useState } from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { BarLoader } from 'react-spinners'
import { GetPromotionsAction } from '../../../state/contexts/user/Actions'

export const Promotions = () => {
    const [dense, setDense] = useState(true)
    const [secondary, setSecondary] = useState(true)

    const { promotions, user, loadingPromoCodes } = useSelector(getUserState)

    const dispatch = useDispatch()

    if (user?.purchasedTokens == 0) return null

    useEffect(() => {
        dispatch(GetPromotionsAction())
    }, [])

    return (
        <>
            <span className="fs28">Promotions</span>

            {loadingPromoCodes ? (
                <BarLoader color="#36d7b7" />
            ) : (
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
            )}
        </>
    )
}
