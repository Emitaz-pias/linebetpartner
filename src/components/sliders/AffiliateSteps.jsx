import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const AffiliateSteps = () => {
  // Steps data (updated to six cards)
  const steps = [
    {
      id: 1,
      title: 'Sign up for the affiliate program',
      description: '',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=1',
    },
    {
      id: 2,
      title: 'Receive a confirmation email',
      description:
        '*The email will arrive within 48 hours of your application being submitted.',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=2',
    },
    {
      id: 3,
      title: 'Contact your personal manager',
      description: 'Use the details mentioned in the email to get in touch.',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=3',
    },
    {
      id: 4,
      title: 'Start earning!',
      description:
        'Get recommendations from our managers and begin earning effectively.',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=4',
    },
    {
      id: 5,
      title: 'Optimize your campaigns',
      description:
        'Work with your manager to improve campaign performance over time.',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=5',
    },
    {
      id: 6,
      title: 'Reap the rewards',
      description:
        'Enjoy ongoing commissions as your campaigns succeed.',
      imgSrc: 'https://via.placeholder.com/100x100.png?text=6',
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: '40px 20px',marginLeft:'1em', textAlign: 'center' }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: '30px' }}
      >
        How do I become an Affiliate?
      </Typography>

      {/* Slider */}
      <Slider {...settings}>
        {steps.map((step) => (
          <Box
            key={step.id}
            sx={{
              padding: '20px',
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              margin: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Step Icon */}
            <Box
              component="img"
              src={step.imgSrc}
              alt={`Step ${step.id}`}
              sx={{
                width: '80px',
                height: '80px',
                marginBottom: '20px',
                objectFit: 'contain',
              }}
            />

            {/* Step Number */}
            <Box
              sx={{
                backgroundColor: '#00C853',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              {step.id}
            </Box>

            {/* Step Title */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '10px' }}
            >
              {step.title}
            </Typography>

            {/* Step Description */}
            <Typography variant="body2" sx={{ color: '#757575' }}>
              {step.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AffiliateSteps;
