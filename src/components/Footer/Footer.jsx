import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';

import styles from './Footer.module.css';

import facebookIcon from '../../img/icon_fb.webp';
import flickrIcon from '../../img/icon_flickr.webp';
import mailIcon from '../../img/icon_mail.webp';
import youtubeIcon from '../../img/icon_youtube.webp';

// Footer for all pages, containing links to social media
const Footer = () => {
  return (
    <Container className={styles.footer} fluid>
      <Col className={styles.footerCol} md={12}>
        <a className={styles.footerLink} href="https://www.facebook.com/WaterlooRocketry">
          <Image src={facebookIcon} alt="Facebook Icon" />
        </a>
        <a className={styles.footerLink} href="mailto:contact@waterloorocketry.com">
          <Image src={mailIcon} alt="Mail Icon" />
        </a>
        <a className={styles.footerLink} href="https://www.flickr.com/photos/64315121@N05/">
          <Image src={flickrIcon} alt="Flickr Icon" />
        </a>
        <a className={styles.footerLink} href="https://www.youtube.com/user/uwrocketry">
          <Image src={youtubeIcon} alt="YouTube Icon" />
        </a>
      </Col>
    </Container>
  );
};

export default Footer;
