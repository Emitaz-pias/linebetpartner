import React from 'react';
import TopSection from '../../components/topSection/TopSection';
import { Box } from '@mui/material';
import FeatureSlider from '../../components/sliders/FeatureSlider';
import AdvantagesSlider from '../../components/sliders/Advantage';
import OurProductSection from '../../components/ourProducts/OurProducts'
import TermsOfCooperation from '../../components/termsOfCooeperation/TermsOfCooperation';
import MarketingTools from '../../components/marketingTools/MarketingTools';


const Homepage = () => {
    return (
        <Box>
            <TopSection />
           <FeatureSlider/>
           <AdvantagesSlider/>
           <OurProductSection/>
           <TermsOfCooperation/>
           <MarketingTools/>
        </Box>
    );
};

export default Homepage;