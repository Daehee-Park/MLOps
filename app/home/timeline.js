'use client'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function Timeline({ activeStep, completedSteps }) {
    const steps = ['Data Upload', 'Data Quality Check', 'Data Preprocess', 'Model Training', 'Model Evaluation'];

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} alternativeLabel>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}