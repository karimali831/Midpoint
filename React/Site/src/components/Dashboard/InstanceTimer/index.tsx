import { Box, LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserState } from '../../../state/contexts/user/Selectors'
import { MidPointStep } from '../../../enum/DashboardSection'
import { getAppState } from '../../../state/contexts/app/Selectors'
import { SetMidPointStep } from '../../../state/contexts/app/Actions'
import { subscriptionApi } from '../../../api/subscriptionApi'
import { GetUserAction } from '../../../state/contexts/user/Actions'
import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub'
import { Hub } from 'aws-amplify'
import AnimatedNumbers from 'react-animated-numbers'
import { OnUpdateUserSubscription } from '../../../API'
import { useDispatch } from 'react-redux'
import { SubscriptionValue } from '../../../graphql/api'

interface IOwnProps {
    isMini: boolean
}

export const InstanceTimer = (props: IOwnProps) => {
    const [percentageRemaining, setPercentageRemaining] = useState<number>(0)
    const [minutesRemaining, setMinutesRemaining] = useState<number>(0)
    const [tokensRemaining, setTokensRemaining] = useState<number>(0)

    const { user } = useSelector(getUserState)
    const { midpointStep } = useSelector(getAppState)

    const dispatch = useDispatch()
    const deductTokens = 500 / 60

    const { isMini } = props

    useEffect(() => {
        if (user) {
            if (
                user.purchasedTokens === 0 &&
                midpointStep === MidPointStep.Stream
            ) {
                dispatch(SetMidPointStep(MidPointStep.Welcome))
            }

            if (user.purchasedTokens != null && user.remainingTokens != null) {
                setTokensRemaining(user.remainingTokens)

                const minutesRemaining = Math.round(
                    user.remainingTokens / deductTokens
                )

                setMinutesRemaining(minutesRemaining)

                const calc =
                    (user.purchasedTokens - user.remainingTokens) /
                    user.purchasedTokens
                const percentageRemaining = Math.floor(100 - calc * 100)

                setPercentageRemaining(percentageRemaining)
            }

            const subscribeTokenUpdate = async () => {
                const subscription = (
                    await subscriptionApi.tokensRemaining(user)
                ).subscribe({
                    next: (
                        response: SubscriptionValue<OnUpdateUserSubscription>
                    ) => {
                        console.log(response.value.data.onUpdateUser)
                        // this is non-sense, socket connected obj returns null (except id)
                        dispatch(GetUserAction())
                    },
                    error: (error: any) => console.error(error)
                })
                return () => subscription.unsubscribe()
            }

            // let priorConnectionState: ConnectionState;

            Hub.listen('api', (data: any) => {
                const { payload } = data

                if (payload.event === CONNECTION_STATE_CHANGE) {
                    const connectionState = payload.data
                        .connectionState as ConnectionState
                    console.log(connectionState)

                    // if (priorConnectionState === ConnectionState.Connecting && payload.data.connectionState === ConnectionState.Connected) {
                    //     dispatch(GetUserAction())
                    // }

                    // priorConnectionState = payload.data.connectionState;
                }
            })

            subscribeTokenUpdate()
        }
    }, [user])

    return (
        <Box
            sx={{
                width: '100%',
                marginBottom: 3
            }}
        >
            <LinearProgress
                variant="determinate"
                value={percentageRemaining}
                style={{ height: 2 }}
                color={minutesRemaining < 10 ? 'error' : 'info'}
            />
            <div
                className="align-2"
                style={{
                    marginTop: 15,
                    textAlign: isMini ? 'center' : 'left',
                    color:
                        minutesRemaining < 10 ? 'rgb(238, 175, 175)' : 'white'
                }}
            >
                <AnimatedNumbers animateToNumber={minutesRemaining} />
                &nbsp;
                {isMini
                    ? 'min'
                    : `minute${minutesRemaining === 1 ? '' : 's'} left`}
            </div>
            <div
                className="secondary fs14 align-2"
                style={{
                    marginTop: 5,
                    textAlign: isMini ? 'center' : 'left'
                }}
            >
                <AnimatedNumbers animateToNumber={tokensRemaining} />
                &nbsp;
                {!isMini &&
                    `token${tokensRemaining === 1 ? '' : 's'} remaining`}
            </div>
        </Box>
    )
}
