import { Inertia } from '@inertiajs/inertia';
import Admin from '@/Layouts/Admin';
import { usePage } from '@inertiajs/inertia-react'
import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { Breadcrumbs, FormControl, Grid, TextField, Typography } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const Form = ({user}) => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [titlePage, setTitlePage] = useState('Crear usuario');
    const [buttonText, setButtonText] = useState('Crear');
    const [loading, setLoading] = useState(false);
    const [route, setRoute] = useState('/users/store');

    // cambiamos el titulo de la pagina y seteamos la ruta y los datos del usuario si user no es null
    useEffect(() => {
        if(user){
            setTitlePage('Editar usuario');
            setButtonText('Actualizar');
            setRoute(`/users/update/${user.id}`);
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            setPhone(user.phone);
        }
    }
    ,[user]);


    const SaveData = (e) => {
        e.preventDefault();
        setLoading(true);

        Inertia.post(route, {
            first_name,
            last_name,
            email,
            phone,
            password
        });
        setLoading(false);
    }

    const { errors } = usePage().props

    return (
        <Admin>
            <Box
            sx={{ flexGrow: 1 }}
            component="form">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h5">{titlePage}</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography variant="body1">Usuarios</Typography>
                        <Typography variant="body1" color="textPrimary">{titlePage}</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                    label="Nombre"
                    id="first_name"
                    variant="filled"
                    value={first_name}
                    sx={{ width: '100%' }}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.first_name && <FormHelperText error>{errors.first_name}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                    label="Apellido"
                    id="last_name"
                    variant="filled"
                    value={last_name}
                    sx={{ width: '100%' }}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.last_name && <FormHelperText error>{errors.last_name}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                    label="Teléfono"
                    id="phone"
                    variant="filled"
                    value={phone}
                    sx={{ width: '100%' }}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <FormHelperText error>{errors.phone}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                    label="Email"
                    id="email"
                    variant="filled"
                    value={email}
                    sx={{ width: '100%' }}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                    label="Password"
                    id="password"
                    type="password"
                    variant="filled"
                    value={password}
                    sx={{ width: '100%' }}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <LoadingButton
                    color="primary"
                    onClick={SaveData}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    >
                    {buttonText}
                    </LoadingButton>
                </Grid>
            </Grid>
            </Box>
        </Admin>
    );
}
export default Form;
