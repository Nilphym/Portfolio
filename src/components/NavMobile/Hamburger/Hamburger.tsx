import React from 'react';
import ReactDOM from 'react-dom';

import './hamburgers.min.css';

type HamburgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  return ReactDOM.createPortal(
    <button
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 1500,
        transform: 'translateY(-50%)'
      }}
      className={`hamburger hamburger--spring ${open && 'is-active'}`}
      type="button"
      onClick={() => setOpen((prevState) => !prevState)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>,
    document.body
  );
};
