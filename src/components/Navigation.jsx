import React from 'react';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';

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
          <Nav.Link className={styles.navbarLink} href="join">
            JOIN
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="competition">
            COMPETITION
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="sponsors">
            SPONSORS
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="rockets">
            ROCKETS
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="subsystems">
            SUBSYSTEMS
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="team">
            TEAM
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="awards">
            AWARDS
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="outreach">
            OUTREACH
          </Nav.Link>
          <Nav.Link className={styles.navbarLink} href="contact">
            CONTACT
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
