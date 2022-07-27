import React, {useState, useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Alert, Box, Snackbar } from '@mui/material';
import { drawerWidth } from '@/Layouts/Admin/constants';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './SideBar';
import Header from './Header';
import { usePage } from '@inertiajs/inertia-react';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
            padding: theme.spacing(10, 3),
            transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
        }),
            marginLeft: 0,
        }),
    }),
);

export default function Index({ children }) {
    const { flash } = usePage().props
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    //pasamos a true el snackbar cuando se recibe un mensaje
    useEffect(() =>{
        if (flash) { //si flash esta seteado
            setOpenSnackbar(true);
        }
    }, [flash]) // el [flash] es para que se ejecute solo cuando cambie la variable flash

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBar
                open={open}
                handleDrawerClose={handleDrawerClose}
                theme={theme}
            />
            <Main open={open}>
                <Header
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {flash.success && (
                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>{flash.success}</Alert>
                    </Snackbar>
                    )}
                    {flash.error && (
                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                        <Alert severity="error" onClose={() => setOpenSnackbar(false)}>{flash.error}</Alert>
                    </Snackbar>
                    )}
                    {children}
                </Box>
            </Main>
        </Box>
    );
}
