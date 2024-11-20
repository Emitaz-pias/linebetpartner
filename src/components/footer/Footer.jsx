import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { LinkedIn, Instagram } from '@mui/icons-material';
import GooglePlayIcon from '@mui/icons-material/PlayArrow'; // You can replace this with a custom Google Play logo if necessary

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'green',
        color: 'white',
        py: 2,
        px: 4,
        textAlign: 'center',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold">
            LINEBET
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Link href="#" underline="hover" color="inherit">
              What do we offer?
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Brochure
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Contacts
            </Link>
            <Link href="#" underline="hover" color="inherit">
              FAQ
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box display="flex" justifyContent="center" gap={2}>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <GooglePlayIcon /> {/* Replace with actual Google Play icon */}
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" mt={2}>
        Copyright © 2019-2024 "Partners-LineBet" All rights reserved.
      </Typography>
      <Typography variant="body2" mt={1}>
        Partners-LineBet uses cookies to enhance your website experience. By
        continuing to browse the Partners-LineBet website, you consent to the use of
        these cookies.{' '}
        <Link href="#" underline="hover" color="inherit">
          Find out more
        </Link>
      </Typography>
      <Box mt={2} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        <Link href="#" underline="hover" color="inherit">
          Privacy Policy
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Cookie Policy
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Terms and Conditions
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
