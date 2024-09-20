import React from 'react';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import bannerLogoImage from '../../img/banner_logo.png';

// The navbar at the top of each page
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={styles.navbar}>
      <Container className={styles.navbarContainer} fluid>
        <Navbar.Brand as={Link} to="/">
          <Image
            src={bannerLogoImage}
            alt="Waterloo Rocketry Logo"
            className={styles.bannerLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className={`${styles.nav} justify-content-end`}>
            <Nav.Link as={Link} className={styles.navbarLink} to="join">
              JOIN
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="competition">
              COMPETITION
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="sponsors">
              SPONSORS
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="rockets">
              ROCKETS
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="subsystems">
              SUBSYSTEMS
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="team">
              TEAM
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="awards">
              AWARDS
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="outreach">
              OUTREACH
            </Nav.Link>
	    </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="documentation">
              DOCUMENTATION
            </Nav.Link>
            <Nav.Link as={Link} className={styles.navbarLink} to="contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
