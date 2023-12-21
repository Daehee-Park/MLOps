'use client'

import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function UploadButton({ onFileUpload, isUploadComplete }) {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div className='flex flex-col w-fit'>
            <Button
                component="label"
                variant="contained"
                startIcon={isUploadComplete ? <CheckCircleIcon /> : <CloudUploadIcon />}
                sx={{
                    ...(isUploadComplete && {
                        backgroundColor: 'green',
                        '&:hover': {
                            backgroundColor: 'green',
                        },
                    }),
                }}
            >
                {isUploadComplete ? "업로드 완료!" : "파일 업로드"}
                <input type="file" hidden onChange={handleFileChange} disabled={isUploadComplete} />
            </Button>
        </div>
    );
}
