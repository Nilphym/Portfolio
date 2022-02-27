import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { NavMobile, NavDesktop, NavDesktopSocials } from './components';

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  height: '100vh',
  padding: '0 2rem',
  gridTemplateRows: 'min-content 2fr',
  [theme.breakpoints.up('md')]: {
    padding: '0 8rem'
  }
}));

const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
  height: '5rem'
});

export const Layout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <Header>{!matches && <NavMobile />}</Header>
      {matches && <NavDesktop />}
      <Outlet />
      {matches && <NavDesktopSocials />}
    </Container>
  );
};
