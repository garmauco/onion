import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Index = ({ users }) => {
    return (
        <>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} href="/users/create">
                Crear usuario
            </Button>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="left">Teléfono</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Rol</TableCell>
                            <TableCell align="left">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.first_name} {user.last_name}
                                </TableCell>
                                <TableCell align="left">{user.phone}</TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left">Rol</TableCell>
                                <TableCell align="left">
                                    <Stack direction="row" spacing={2} align="center">
                                        <Button variant="contained" color="primary">
                                            Editar
                                        </Button>
                                        <Button variant="contained" color="error">
                                            Eliminar
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default Index;
