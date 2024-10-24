import { Box } from '@mui/material';
import React from 'react';
import TopLinkBar from '../navbar/TopLinkBar';
import { Divider } from '@mui/material';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <Box>            
            <TopLinkBar />            
            <Divider />
            <Navbar/>
        </Box>

    );
};

export default Layout;