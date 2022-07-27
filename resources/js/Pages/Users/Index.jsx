import React, { useState } from 'react';
import Admin from '@/Layouts/Admin';
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
import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import CustomPagination from '../Pagination/Index';

const Index = ({ users }) => {
    const [openDelete, setOpenDelete] = useState(false);
    const [userDelete, setUserDelete] = useState(null);

    const handleDelete = (id) => {
        setOpenDelete(true);
        setUserDelete(id);
    }
    return (
        <Admin>
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
                        {users.data.map(user => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.first_name} {user.last_name}
                                </TableCell>
                                <TableCell align="left">{user.phone}</TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left">Rol</TableCell>
                                <TableCell align="left">
                                    <Stack direction="row" spacing={2} align="center">
                                        <Button variant="contained" color="primary" href={`/users/edit/${user.id}`}>
                                            Editar
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>
                                            Eliminar
                                        </Button>
                                        <Dialog
                                            open={openDelete}
                                            onClose={() => setOpenDelete(false)}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                ¿Estás seguro que deseas eliminar este usuario?
                                            </DialogTitle>
                                            <DialogActions>
                                            <Button variant="contained" color="info" onClick={() => setOpenDelete(false)} sx={{marginRight: '1rem'}}>
                                                Cancelar
                                            </Button>
                                            <Button variant="contained" color="error" href={`/users/delete/${userDelete}`}>
                                                Eliminar
                                            </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomPagination links={users} />
        </Admin>
    );
}
export default Index;
