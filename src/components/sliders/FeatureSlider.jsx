import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import assetsLeft from '../../images/assets-left-background.png'
import assetsRight from '../../images/assets-right-background.png'

const FeatureSlider = () => {
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
          slidesToShow:3,
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
    <Box sx={{ mt: 2, px: 1 }}>
      <Slider {...settings}>
        {/* Static Card 1 */}
        <div style={{ padding: '0 10px' }}>
          <Box
            sx={{
              background: '#00b846',
              textAlign: 'center',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              color: '#fff',
              margin: '1em'
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '1.5em' }}>
              20,000
            </Typography>
            <Typography sx={{ fontSize: '0.7em' }}>
              affiliates all over the world
            </Typography>
          </Box>
        </div>

        {/* Static Card 2 */}
        <div className='assetLeft' style={{ padding: '0 10px', }}>
          <Box
            sx={{
              backgroundColor: '#373737',
              textAlign: 'center',
              padding: '2em',
              width:'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              color: '#fff',
              margin: '1em',
              backgroundImage: `url(${assetsLeft})`, // Wrap in url()
              backgroundSize: '200%', // Ensure it covers the entire box
              backgroundPosition: '-5% 32%', // Center the image
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '1.5em' }}>
              62
            </Typography>
            <Typography sx={{ fontSize: '0.7em' }}>
              languages supported
            </Typography>
          </Box>
        </div>

        {/* Static Card 3 */}
        <div style={{ padding: '0 10px' }}>
          <Box
            sx={{
              background: '#00b846',
              textAlign: 'center',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              color: '#fff',
              margin: '1em',              
              height:'4em'
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '1.5em' }}>
              160
            </Typography>
            <Typography sx={{ fontSize: '0.7em' }}>
              payment methods for withdrawals and deposits
            </Typography>
          </Box>
        </div>

        {/* Static Card 4 */}
        <div style={{ padding: '0 10px' }}>
          <Box
            sx={{
              background: '#373737',
              textAlign: 'center',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              color: '#fff',
              margin: '1em',
              backgroundImage: `url(${assetsRight})`, // Wrap in url()
              backgroundSize: '100%', // Ensure it covers the entire box
              backgroundRepeat:'no-repeat',
              height:'4em'
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '1.5em' }}>
              700,000
            </Typography>
            <Typography sx={{ fontSize: '0.7em' }}>
              daily users
            </Typography>
          </Box>
        </div>

        {/* Static Card 5 */}
        <div style={{ padding: '0 10px' }}>
          <Box
            sx={{
              background: '#00b846',
              textAlign: 'center',
              padding: '2em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              color: '#fff',
              margin: '1em'
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '1.5em' }}>
              24/7
            </Typography>
            <Typography sx={{ fontSize: '0.7em' }}>
              affiliate support
            </Typography>
          </Box>
        </div>
      </Slider>
    </Box>
  );
};
// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-15px', color: 'gray' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-15px', color: 'gray' }}
      onClick={onClick}
    />
  );
};
export default FeatureSlider;
