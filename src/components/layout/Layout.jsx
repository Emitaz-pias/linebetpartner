import { Box } from '@mui/material';
import React from 'react';
import TopLinkBar from '../navbar/TopLinkBar';
import { Divider } from '@mui/material';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <Box>
            <TopLinkBar />
            <Divider />
            <Box sx={{ display: { sm: 'none', xs: 'none',lg:'block',md:'block' } }}>
                <Navbar />
            </Box>
            <Box component={'main'} paddingX={{ xs: 0, sm: 0 }}>{children}</Box>
            <Footer />
        </Box>

    );
};

export default Layout;