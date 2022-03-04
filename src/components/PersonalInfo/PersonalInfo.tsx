import React from 'react';
import { Box, Typography, styled } from '@mui/material';

type PersonalInfoProps = {
  personalInfos: Array<{ label: string; content: string }>;
};

const Paragraph = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const Label = styled(Typography)<{ component: string }>(({ theme }) => ({
  fontSize: '0.85rem',
  paddingRight: '0.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem'
  }
}));

const Content = styled(Typography)<{ component: string }>(({ theme }) => ({
  fontSize: '0.85rem',
  paddingRight: '0.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem'
  }
}));

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '50rem',
  display: 'grid',
  columnGap: '1.8rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    gridArea: '1 / 2'
  }
}));

export const PersonalInfo = ({ personalInfos }: PersonalInfoProps) => {
  return (
    <Container>
      {personalInfos.map(({ label, content }) => (
        <Paragraph key={label}>
          <Label color="primary.main" component="span">
            {label}
          </Label>
          <Content component="span">{content}</Content>
        </Paragraph>
      ))}
    </Container>
  );
};
