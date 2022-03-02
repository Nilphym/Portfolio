import React from 'react';
import { Box, Typography } from '@mui/material';

type PersonalInfoProps = {
  personalInfos: Array<{ label: string; content: string }>;
};

export const PersonalInfo = ({ personalInfos }: PersonalInfoProps) => {
  return (
    <Box>
      {personalInfos.map(({ label, content }) => (
        <Typography
          key={label}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography
            sx={{ fontSize: '1rem', paddingRight: '0.5rem' }}
            color="primary.main"
            component="span"
          >
            {label}
          </Typography>
          <Typography sx={{ fontSize: '1rem' }} component="span">
            {content}
          </Typography>
        </Typography>
      ))}
    </Box>
  );
};
