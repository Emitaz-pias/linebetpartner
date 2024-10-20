import { Box } from '@mui/material';
import React from 'react';
import TopLinkBar from '../navbar/TopLinkBar';

const Layout = ({children}) => {
    return (
        <Box>
            <TopLinkBar/>
        </Box>
    );
};

export default Layout;