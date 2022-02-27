import React from 'react';
import { List } from '@mui/material';

import { NavIcon } from './NavIcon';
import type { NavIconItem } from './NavIcon';

type NavGroupProps = {
  unreelLeft?: boolean;
  items: Array<NavIconItem>;
};

export const NavGroup = ({ unreelLeft = false, items }: NavGroupProps) => {
  return (
    <List
      sx={{
        width: '5rem',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: unreelLeft ? 'initial' : '1rem',
        right: unreelLeft ? '1rem' : 'initial',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      }}
    >
      {items.map((item) => (
        <NavIcon key={item.name} {...item} unreelLeft={unreelLeft} />
      ))}
    </List>
  );
};
