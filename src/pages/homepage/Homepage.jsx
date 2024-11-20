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
import ConferenceSlider from '../../components/conferenceSlider/ConferenceSlider';
import AffiliateSection from '../../components/affiliateSection/AffiliateSection';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import Login from '../../components/loginForm/LoginForm';
import ContactsPage from '../contacts/ContactsPage';
import FAQ from '../../components/faq/FAQ';


const Homepage = () => {
    return (
        <Box>
            <TopSection />
           <FeatureSlider/>
           <AdvantagesSlider/>
           {/* <OurProductSection/> */}
           <TermsOfCooperation/>
           <MarketingTools/>
           <AffiliateSteps/>
           <PartnersLocations/>
           <ScrollToTopButton/>
           <ConferenceSlider/>
           <AffiliateSection/>
           <RegistrationForm/>
           <Login/>
           <ContactsPage/>
           <FAQ/>
        </Box>
    );
};

export default Homepage;