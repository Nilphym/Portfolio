import React from 'react';
import { Box, Typography, Divider, styled, useMediaQuery } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import {
  PageHeading,
  FeaturedSkillCard,
  Timeline,
  PersonalInfo,
  Button
} from '../components';
import {
  headingText,
  personalInfos,
  description,
  featuredSkills,
  timeline
} from '../assets/text/aboutPage';

const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  paddingBottom: '2rem'
});

const DescriptionSectionContainer = styled(Box)({
  maxWidth: '50rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
});

const DescriptionParagraph = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem'
  }
}));

const DownloadCVContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center'
});

const FeaturedSkillsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateRows: 'repeat(2, min-content)',
    gridTemplateColumns: '1fr',
    gridArea: '3 / 1 / 4 / 2'
  }
}));

const Subheading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  textAlign: 'center',
  color: theme.palette.primary.main
}));

const UpperSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '3rem',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5rem'
  }
}));

const BottomSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '3rem',
  [theme.breakpoints.up('lg')]: {
    gridTemplate: '4 / 2',
    gap: '5rem'
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    gridArea: '1 / 1 / 2 / 3'
  }
}));

export const AboutPage = () => {
  const theme = useTheme();
  const matchesLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <PageContainer>
      <PageHeading>{headingText}</PageHeading>
      <UpperSection>
        <PersonalInfo personalInfos={personalInfos} />
        <DescriptionSectionContainer>
          {description.map((paragraph) => (
            <DescriptionParagraph align="justify" key={paragraph}>
              {paragraph}
            </DescriptionParagraph>
          ))}
        </DescriptionSectionContainer>
      </UpperSection>
      <DownloadCVContainer>
        <Button startIcon={<Download />} onClick={() => undefined}>
          Download CV
        </Button>
      </DownloadCVContainer>
      <BottomSection>
        <StyledDivider />
        <Subheading
          sx={matchesLarge ? { gridArea: '2 / 1 / 3 / 2' } : {}}
          variant="h2"
        >
          Featured
        </Subheading>
        <FeaturedSkillsContainer>
          {featuredSkills.map((skill) => (
            <FeaturedSkillCard key={skill.title} {...skill} />
          ))}
        </FeaturedSkillsContainer>
        <StyledDivider />
        <Subheading
          sx={matchesLarge ? { gridArea: '2 / 2 / 3 / 3' } : {}}
          variant="h2"
        >
          Experience
        </Subheading>
        <Timeline timeline={timeline} />
      </BottomSection>
    </PageContainer>
  );
};
