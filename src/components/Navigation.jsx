import React from 'react';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import bannerLogo from '../img/banner_logo.png';

import routes from './routes';

import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar variant="dark" fixed="top" className="navbar">
      <Container className="mx-2 navbar-container" fluid>
        <Navbar.Brand href="/">
          <Image
            src={bannerLogo}
            alt="Waterloo Rocketry Banner Logo"
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
