import React from 'react';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';

import routes from './routes';

import './Navigation.css';

import bannerLogo from '../img/banner_logo.png';

// The navbar at the top of each page
const Navigation = () => {
  return (
    <Navbar variant="dark" fixed="top" className="navbar">
      <Container className="navbar-container" fluid>
        <Navbar.Brand href="/">
          <Image
            src={bannerLogo}
            alt="Waterloo Rocketry Logo"
            className="banner-logo"
          />
        </Navbar.Brand>
        <Nav>
          {routes.map((route) => {
            return (<Nav.Link className="navbar-link" href={route.href}>{route.title.toUpperCase()}</Nav.Link>);
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
