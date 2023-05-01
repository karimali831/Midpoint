import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import React from 'react'


export interface IStep {
    label: string
}

interface IOwnProps {
    activeStep: number
}

export const Steps: React.FC<IOwnProps> = (props) => {

    const steps: IStep[] = [
        { label: "Package" },
        { label: "Payment" },
        { label: "Done" }
    ]

    return (
        <Stepper activeStep={props.activeStep} alternativeLabel>
            {steps.map((steps, idx) => (
                <Step key={idx}>
                    <StepLabel>
                        <span style={{ color: props.activeStep == idx ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>
                            {steps.label}
                        </span>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}