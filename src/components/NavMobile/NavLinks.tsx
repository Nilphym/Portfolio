import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, styled } from '@mui/material';

type NavLinksProps = {
  navLinks: Array<{ name: string; url: string }>;
  closeNavbar: () => void;
};

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary
}));

export const NavLinks = ({ navLinks, closeNavbar }: NavLinksProps) => {
  return (
    <List onClick={closeNavbar} onKeyDown={closeNavbar}>
      <Divider />
      {navLinks.map(({ name, url }) => (
        <Fragment key={name}>
          <StyledLink to={url}>
            <ListItem sx={{ textAlign: 'center' }} button>
              <ListItemText primary={name} />
            </ListItem>
          </StyledLink>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};
