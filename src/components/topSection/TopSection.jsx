import { Box, Button } from '@mui/material';
import React from 'react';
import firstScreenVideo from '../../images/first-screen-video.mp4';
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
const TopSection = () => {
  return (
    <Box sx={{ position: 'relative', height: { xs: '100vh', sm: '100vh', md: '50vh', lg: '50vh', }, overflow: 'hidden', borderRadius: { md: '2em' } }}>
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
          objectFit: 'cover',
          width: '100vw',
          height: { xs: '100vh', md: '100vh' },
          zIndex: -1,
        }}
      >
        <source src={firstScreenVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box sx={{ display: { lg: 'none', md: 'none' } }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1, // Ensures the navbar stays above the video
          color: '#fff', // Adjust color for contrast on the video background                
          height: '100%',
        }}
      >
        <Box textAlign={'center'} marginTop={{xs:'3.5em',sx:'3em',md:'0.2em'}} padding={{ xs: '2em', sm: '2em', md: '4em' }}>
          <Box component='h1'>Make money with <Box component={'span'} color='#55CA83'> Linebet</Box></Box>
          <br />
          <Box component={'p'}>Become an affiliate, refer customers to the Linebet website and get up to 50% lifetime commission for your referrals</Box>
          <Box sx={{display:'flex',justifyContent:{md:'center',},alignItems:'center',flexDirection:{xs:'column',md:'row'}}}>
            <Link to='/sign-up'><Button sx={{
              backgroundImage: 'linear-gradient(135deg, rgb(20, 139, 67) 0%, rgb(85, 202, 131) 46.88%)',
              margin:'1.85em',
              color: '#fff', 
              padding: '8px 16px', 
              height: '40px', // Set same height
              minWidth: '250px', // Set same minWidth for consistency
              borderRadius: '8px',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, rgb(18, 125, 60) 0%, rgb(75, 180, 120) 46.88%)', // Hover effect
              },
            }} >BECOME AN AFFILIATE</Button></Link>
            <Link to='/sign-in'>
            <Button sx={{
              borderColor: 'rgb(20, 139, 67)', 
              color: 'rgb(20, 139, 67)',
              padding: '8px 16px', 
              borderWidth: '2px', 
              height: '40px', // Set same height
              minWidth: '250px', // Set same minWidth for consistency
              borderStyle: 'solid',
              fontWeight:'bold',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, rgb(18, 125, 60) 0%, rgb(75, 180, 120) 46.88%)',
                borderColor: 'rgb(20, 139, 67)', 
                color: '#ffff',
              },
            }}
              variant="outlined">BROCURE</Button>
</Link>
            
            
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default TopSection;