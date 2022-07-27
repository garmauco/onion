import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';;
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Users from '@mui/icons-material/People';
import { drawerWidth } from '@/Layouts/Admin/constants';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    //necesario para que el contenido se ubique debajo del app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const ItemsRoutes =[
    {
        name: 'Inicio',
        icon: <Home />,
        route: '/',
    },
    {
        name: 'Usuarios',
        icon: <Users />,
        route: '/users',
    },

]

export default function SideBar(props) {

    const handleDrawerClose = () => {
        props.handleDrawerClose();
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
                <List>
                    {ItemsRoutes.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton href={item.route}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            <Divider />

        </Drawer>
    );
}
