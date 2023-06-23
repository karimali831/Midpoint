import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { GetPricingPlanAction } from '../../state/contexts/checkout/Actions'
import { getCheckoutState } from '../../state/contexts/checkout/Selectors'
import { TokenCard } from './TokenCard'
import { BarLoader } from 'react-spinners'
import { Alert } from '@mui/material'

export const Tokens = () => {
    const dispatch = useDispatch()

    const { pricingPlan, loadingPricingPlan, pricingPlanFailure } =
        useSelector(getCheckoutState)

    useEffect(() => {
        if (pricingPlan.length == 0) {
            dispatch(GetPricingPlanAction())
        }
    }, [])

    return (
        <>
            <span className="fs28">Get tokens</span>
            {pricingPlanFailure ? (
                <Alert severity="error">{pricingPlanFailure}</Alert>
            ) : loadingPricingPlan ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            marginTop: 20,
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}
                    >
                        {pricingPlan.map((pricePlan) => (
                            <TokenCard
                                key={pricePlan.id}
                                pricePlan={pricePlan}
                            />
                        ))}
                        <TokenCard />
                    </div>
                </motion.div>
            )}
        </>
    )
}
