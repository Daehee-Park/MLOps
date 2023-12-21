import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center">
            <CircularProgress />
            <Typography variant="caption" component="div">
                Loading...
            </Typography>
        </div>
    );
}