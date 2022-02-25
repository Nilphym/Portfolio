import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';

import { NavMobile } from './components';

const Container = styled(Box)({
  display: 'grid',
  height: '100vh',
  padding: '0 2rem',
  gridTemplateRows: 'min-content 2fr'
});

const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  width: '100%',
  height: '5rem'
});

export const Layout = () => {
  return (
    <Container>
      <Header>
        <NavMobile />
      </Header>
      <Outlet />
    </Container>
  );
};
