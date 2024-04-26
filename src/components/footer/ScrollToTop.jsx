import {Fab, Zoom} from '@mui/material';
import {KeyboardArrowUp} from '@mui/icons-material'
import useScrollTrigger from '@mui/material/useScrollTrigger';


export default function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger({threshold: 100})}>
            <Fab
            onClick={() => {
                window.scrollTo(0, 0)
            }}
             size="small" sx={{
                position: "fixed",
                bottom: 15,
                left: 40,
                bgcolor: "#813ce8",
                color: "white",
                '&:hover': {
                    bgcolor: "#4d1a73",
                }
            }}>
                <KeyboardArrowUp sx={{
                }} fontSize="medium" />
            </Fab>
        </Zoom>
    )
}
