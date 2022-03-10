import React from 'react';
import { Link, Typography, styled } from '@mui/material';

type ContactButtonProps = {
  Icon: React.ElementType;
  label: string;
  content: string;
  href: string;
};

const Container = styled(Link)(({ theme }) => ({
  display: 'grid',
  gridTemplate: 'repeat(2, 1fr) / min-content 1fr',
  alignItems: 'center',
  columnGap: '1rem',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  textAlign: 'left',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'unset',
    cursor: 'pointer'
  }
}));

export const ContactLink = ({
  Icon,
  label,
  content,
  href
}: ContactButtonProps) => {
  return (
    <Container href={href}>
      <Icon sx={{ gridRow: 'span 2', fontSize: '2rem' }} />
      <Typography>{label}</Typography>
      <Typography>{content}</Typography>
    </Container>
  );
};
