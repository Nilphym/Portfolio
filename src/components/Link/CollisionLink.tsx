import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const leftBubble = keyframes`
  0% {
    left: -20px;
  },

  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  },

  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  },
`;

const rightBubble = keyframes`
  0% {
    right: -20px;
  },

  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  },

  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
`;

export const CollisionLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  padding: '0.8rem 3rem',
  border: '1px solid currentColor',
  borderRadius: 0,
  overflow: 'hidden',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontSize: '0.875rem',

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    width: '20px',
    height: '20px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    zIndex: -1
  },

  '&:before': {
    left: '-20px',
    transform: 'translate(-50%, -50%)'
  },

  '&:after': {
    right: '-20px',
    transform: 'translate(50%, -50%)'
  },

  '&:hover': {
    transition: 'color 0.8s 0.4s',
    color: theme.palette.primary.contrastText,

    '&:before': {
      animation: `${leftBubble} 0.8s both`,
      animationDirection: 'alternate'
    },

    '&:after': {
      animation: `${rightBubble} 0.8s both`,
      animationDirection: 'alternate'
    }
  }
}));
