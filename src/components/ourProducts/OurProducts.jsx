import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';


const products = [
  {
    image: 'assets/sport.png',
    title: 'Sport',
    description: 'Over 182 sports events and 5,500 markets. Live sports streams using unique technology.',
  },
  {
    image: 'assets/esports.png',
    title: 'Esports',
    description: 'Over 600 pre-match and 350 live events per week. Innovative betting markets.',
  },
  {
    image: 'assets/online-casino.png',
    title: 'Online casino',
    description: '12 popular online casino providers, low minimum stakes.',
  },
  {
    image: 'assets/games.png',
    title: 'Games',
    description: 'Over 80 unique games powered by software developed in-house.',
  },
];

const OurProductSection = () => {
  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Our Products
      </Typography>

      <Grid container spacing={1}>
        {products.map((product, index) => (
          <Grid           
            key={index}
          size={{xs:12,sm:6,md:3}}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                maxWidth: 300,
                width:{md:'100%',xs:'90%'},
                borderRadius: '16px',
                background: 'linear-gradient(145deg, #00c9a7, #00c853)',
                color: '#fff',
                padding: '5px',
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '60px', height: '80px', marginBottom: '10px' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProductSection;
