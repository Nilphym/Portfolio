import React from 'react';

import { CollisionButton } from './CollisionButton';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  startIcon,
  endIcon
}: ButtonProps) => {
  return (
    <CollisionButton
      type={type}
      onClick={onClick}
      variant="outlined"
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </CollisionButton>
  );
};
