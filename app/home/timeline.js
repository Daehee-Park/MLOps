'use client'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function Timeline({ activeStep }) {
    const steps = ['Data Upload', 'Data Quality Check', 'Data Preprocess', 'Model Training', 'Model Evaluation'];

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}