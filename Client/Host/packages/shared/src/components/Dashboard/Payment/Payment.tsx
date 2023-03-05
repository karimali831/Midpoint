import { motion } from "framer-motion"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCheckoutState } from "../../../state/contexts/checkout/Selectors"
import DeleteIcon from '@mui/icons-material/Delete';
import { SetDashboardSection } from "../../../state/contexts/app/Actions";
import { DashboardSection } from "../../../enum/DashboardSection";
import {SelectedPricePlanAction } from "../../../state/contexts/checkout/Actions";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import './styles.css'
import { getUserState } from "../../../state/contexts/user/Selectors";

const stripePromise = loadStripe('pk_test_51McZmmC5WPfsVaOE5th1L0P80EsMjPR5WFOPsbxXIi0G3KFsVWBe1Ai3m6q1v5ZNfIHdGpBHTrEsVXgeNxX0AteV00Czx26jLJ');

export const Payment = () => {
    React.useEffect(() => { }, [])

    const {selectedPricePlan } = useSelector(getCheckoutState)
    const { user } = useSelector(getUserState)

    if (!selectedPricePlan)
        return null

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(SelectedPricePlanAction(null))
        dispatch(SetDashboardSection(DashboardSection.Tokens))
    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <span style={{ fontSize: 28 }}>
                Checkout
            </span>
            <div style={{ marginTop: 20, width: '60%' }}>
                <div style={{ fontSize: 20, marginBottom: 10 }}>
                    Shopping cart
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    There can only be 1 package in your shopping cart.
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35, padding: '5px 0' }}>
                    <span>{selectedPricePlan.tokens} tokens</span>
                    {selectedPricePlan.unitAmountBeforeDiscountStr}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0' }}>
                    <span>{selectedPricePlan.desc}</span>
                    <div onClick={removeItem} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.6)' }}>
                        <DeleteIcon />
                        <span style={{ marginLeft: 5 }}>Remove item</span>
                    </div>  
                </div>
                {selectedPricePlan.percentageSaving != 0 &&
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', marginTop: 25 }}>
                            <span>Discount</span>
                            <span style={{ marginBottom: 10 }}>{selectedPricePlan.amountOffStr}</span>
                        </div>
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)'  }}>You're saving {selectedPricePlan.percentageSaving}%</span>
                    </>
                }
                    <hr color="grey" style={{ margin: '20px 0' }} />
                    {user?.purchasedTokens != null &&
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                            <span style={{ fontSize: 18 }}>Tot up</span>
                            <span style={{ fontSize: 18 }}>{(user.purchasedTokens  + selectedPricePlan.tokens)} tokens</span>
                        </div>
                    }
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 18 }}>Total</span>
                        <span style={{ fontSize: 18 }}>{selectedPricePlan.unitAmountStr}</span>
                    </div>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                    {/* <Button variant="contained" style={{ width: 250, borderRadius: 25 }}>
                        Continue to check out
                    </Button> */}
            </div>
        </motion.div>
    )

}