import React from 'react';

import './hamburgers.min.css';

type HamburgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  return (
    <button
      style={{ zIndex: 1500 }}
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
