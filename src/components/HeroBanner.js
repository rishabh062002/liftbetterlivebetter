import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/e.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '50px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="970" id="hero" fontSize="30px" marginTop="-12px">
      Lift Better Live Better
    </Typography>
    <Typography fontWeight={950} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="10px" id="abc">
      Commit, Sweat <br />
      And Repeat

    </Typography>
    <Typography fontSize="23px" lineHeight="35px" id="main">
      &ldquo;Check out the most effective exercises
      personalized to you&rdquo;
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: ' 17px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '11px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '30px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.25', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
