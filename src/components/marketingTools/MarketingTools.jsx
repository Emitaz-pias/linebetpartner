import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

import SmartLinkIcon from '@mui/icons-material/Link'; // Example icons
import PromoCodeIcon from '@mui/icons-material/CardGiftcard';
import JSONFeedsIcon from '@mui/icons-material/RssFeed';
import S2SIntegrationIcon from '@mui/icons-material/IntegrationInstructions';
import BannersIcon from '@mui/icons-material/Image';

const MarketingTools = () => {
  const tools = [
    {
      title: 'Smart Link',
      description: 'All the best offers in one link',
      icon: <SmartLinkIcon sx={{ fontSize: 40, color: '#00C853' }} />,
    },
    {
      title: 'Banners and landing pages',
      description: 'The freshest collection of banners and landing pages',
      icon: <BannersIcon sx={{ fontSize: 40, color: '#00C853' }} />,
    },
    {
      title: 'Promo codes',
      description: 'Exclusive promo codes for your audience',
      icon: <PromoCodeIcon sx={{ fontSize: 40, color: '#00C853' }} />,
    },
    {
      title: 'JSON Feeds',
      description: 'Direct access to top products from our server',
      icon: <JSONFeedsIcon sx={{ fontSize: 40, color: '#00C853' }} />,
    },
    {
      title: 'S2S integration',
      description: 'Integration with all popular trackers',
      icon: <S2SIntegrationIcon sx={{ fontSize: 40, color: '#00C853' }} />,
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '50px 20px' }}>
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '40px',
          fontSize: { xs: '24px', md: '32px' },
        }}
      >
        An extensive selection of marketing tools
      </Typography>

      {/* Grid of Tools */}
      <Grid container spacing={4} justifyContent="center">
        {tools.map((tool, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                textAlign: 'center',
                borderRadius: '16px',
                backgroundColor: '#E8F5E9',
              }}
            >
              <Box sx={{ marginBottom: '20px' }}>{tool.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: '10px',
                }}
              >
                {tool.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                {tool.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MarketingTools;
