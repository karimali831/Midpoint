import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePaymentIntentAction } from '../../../state/contexts/checkout/Actions'
import { getCheckoutState } from '../../../state/contexts/checkout/Selectors'
import { BarLoader, ClipLoader } from 'react-spinners'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import PaymentIcon from '@mui/icons-material/Payment'
import { Alert, Button } from '@mui/material'
import { SetDashboardSection } from '../../../state/contexts/app/Actions'
import { DashboardSection } from '../../../enum/DashboardSection'

export const CheckoutForm = () => {
    const [error, setError] = useState<string | null>(null)
    const [processing, setProcessing] = useState<boolean>()
    const [disabled, setDisabled] = useState<boolean>(true)

    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(CreatePaymentIntentAction())
    }, [])

    const {
        paymentIntentClientSecret,
        paymentIntentErrorMsg,
        paymentIntentLoading
    } = useSelector(getCheckoutState)

    if (!stripe || !elements) return null

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        const card = elements.getElement(CardElement)

        if (!paymentIntentClientSecret || !card) return null

        ev.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(
            paymentIntentClientSecret,
            {
                payment_method: { card }
            }
        )

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`)
            setProcessing(false)
        } else {
            dispatch(SetDashboardSection(DashboardSection.PaymentSuccessful))
        }
    }

    const cardStyle = {
        style: {
            base: {
                color: '#fff',
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: 'grey'
                },
                iconColor: '#fff'
            },
            invalid: {
                fontFamily: 'Arial, sans-serif',
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    }

    const handleChange = async (event: StripeCardElementChangeEvent) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }

    return (
        <form
            id="payment-form"
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
        >
            {paymentIntentErrorMsg && (
                <Alert severity="error">{paymentIntentErrorMsg}</Alert>
            )}
            {paymentIntentLoading ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <>
                    <CardElement
                        id="card-element"
                        options={cardStyle}
                        onChange={handleChange}
                    />

                    {error && <Alert severity="error">{error}</Alert>}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 5
                        }}
                    >
                        <Button
                            type="submit"
                            disabled={processing || disabled}
                            variant="contained"
                            size="small"
                            startIcon={
                                processing ? (
                                    <ClipLoader
                                        color="white"
                                        size={10}
                                        speedMultiplier={0.5}
                                    />
                                ) : (
                                    <PaymentIcon />
                                )
                            }
                        >
                            {processing ? 'Submitting' : 'Pay Now'}
                        </Button>
                    </div>
                </>
            )}
        </form>
    )
}

export default CheckoutForm
