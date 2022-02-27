import React, { useState } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Drawer, Box, styled } from '@mui/material';

import { Hamburger } from './Hamburger';
import { NavHeader } from './NavHeader';
import { NavLinks } from './NavLinks';
import { NavFooter } from './NavFooter';
import { routes } from '../../routes';
import { items } from '../../assets/text/navigation';
import { socials } from '../../assets/externalResources';

const NavContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'min-content 1fr min-content',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default
}));

const iconLinks = [
  {
    component: <GitHub />,
    url: socials.gitHub.url
  },
  {
    component: <LinkedIn />,
    url: socials.linkedIn.url
  }
];

const navLinks = [
  {
    name: items.home,
    url: routes.home
  },
  {
    name: items.about,
    url: routes.about
  },
  {
    name: items.skills,
    url: routes.skills
  },
  {
    name: items.projects,
    url: routes.projects
  },
  {
    name: items.contact,
    url: routes.contact
  }
];

export const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const closeNavbar = () => setOpen(false);

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Drawer keepMounted anchor="left" open={open} onClose={closeNavbar}>
        <NavContainer>
          <NavHeader />
          <NavLinks navLinks={navLinks} closeNavbar={closeNavbar} />
          <NavFooter closeNavbar={closeNavbar} iconLinks={iconLinks} />
        </NavContainer>
      </Drawer>
    </>
  );
};
