import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const conferences = [
  {
    title: 'SIGMA Asia',
    location: 'Manila 2024',
  },
  {
    title: 'iGBLIVE',
    location: 'Amsterdam 2024',
  },
  {
    title: 'SBC Summit',
    location: 'Lisbon 2024',
  },
];

const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      color: '#00B894',
      borderRadius: '50%',
      zIndex: 10,
    }}
    onClick={onClick}
  >
    {direction === 'left' ? (
      <ArrowBackIosIcon style={{ color: '#00B894' }} />
    ) : (
      <ArrowForwardIosIcon style={{ color: '#00B894' }} />
    )}
  </div>
);

const ConferenceSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ textAlign: 'center', py: 5, backgroundColor: '#F9F9F9' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Participation in conferences
      </Typography>
      <Slider {...settings}>
        {conferences.map((conf, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#00B894',
              color: '#fff',
              borderRadius: '10px',
              padding: 3,
              margin: '10px',
              height: '200px',
              border:'1px solid red'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              {conf.title}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#019960',
                textTransform: 'none',
                fontSize: '14px',
              }}
            >
              {conf.location}
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ConferenceSlider;
