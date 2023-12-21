import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Home() {
    return (
        <div className="App">
            <div className='App-header'>
            <h1>App Home</h1>
            </div>
            <div className='App-body'>
            <div className='flex flex-col w-fit'>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
            <input type="file" hidden />
            </Button>
            </div>
            </div>
        </div>
    )
}