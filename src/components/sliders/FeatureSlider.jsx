import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import './Slider.css'; // Custom styles if needed

const FeatureSlider = () => {
  const settings = {
    dots: false, // Disable dots, you can enable them if needed
    infinite: true,
    speed: 500,
    slidesToShow:5, // Shows 4 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          leftArrow:false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          leftArrow:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          leftArrow:false
        },
      },
    ],
  };

  const features = [
    { title: '20,000', subtitle: 'affiliates all over the world', background: '#00b846' },
    { title: '62', subtitle: 'languages supported', background: '#333' },
    { title: '160', subtitle: 'payment methods for withdrawals and deposits', background: '#00b846' },
    { title: '700,000', subtitle: 'daily users', background: '#333' },
    { title: '24/7', subtitle: 'affiliate support', background: '#00b846' },
  ];

  return (
    <Box sx={{ mt: 4, px: 2 ,border:'1px solid red'}}>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <Box key={index} sx={{
            background: feature.background,
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <Typography variant="h5" fontWeight="bold">
              {feature.title}
            </Typography>
            <Typography variant="subtitle1">
              {feature.subtitle}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeatureSlider;
