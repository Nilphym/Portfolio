import * as React from 'react';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import { School, Work, CoPresent } from '@mui/icons-material';
import { Typography, styled } from '@mui/material';

export type TimelineProps = {
  timeline: Array<{
    title: string;
    time: string;
    type: 'education' | 'job' | 'course';
    description: string;
  }>;
};

const icons = {
  education: <School />,
  job: <Work />,
  course: <CoPresent />
};

const Time = styled(Typography)(({ theme }) => ({
  padding: '0.1rem 0.5rem',
  fontSize: '0.8rem',
  backgroundColor: theme.palette.secondary.main,
  display: 'inline',
  borderRadius: '5rem'
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9rem'
  }
}));

const MuiStyledTimeline = styled(MuiTimeline)(({ theme }) => ({
  maxWidth: '35rem',
  margin: '0 auto',
  [theme.breakpoints.up('lg')]: {
    gridArea: '3 / 2 / 4 / 3'
  }
}));

export const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <MuiStyledTimeline>
      {timeline.map((timelineItem, index) => (
        <TimelineItem
          sx={{ '&::before': { content: 'none' } }}
          key={timelineItem.title}
        >
          <TimelineSeparator>
            <TimelineDot color="primary">
              {icons[timelineItem.type]}
            </TimelineDot>
            {index !== timeline.length - 1 && (
              <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Time>{timelineItem.time}</Time>
            <Title>{timelineItem.title}</Title>
            <Description>{timelineItem.description}</Description>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiStyledTimeline>
  );
};
