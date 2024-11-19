import React from 'react';
import TopSection from '../../components/topSection/TopSection';
import { Box } from '@mui/material';
import FeatureSlider from '../../components/sliders/FeatureSlider';
import AdvantagesSlider from '../../components/sliders/Advantage';
import OurProductSection from '../../components/ourProducts/OurProducts'


const Homepage = () => {
    return (
        <Box>
            <TopSection />
           <FeatureSlider/>
           <AdvantagesSlider/>
           <OurProductSection/>
        </Box>
    );
};

export default Homepage;