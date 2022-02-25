import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { Button } from '../components';
import { headingText, description, buttonText } from '../assets/text/homePage';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  alignSelf: 'center',
  alignItems: 'flex-start'
});

const Heading = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
});

const HeadingLine = styled('span')(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.7rem'
  }
}));

const HeadingLinePrimary = styled(HeadingLine)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: '0.3rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '4rem'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.1rem'
  }
}));

const StyledLink = styled(Link)({
  textDecoration: 'none'
});

export const HomePage = () => {
  return (
    <Container>
      <Heading variant="h1">
        <HeadingLine>{headingText[0]}</HeadingLine>
        <HeadingLinePrimary>{headingText[1]}</HeadingLinePrimary>
        <HeadingLine>{headingText[2]}</HeadingLine>
      </Heading>
      <Description align="justify">{description}</Description>
      <StyledLink to="/help">
        <Button>{buttonText}</Button>
      </StyledLink>
    </Container>
  );
};
