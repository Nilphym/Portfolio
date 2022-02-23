import React from 'react';
import { Typography, Box } from '@mui/material';

type HeadingProps = {
  children: React.ReactNode;
};

export const PageHeading = ({ children }: HeadingProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          fontSize: '7rem',
          fontWeight: 'bold',
          position: 'absolute',
          zIndex: -1,
          opacity: 0.07
        }}
        color="secondary.contrastText"
        component="span"
      >
        {children}
      </Typography>
      <Typography
        sx={{ fontSize: '4rem', fontWeight: 'bold' }}
        color="primary"
        variant="h2"
      >
        {children}
      </Typography>
    </Box>
  );
};
