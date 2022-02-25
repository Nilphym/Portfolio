import React, { Fragment } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, styled } from '@mui/material';

type NavLinksProps = {
  navLinks: Array<{ name: string; url: string }>;
  closeNavbar: () => void;
};

const StyledLink = styled(Link)({
  textDecoration: 'none'
});

const CustomLink = ({ children, to }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink to={to} sx={{ color: match ? 'primary.main' : 'text.primary' }}>
      {children}
    </StyledLink>
  );
};

export const NavLinks = ({ navLinks, closeNavbar }: NavLinksProps) => {
  return (
    <List onClick={closeNavbar} onKeyDown={closeNavbar}>
      <Divider />
      {navLinks.map(({ name, url }) => (
        <Fragment key={name}>
          <CustomLink to={url}>
            <ListItem sx={{ textAlign: 'center' }} button>
              <ListItemText primary={name} />
            </ListItem>
          </CustomLink>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};
