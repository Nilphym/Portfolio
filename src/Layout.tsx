import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { NavMobile, NavDesktop, NavDesktopSocials } from './components';

const SiteContainer = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'min-content 1fr',
  minHeight: '100vh',
  overflowX: 'clip'
});

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
  height: '4rem',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.default
}));

const PageContainer = styled(Box)(({ theme }) => ({
  padding: '0 2rem',
  [theme.breakpoints.up('md')]: {
    padding: '0 8rem'
  }
}));

export const Layout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <SiteContainer>
      <Header>{!matches && <NavMobile />}</Header>
      {matches && <NavDesktop />}
      <PageContainer>
        <Outlet />
      </PageContainer>
      {matches && <NavDesktopSocials />}
    </SiteContainer>
  );
};
