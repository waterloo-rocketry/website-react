import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bannerLogo from '../img/banner_logo.png';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="mx-2" fluid>
        <Navbar.Brand href="/">
          <img
            src={bannerLogo}
            alt="Waterloo Rocketry Banner Logo"
            className="banner-logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="home">JOIN</Nav.Link>
          <Nav.Link href="comppetition">COMPETITION</Nav.Link>
          <Nav.Link href="sponsors">SPONSORS</Nav.Link>
          <Nav.Link href="rockets">ROCKETS</Nav.Link>
          <Nav.Link href="subsystems">SUBSYSTEMS</Nav.Link>
          <Nav.Link href="team">TEAM</Nav.Link>
          <Nav.Link href="awards">AWARDS</Nav.Link>
          <Nav.Link href="outreach">OUTREACH</Nav.Link>
          <Nav.Link href="contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
