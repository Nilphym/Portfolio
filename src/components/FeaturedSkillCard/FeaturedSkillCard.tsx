import React from 'react';
import { Box, Typography } from '@mui/material';

type FeaturedSkillCardProps = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

export const FeaturedSkillCard = ({
  title,
  subtitle,
  date,
  description
}: FeaturedSkillCardProps) => {
  return (
    <Box sx={{ padding: '1rem', backgroundColor: 'secondary.main' }}>
      <Typography
        variant="h3"
        color="primary.main"
        sx={{ fontSize: '1.5rem', paddingBottom: '0.6rem', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: '1.1rem' }}>
        {subtitle}
      </Typography>
      <Typography sx={{ fontSize: '0.8rem', paddingBottom: '0.6rem' }}>
        {date}
      </Typography>
      <Typography
        align="justify"
        color="text.secondary"
        sx={{ fontSize: '0.8rem' }}
      >
        {description}
      </Typography>
    </Box>
  );
};
