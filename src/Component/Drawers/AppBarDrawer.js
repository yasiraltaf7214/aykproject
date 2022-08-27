import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Assets/header-logo-img.png";
import {Link} from 'react-router-dom';

const AppBarDrawer = () => {
    const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <Box>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List sx={{maxWidth:'70%',padding:'10px'}}>
                <img src={Logo} width="100%" style={{margin:'10px'}}/>
                <Divider />
                <ListItemButton component={Link} to="/">
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText>Service</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText>Portfolio</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText>Testimonial</ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </Box>
  )
}

export default AppBarDrawer