import React from 'react';
import androidImage from '../../images/androidImage.png';
import linkedin from '../../images/linkedIn.png';
import mail from '../../images/mail.png';
import telegramLogo from '../../images/telegramLogo.png'
import { Box } from '@mui/material';

const topBarData =[
    {
        image:telegramLogo,
        name:'Linebet_Partners_bot'
    },
    {
        image:linkedin,
        name:'Linebet'
    },
    {
        image:mail,
        name:'b2b@linebet.com'
    },{
        image:androidImage,
        name:'Mobile_app_for_Android'
    },
  
]

const TopLinkBar = () => {
    return (
        <Box sx={{display:'flex',justifyContent:'space-around'}} >
            {
            topBarData.map((bar)=>
            <Box display='flex' sx={{color:'#62ca84'}}>
             <Box component={'img'} sx={{width:'100%',backgroundColor:'#62ca84',}} src={bar.image}></Box>
             <Box>{bar.name} </Box>
            </Box>)
            }
        </Box>
    );
};

export default TopLinkBar;