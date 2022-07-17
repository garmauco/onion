import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react'
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@/Components/Button';

const Create = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const SaveData = (e) => {
        e.preventDefault();
        Inertia.post('/users/save', {
            first_name,
            last_name,
            email,
            phone,
            password
        });
    }

    const { errors } = usePage().props

    return (
        <>
            <h1>Crear usuario</h1>
            <Box
            sx={{ display: 'flex', flexWrap: 'wrap'}}
            component="form" onSubmit={SaveData}>
                <TextField
                label="Nombre"
                id="first_name"
                sx={{ width: '48%', margin: '0.5%' }}
                variant="filled"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.first_name && <div>{errors.first_name}</div>}
                <TextField
                label="Apellido"
                id="last_name"
                sx={{ width: '48%', margin: '0.5%' }}
                variant="filled"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                label="Teléfono"
                id="phone"
                sx={{ width: '48%', margin: '0.5%' }}
                variant="filled"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                label="Email"
                id="email"
                sx={{ width: '48%', margin: '0.5%' }}
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                label="Password"
                id="password"
                sx={{ width: '48%', margin: '0.5%' }}
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary">
                    Crear
                </Button>
            </Box>
        </>
    );
}
export default Create;
