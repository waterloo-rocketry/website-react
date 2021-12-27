import React from 'react';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';

import routes from './routes';

import styles from './Navigation.module.css';

import bannerLogoImage from '../img/banner_logo.png';

// The navbar at the top of each page
const Navigation = () => {
  return (
    <Navbar variant="dark" fixed="top" className={styles.navbar}>
      <Container className={styles.navbarContainer} fluid>
        <Navbar.Brand href="/">
          <Image
            src={bannerLogoImage}
            alt="Waterloo Rocketry Logo"
            className={styles.bannerLogo}
          />
        </Navbar.Brand>
        <Nav>
          {routes.map((route) => {
            return (
              <Nav.Link
                className={styles.navbarLink}
                href={route.href}
              >
                {route.title.toUpperCase()}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
