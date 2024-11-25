import React from 'react';
import TopSection from '../../components/topSection/TopSection';
import { Box } from '@mui/material';
import FeatureSlider from '../../components/sliders/FeatureSlider';
import AdvantagesSlider from '../../components/sliders/Advantage';
// import OurProductSection from '../../components/ourProducts/OurProducts'
import TermsOfCooperation from '../../components/termsOfCooeperation/TermsOfCooperation';
import MarketingTools from '../../components/marketingTools/MarketingTools';
import AffiliateSteps from '../../components/sliders/AffiliateSteps';
import PartnersLocations from '../../components/partnersLocation/PartnersLocation';
import ScrollToTopButton from '../../components/scrollToTop/ScrollToTop';
// import ConferenceSlider from '../../components/conferenceSlider/ConferenceSlider';
import AffiliateSection from '../../components/affiliateSection/AffiliateSection';


const Homepage = () => {
    return (
        <Box>
            <Box sx={{ marginX:{md:'11em',sm:0,xs:0}}}><TopSection/></Box> 
           <FeatureSlider/>
           <AdvantagesSlider/>
           {/* <OurProductSection/> */}
           <TermsOfCooperation/>
           <MarketingTools/>
           <AffiliateSteps/>
           <PartnersLocations/>
           <ScrollToTopButton/>
           {/* <ConferenceSlider/> */}
           <AffiliateSection/>
        </Box>
    );
};

export default Homepage;