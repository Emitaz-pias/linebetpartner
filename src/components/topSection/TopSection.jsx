import { Box } from '@mui/material';
import React from 'react';
import firstScreenVideo from '../../images/first-screen-video.mp4';
const TopSection = () => {
    return (
        <Box border='1px solid red' sx={{position:'relative',height: { xs: '100vh', sm: '100vh', md: '50vh', lg: '50vh',},overflow:'hidden',borderRadius:{md:'2em'}}}>
          <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit:'cover',
          width:'100%',
          height:{xs:'100vh', md:'100vh'},         
          zIndex: -1,                   
        }}
      >
        <source src={firstScreenVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Navbar content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1, // Ensures the navbar stays above the video
          color: '#fff', // Adjust color for contrast on the video background                
          height: '100%',
        }}
      >
      <Box textAlign={'center'} padding={{xs:'2em',sm:'2em',md:'4em'}}>
      <Box component='h1'>Make money with <Box component={'span'} color='#55CA83'> Linebet</Box></Box>        
        <br />
        <Box component={'p'}>Become an affiliate, refer customers to the Linebet website and get up to 50% lifetime commission for your referrals</Box>

      </Box>
      </Box>
        </Box>
    );
};

export default TopSection;