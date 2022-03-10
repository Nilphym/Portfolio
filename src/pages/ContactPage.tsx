import React from 'react';
import {
  TextField,
  Box,
  Typography,
  styled,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Send, Email, PhoneAndroid } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import { Button, PageHeading, ContactLink } from '../components';

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Form = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  }
}));

const LargeTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    gridColumn: 'span 2'
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '2rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  }
}));

export const ContactPage = () => {
  const { handleSubmit, register } = useForm({ defaultValues });
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.up('sm'));

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box
      sx={{
        height: '100%',
        paddingBottom: '2rem',
        display: 'grid',
        gridTemplateRows: 'min-content 1fr',
        alignItems: 'center',
        gap: '2rem'
      }}
    >
      <PageHeading>Contact</PageHeading>
      <ContentContainer>
        <Typography>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </Typography>
        <Box>
          <ContactLink
            Icon={Email}
            label="Email me"
            content="jedrzej.ratajczak1@gmail.com"
            href="mailto:jedrzej.ratajczak1@gmail.com"
          />
          <ContactLink
            Icon={PhoneAndroid}
            label="Call me"
            content="+48 664 595 720"
            href="tel:+48664595720"
          />
        </Box>
        <Form component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Name" {...register('name')} />
          <TextField label="Email" {...register('email')} />
          <LargeTextField label="Subject" {...register('subject')} />
          <LargeTextField
            label="Messsage"
            multiline
            rows={5}
            {...register('message')}
          />
          <Box
            sx={{
              gridColumn: matchesSmall ? '1 / 3' : '1 / 2',
              display: 'flex',
              justifyContent: 'end'
            }}
          >
            <Button startIcon={<Send />} type="submit">
              Send message
            </Button>
          </Box>
        </Form>
      </ContentContainer>
    </Box>
  );
};
