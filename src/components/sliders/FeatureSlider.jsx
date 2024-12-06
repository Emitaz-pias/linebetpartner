import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import assetsLeft from '../../images/assets-left-background.png';
import assetsRight from '../../images/assets-right-background.png';
import Grid from '@mui/material/Grid2';
const FeatureSlider = () => {
  const sliderItems = [
    {
      key: 1,
      backgroundColor: '#00b846',
      text: '20,000',
      subText: 'affiliates all over the world',
      backgroundImage: null,
    },
    {
      key: 2,
      backgroundColor: '#373737',
      text: '62',
      subText: 'languages supported',
      backgroundImage: assetsLeft,
      backgroundPosition: '-5% 32%',
      backgroundSize: '200%',
    },
    {
      key: 3,
      backgroundColor: '#00b846',
      text: '160',
      subText: 'payment methods for withdrawals and deposits',
      backgroundImage: null,
    },
    {
      key: 4,
      backgroundColor: '#373737',
      text: '700,000',
      subText: 'daily users',
      backgroundImage: assetsRight,
      backgroundPosition: 'center',
      backgroundSize: '100%',
    },
    {
      key: 5,
      backgroundColor: '#00b846',
      text: '24/7',
      subText: 'affiliate support',
      backgroundImage: null,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Grid container spacing={10} sx={{ mt:1,paddingLeft:{md:'11em',sm:'0.1em',xs:"0.1em"}}}>
       <Grid spacing={1} sx={{ paddingTop:{sm:"4em",xs:'4em',},position:'relative'}}  size={{ xs: 12, sm:11,md: 10 }}>
       <Slider   {...settings}>      
        {sliderItems.map((item) => (
          <div key={item.key}>
            <Box
              sx={{
                backgroundColor: item.backgroundColor,
                textAlign: 'center',
                padding: '0.8em',
                display: 'flex',               
                flexDirection: 'column',
                alignItems:'center',
                justifyContent: 'center',
                borderRadius: '12px',
                color: '#fff',
                margin: '0.2em',
                height: 'auto',
                backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : 'none',
                backgroundSize: item.backgroundSize || 'cover',
                backgroundPosition: item.backgroundPosition || 'center',
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '2.5em' }}>
                {item.text}
              </Typography>
              <Typography sx={{ fontSize: '1em' }}>{item.subText}</Typography>
            </Box>
          </div>
        ))}
      </Slider>
       </Grid>
     
    </Grid>
  );
};

// Custom arrow components
const SampleNextArrow = (props) => {
  const {onClick } = props;
  return (
    <Box
     component={'div'}     
      sx={{
        display: { sm: 'block flex', xs: 'block flex', md: 'none', lg: 'none' },      
        position: 'absolute', // Ensure it's positioned properly
        right: '15px',
        top: '-55px',       
        backgroundColor: 'lightgray',
        color: 'gray',
        height: '50px', // Adjust the height
        width: '50px',  // Adjust the width
        borderRadius: '50%', // Optional: make it circular        
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:10, // Ensure it's above the content
        cursor: 'pointer', // Change cursor on hover
        fontWeight:900,
        fontSize:'2em'
      }}
      onClick={onClick}
      >{'>'}</Box>
  );
};

const SamplePrevArrow = (props) => {
  const {  onClick } = props;
  return (
    <Box
    component={'div'}
      
      sx={{
        display: { sm: 'block flex', xs: 'block flex', md: 'none', lg: 'none'},
        position: 'absolute', // Ensure it's positioned properly
        left: '65vw',
        top: '-55px',
        backgroundColor: 'lightgray',
        color: 'gray',
        height: '50px', // Adjust the height
        width: '50px',  // Adjust the width
        borderRadius: '50%', // Optional: make it circular
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10, // Ensure it's above the content
        cursor: 'pointer', 
        align:'center',
        fontWeight:900,
        fontSize:'2em'
        
      }}
      onClick={onClick}
    >{'<'}</Box>
  );
};

export default FeatureSlider;
