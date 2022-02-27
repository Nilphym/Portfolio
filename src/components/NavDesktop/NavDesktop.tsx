import React from 'react';
import {
  Home,
  Person,
  Architecture,
  Work,
  Email,
  GitHub,
  LinkedIn
} from '@mui/icons-material';

import { NavGroup } from './NavGroup';
import { routes } from '../../routes';
import { items } from '../../assets/text/navigation';
import { socials } from '../../assets/externalResources';

const navItems = [
  { IconComponent: Home, name: items.home, to: routes.home },
  { IconComponent: Person, name: items.about, to: routes.about },
  { IconComponent: Work, name: items.skills, to: routes.skills },
  { IconComponent: Architecture, name: items.projects, to: routes.projects },
  { IconComponent: Email, name: items.contact, to: routes.contact }
];

const navSocialsItems = [
  {
    IconComponent: GitHub,
    name: socials.gitHub.name,
    to: socials.gitHub.url
  },
  {
    IconComponent: LinkedIn,
    name: socials.linkedIn.name,
    to: socials.linkedIn.url
  }
];

export const NavDesktop = () => {
  return <NavGroup items={navItems} />;
};

export const NavDesktopSocials = () => {
  return <NavGroup unreelLeft items={navSocialsItems} />;
};
