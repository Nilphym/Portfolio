import React from 'react';
import { Box, Link, styled } from '@mui/material';

const Container = styled(Box)({
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem'
});

const IconLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: theme.palette.primary.main
  }
}));

type NavFooterProps = {
  closeNavbar: () => void;
  iconLinks: Array<{ component: React.ReactNode; url: string }>;
};

export const NavFooter = ({ closeNavbar, iconLinks }: NavFooterProps) => {
  return (
    <Container>
      {iconLinks.map(({ component, url }) => (
        <IconLink
          onClick={closeNavbar}
          key={url}
          target="_blank"
          rel="noopener"
          href={url}
        >
          {component}
        </IconLink>
      ))}
    </Container>
  );
};
