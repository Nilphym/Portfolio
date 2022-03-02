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
import { Typography } from '@mui/material';

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

export const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <MuiTimeline>
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
            <Typography
              sx={{
                padding: '0.1rem 0.5rem',
                fontSize: '0.8rem',
                backgroundColor: 'secondary.main',
                display: 'inline',
                borderRadius: '5rem'
              }}
            >
              {timelineItem.time}
            </Typography>
            <Typography
              color="primary.main"
              sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}
            >
              {timelineItem.title}
            </Typography>
            <Typography sx={{ fontSize: '0.8rem' }}>
              {timelineItem.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};
