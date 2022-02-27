import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Box, styled, ListItem, Link as MuiLink } from '@mui/material';
import type { ListItemProps } from '@mui/material/ListItem';
import type { IconProps } from '@mui/material/Icon';
import type { LinkProps as MuiLinkProps } from '@mui/material';
import type { Theme } from '@mui/material';

import { isExternal } from '../../utils/isExternal';

const iconSize = 3.5;

const ListItemStyled = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'unreelLeft'
})<ListItemProps & { unreelLeft: boolean }>(({ theme, unreelLeft }) => ({
  transform: unreelLeft ? 'scaleX(-1)' : '',
  borderRadius: '3rem',
  width: `${iconSize}rem`,
  height: `${iconSize}rem`,
  zIndex: 1,
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  },
  '&:hover .icon': {
    color: theme.palette.secondary.main
  },
  '&:hover .circle': {
    backgroundColor: theme.palette.primary.main
  }
}));

const linkStyles = ({
  theme,
  unreelLeft
}: {
  theme: Theme;
  unreelLeft: boolean;
}) => ({
  width: `${iconSize}rem`,
  paddingLeft: unreelLeft ? 'initial' : `${iconSize / 2}rem`,
  paddingRight: unreelLeft ? `${iconSize / 2}rem` : 'initial',
  borderRadius: '3rem',
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  opacity: 0,
  transition: 'width .3s, opacity .3s',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  transform: unreelLeft ? 'scaleX(-1)' : '',
  '&:hover': {
    width: '11rem',
    opacity: 1
  }
});

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'unreelLeft'
})<LinkProps & { unreelLeft: boolean }>(
  ({ theme, unreelLeft }: { theme: Theme; unreelLeft: boolean }) => ({
    ...(linkStyles({ theme, unreelLeft }) as object)
  })
);

const StyledExternalLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'unreelLeft'
})<MuiLinkProps & { unreelLeft: boolean }>(
  ({ theme, unreelLeft }: { theme: Theme; unreelLeft: boolean }) => ({
    ...(linkStyles({ theme, unreelLeft }) as object)
  })
);

const Circle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'unreelLeft'
})<IconProps & { unreelLeft: boolean }>(({ theme, unreelLeft }) => ({
  transform: unreelLeft ? 'scaleX(-1)' : '',
  borderRadius: '3rem',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  backgroundColor: theme.palette.secondary.main,
  transition: 'background-color .3s'
}));

type NavIconProps = {
  unreelLeft: boolean;
} & NavIconItem;

export type NavIconItem = {
  IconComponent: React.ComponentType<any>;
  name: string;
  to: string;
};

export const NavIcon = ({
  unreelLeft,
  IconComponent,
  name,
  to
}: NavIconProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const Icon = styled(IconComponent, {
    shouldForwardProp: (prop) => prop !== 'unreelLeft'
  })<IconProps & { unreelLeft: boolean }>(({ unreelLeft }) => ({
    transform: unreelLeft ? 'scaleX(-1)' : '',
    zIndex: 3,
    pointerEvents: 'none'
  }));

  return (
    <ListItemStyled unreelLeft={unreelLeft}>
      <Icon
        sx={{ color: match ? 'secondary.main' : '' }}
        unreelLeft={unreelLeft}
        className="icon"
      />
      <Circle
        sx={{ backgroundColor: match ? 'primary.main' : '' }}
        unreelLeft={unreelLeft}
        className="circle"
      />
      {isExternal({ link: to }) ? (
        <StyledExternalLink
          unreelLeft={unreelLeft}
          href={to}
          target="_blank"
          rel="noopener"
        >
          {name}
        </StyledExternalLink>
      ) : (
        <StyledLink unreelLeft={unreelLeft} to={to}>
          {name}
        </StyledLink>
      )}
    </ListItemStyled>
  );
};
