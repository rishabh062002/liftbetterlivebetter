import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '45px', height: '45px', margin: '-10px 15px' }} />
    </Link>
    <Stack
      direction="row"
      gap="50px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"

    >
      <Link to="/" className="home" style={{ textDecoration: 'underline', color: '#3A1212', fontWeight: 900, fontSize: '25px', marginLeft: '-30px', marginTop: '-40px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'underline', color: '#3A1212', fontWeight: 900, fontSize: '25px' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
