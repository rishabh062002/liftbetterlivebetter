import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
    </Stack>
    <hr />
    <Typography variant="h5" sx={{ fontSize: { lg: '19px', xs: '15px' } }} mt="2px" textAlign="center" pb="5px">All &#169; Copyrights Reserved - 2023</Typography>

  </Box>
);

export default Footer;
