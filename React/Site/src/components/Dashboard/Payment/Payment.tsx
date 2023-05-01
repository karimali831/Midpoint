import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCheckoutState } from "../../../state/contexts/checkout/Selectors"
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SetDashboardSection } from "../../../state/contexts/app/Actions";
import { DashboardSection } from "../../../enum/DashboardSection";
import {CreatePaymentIntentAction, SelectedPricePlanAction } from "../../../state/contexts/checkout/Actions";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import './styles.css'
import { getUserState } from "../../../state/contexts/user/Selectors"
import { IStep, Steps } from "../../Stepper";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";

const stripePromise = loadStripe('pk_test_51McZmmC5WPfsVaOE5th1L0P80EsMjPR5WFOPsbxXIi0G3KFsVWBe1Ai3m6q1v5ZNfIHdGpBHTrEsVXgeNxX0AteV00Czx26jLJ');

export const Payment = () => {
    React.useEffect(() => { }, [])

    const [promoCode, setPromoCode] = useState<string>('')
    const [promoApplied, setPromoApplied] = useState<boolean>(false)

    const {selectedPricePlan } = useSelector(getCheckoutState)
    const { user } = useSelector(getUserState)
    const { 
        paymentAmount, 
        coupon,
        paymentDiscountedAmount
    } = useSelector(getCheckoutState)

    if (!selectedPricePlan)
        return null

    const dispatch = useDispatch()

    useEffect(() => {
        if (promoCode.length > 2) {
            const delayDebounceFn = setTimeout(() => {
                dispatch(CreatePaymentIntentAction(promoCode))
            }, 1500)

            return () => clearTimeout(delayDebounceFn)
        }
      }, [promoCode])

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
            <span style={{ fontSize: 34 }}>
                Checkout
            </span>
            <div style={{ margin: '50px -90px', width: '80%' }}>
                <Steps activeStep={1} />
            </div>
            <div style={{ marginTop: 20, width: '60%' }}>
                <div style={{ fontSize: 20, marginBottom: 10 }}>
                    Shopping cart
                </div>
    
                <div className="align-1" style={{ marginTop: 35, padding: '5px 0' }}>
                    <span>{selectedPricePlan.tokens} tokens</span>
                    <span>{selectedPricePlan.unitAmountBeforeDiscountStr}</span>
                </div>
                <div className="align-1" style={{ padding: '5px 0' }}>
                    <span className="secondary">{selectedPricePlan.desc}</span>
                    <div onClick={removeItem} className="align-2 secondary" style={{ cursor: 'pointer' }}>
                        <DeleteIcon />
                        <span style={{ marginLeft: 5 }}>Remove item</span>
                    </div>  
                </div>
                {selectedPricePlan.percentageSaving > 0 &&
                    <>
                        <div className="align-1" style={{ padding: '5px 0', marginTop: 25 }}>
                            <span>Discount</span>
                            <span style={{ marginBottom: 10 }}>-{selectedPricePlan.amountOffStr}</span>
                        </div>
                        <span className="secondary">
                            Token package saving {selectedPricePlan.percentageSaving}%
                        </span>
                    </>
                }
                {
                    coupon &&
                    <>
                        <div className="align-1" style={{ padding: '5px 0', marginTop: 25 }}>
                            <span>Coupon</span>
                            <span style={{ marginBottom: 10 }}>-{paymentDiscountedAmount}</span>
                        </div>
                        <div className="secondary">
                            {coupon}
                        </div>
                    </>

                }
                    <hr color="grey" style={{ margin: '20px 0' }} />
                
                    <div className="align-1">
                        <span>Total</span>
                        <span>{paymentAmount ?? selectedPricePlan.unitAmountStr}</span>
                    </div>
                    {user?.remainingTokens != null &&
                        <div className="align-1 secondary" style={{ marginTop: 15 }}>
                            <span>Tot up</span>
                            <span>{(user.remainingTokens  + selectedPricePlan.tokens)} tokens</span>
                        </div>
                    }
                    <div id="promotion-ele">
                        <div style={{ fontSize: 20, marginBottom: 10 }}>
                            Promotion code
                        </div>
                        <input 
                            type="text" 
                            className="text-input" 
                            placeholder="Enter promotion code" 
                            onChange={(e) => setPromoCode(e.target.value)}
                            value={promoCode} 
                        />
                        <div id="promotion-status">
                            {
                                promoApplied &&
                                <div id="promotion-applied">
                                    <CheckCircleIcon style={{ color: '#44b096' }} />
                                </div>
                            }
                        </div>
                    </div>
                    <div style={{ fontSize: 20, marginBottom: 10, marginTop: 30 }}>
                        Payment
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