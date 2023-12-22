'use client'

import React, { useState } from 'react';
import UploadButton from './upload_button';
import DataTable from './data_table';
import Papa from 'papaparse';
import Spinner from './spinner';
import Timeline from './timeline';
import Button from '@mui/material/Button';
import DistributionChart from './distribution_chart';

export default function DataContainer() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploadComplete, setIsUploadComplete] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const handleFileUpload = (file) => {
        setIsLoading(true);
        setIsUploadComplete(false);
        Papa.parse(file, {
            complete: (result) => {
                setData(result.data);
                setIsLoading(false);
                setIsUploadComplete(true);
            },
            header: true,
        });
    };

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    return (
        <div>
            <div className='App-header'>
                <Timeline activeStep={activeStep} />
            </div>
            {activeStep === 0 && (
            <>
            <div className='flex flex-col'>
            <div className='flex flex-row space-x-8'>
                <UploadButton onFileUpload={handleFileUpload} isUploadComplete={isUploadComplete} />
                {isUploadComplete && (
                <Button variant="contained" onClick={handleNext} component="label">
                    Next
                </Button>
                )}
            </div>
            {isLoading ? <Spinner /> : <DataTable data={data} />}
            </div>
            </>
            )}
            {activeStep === 1 && (
            <div className='flex flex-col w-max'>
                <DataTable data={data} />
                <DistributionChart data={data} />
            </div>
            )}
        </div>
    );
}