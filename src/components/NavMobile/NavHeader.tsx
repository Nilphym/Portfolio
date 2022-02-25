import React from 'react';
import { Box, Typography, styled } from '@mui/material';

import { title, subtitle } from '../../assets/text/navigation';

const Container = styled(Box)(({ theme }) => ({
  height: '13rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  backgroundColor: theme.palette.common.black
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main
}));

export const NavHeader = () => {
  return (
    <Container>
      <Title>{title}</Title>
      <Typography>{subtitle}</Typography>
    </Container>
  );
};
