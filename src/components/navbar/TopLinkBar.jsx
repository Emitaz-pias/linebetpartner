import React from 'react';
import { ReactComponent as AndroidImage } from '../../images/android.svg';
import { ReactComponent as LinkedIn } from '../../images/linkedInLogo.svg';
import { ReactComponent as Mail } from '../../images/mailLogo.svg';
import { ReactComponent as TelegramLogo } from '../../images/telegramLogo.svg';
import { Box } from '@mui/material';

const topBarData = [
    {
        image: TelegramLogo,
        name: 'Linebet_Partners_bot',
    },
    {
        image: LinkedIn,
        name: 'Linebet',
    },
    {
        image: Mail,
        name: 'b2b@linebet.com',
    },
    {
        image: AndroidImage,
        name: 'Mobile_app_for_Android',
    },
];

const TopLinkBar = () => {
    return (
        <Box sx={{ paddingX: { md:13 }, paddingTop:{md:'0.2em'},display: { md: 'block', lg: 'block', xs: 'none' } }} >
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {topBarData.map((bar, index) => (
                    <Box key={index} display="flex" justifyContent='center' sx={{ color: '#62ca84' }}>
                        <Box fontSize={{ md: '0.5em' }} sx={{ width: '24px', height: '24px', svg: { fill: '#62ca84' }, mr: 1 }}>
                            <bar.image />
                        </Box>
                        <Box fontSize={{ md: '0.7em' }}>{bar.name}</Box>
                    </Box>
                ))}
            </Box>

        </Box>
    );
};

export default TopLinkBar;
