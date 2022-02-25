import React from 'react';

import { CollisionLink } from './CollisionLink';

type LinkProps = {
  children: React.ReactNode;
  to: string;
};

export const Link = ({ children, to }: LinkProps) => {
  return <CollisionLink to={to}>{children}</CollisionLink>;
};
