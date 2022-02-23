import React from 'react';

import { CollisionButton } from './CollisionButton';

type ButtonProps = {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = ({ children, startIcon, endIcon }: ButtonProps) => {
  return (
    <CollisionButton variant="outlined" startIcon={startIcon} endIcon={endIcon}>
      {children}
    </CollisionButton>
  );
};
