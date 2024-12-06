import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductsCards from '../../images/products-cards.png'
import ProductsController from '../../images/products-controller.png'
import ProductsCyberPort from '../../images/products-cyber-sport.png'
import ProductsFootball from '../../images/products-football.png'
import ProductsGamepad from '../../images/products-gamepad.png'
import ProductsGames from '../../images/products-games.png'
import ProductsOnlineCasino from '../../images/products-online-casino.png'
import ProductsSport from '../../images/products-sport.png'



const products = [
  {
    image: ProductsFootball ,
    title: 'Sport',
    description: 'Over 182 sports events and 5,500 markets. Live sports streams using unique technology.',
    bgImage:ProductsSport
  },
  {
    image: ProductsGamepad,
    title: 'Esports',
    description: 'Over 600 pre-match and 350 live events per week. Innovative betting markets.',
    bgImage:ProductsCyberPort
  },
  {
    image:ProductsCards ,
    title: 'Online casino',
    description: '12 popular online casino providers, low minimum stakes.',
    bgImage:ProductsOnlineCasino
  },
  {
    image: ProductsController,
    title: 'Games',
    description: 'Over 80 unique games powered by software developed in-house.',
    bgImage:ProductsGames
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
                background: `url(${product.bgImage}),linear-gradient(145deg, #00c9a7, #00c853)`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                color: '#fff',
                padding: '0.5em',
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
