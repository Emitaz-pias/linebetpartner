import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoDark from '../../images/logo-dark.png'
import './Navbar.css'
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* Header inside Drawer with Logo and Close Button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 10px',
                }}
            >
                {/* Logo */}
                <Typography >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box component={'img'} src={LogoDark} alt='logoDark' sx={{ width: '50%' }}></Box>
                    </Link>
                </Typography>
                {/* Close Button */}
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Menu Links */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/what-we-offer">
                        <ListItemText primary="What do we offer?" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/brochure">
                        <ListItemText primary="Brochure" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/contacts">
                        <ListItemText primary="Contacts" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/faq">
                        <ListItemText primary="FAQ" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/register">
                        <ListItemText primary="Register" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ paddingX: { md:27 } }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none !important', color: 'black !important',}}>
                <Toolbar>
                    {/* Logo Section */}
                    <Typography component="div" sx={{flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', }}>
                            <Box component={'img'} src={LogoDark} sx={{ width: '32%' }} alt='logoDark'></Box>
                        </Link>
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block', md: 'block' } }}>
                        <Button className="nav-button" component={Link} to="/what-we-offer">
                            What do we offer?
                        </Button>
                        <Button className="nav-button" component={Link} to="/brochure">
                            Brochure
                        </Button>
                        <Button className="nav-button" component={Link} to="/contacts">
                            Contacts
                        </Button>
                        <Button className="nav-button" component={Link} to="/faq">
                            FAQ
                        </Button>
                        <Button className="nav-button" component={Link} to="/faq">
                            en
                        </Button>
                        <Button className="register-button" variant="contained" sx={{ backgroundColor: '#00b846' }} component={Link} to="/register">
                            Register
                        </Button>
                        <Button className="nav-button" component={Link} to="/login">
                            Login
                        </Button>
                       
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};



export default Navbar;
