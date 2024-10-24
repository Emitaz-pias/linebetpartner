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
            <Navbar />
           <Box component={'main'} paddingX={{xs:0,sm:0,md:30,lg:30}}>{children}</Box>
        </Box>

    );
};

export default Layout;