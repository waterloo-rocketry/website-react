import React from 'react';

import './Footer.css';

import { Col, Container, Image } from 'react-bootstrap';
import facebookIcon from '../img/icon_fb.png';
import flickrIcon from '../img/icon_flickr.png';
import mailIcon from '../img/icon_mail.png';
import youtubeIcon from '../img/icon_youtube.png';

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Col className="footer-col" md={12}>
        <a className="footer-link" href="https://www.facebook.com/WaterlooRocketry">
          <Image src={facebookIcon} alt="Facebook Icon" />
        </a>
        <a className="footer-link" href="mailto:contact@waterloorocketry.com">
          <Image src={mailIcon} alt="Mail Icon" />
        </a>
        <a className="footer-link" href="https://www.flickr.com/photos/64315121@N05/">
          <Image src={flickrIcon} alt="Flickr Icon" />
        </a>
        <a className="footer-link" href="https://www.youtube.com/user/uwrocketry">
          <Image src={youtubeIcon} alt="YouTube Icon" />
        </a>
      </Col>
    </Container>
  );
};

export default Footer;
