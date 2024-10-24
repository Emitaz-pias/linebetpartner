import { Box } from '@mui/material';
import React from 'react';
import firstScreenVideo from '../../images/first-screen-video.mp4';
const TopSection = () => {
    return (
        <Box sx={{position:'relative',height: { xs: '100vh', sm: '100vh', md: '40vh', lg: '40vh',},overflow:'hidden',borderRadius:'1.5em'}}>
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
          height: '100%',         
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        navbar
        <br />
      </Box>
        </Box>
    );
};

export default TopSection;