import React from 'react';
import TopSection from '../../topSection/TopSection';
import { Box } from '@mui/material';
import FeatureSlider from '../../sliders/FeatureSlider';
import AdvantagesSlider from '../../sliders/Advantage';


const Homepage = () => {
    return (
        <Box>
            <TopSection />
           <FeatureSlider/>
           <AdvantagesSlider/>
        </Box>
    );
};

export default Homepage;