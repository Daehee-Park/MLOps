import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <CircularProgress />
            <Typography variant="caption" component="div" className='mt-4'>
                Loading...
            </Typography>
        </div>
    );
}