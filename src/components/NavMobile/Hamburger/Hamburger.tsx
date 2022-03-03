import React from 'react';
import { useTheme } from '@mui/material/styles';

import './hamburgers.min.css';

type HamburgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  const theme = useTheme();

  return (
    <button
      style={{
        padding: '0.6rem 0.3rem 0.3rem',
        backgroundColor: theme.palette.background.default
      }}
      className={`hamburger hamburger--spring ${open && 'is-active'}`}
      type="button"
      onClick={() => setOpen((prevState) => !prevState)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
