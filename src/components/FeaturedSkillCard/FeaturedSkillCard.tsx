import React from 'react';
import { Box, Typography, styled } from '@mui/material';

type FeaturedSkillCardProps = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '35rem',
  padding: '1rem',
  margin: '0 auto',
  backgroundColor: theme.palette.secondary.main
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  paddingBottom: '0.6rem',
  fontWeight: 'bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.7rem'
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.3rem'
  }
}));

const Date = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  paddingBottom: '0.6rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9rem'
  }
}));

export const FeaturedSkillCard = ({
  title,
  subtitle,
  date,
  description
}: FeaturedSkillCardProps) => {
  return (
    <Container>
      <Title variant="h3" color="primary.main">
        {title}
      </Title>
      <Subtitle variant="h4">{subtitle}</Subtitle>
      <Date>{date}</Date>
      <Description align="justify" color="text.secondary">
        {description}
      </Description>
    </Container>
  );
};
