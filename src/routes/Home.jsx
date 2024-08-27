import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import ImageLink from '../components/ImageLink/ImageLink';
import { Photo, Video } from '../components/Gallery/Gallery';

import styles from './css/Home.module.css';

import coverPhotoImage from '../img/home/cover_home.png';
import rocketsCoverImage from '../img/home/link_to_rockets.jpg';
import sponsorsCoverImage from '../img/home/link_to_sponsors.jpg';
import galleryCoverImage from '../img/home/link_to_gallery.jpg';

import pressReleasePhotoA from '../img/home/borealis.png';

const Home = () => (
  <>
    <CoverPhoto image={coverPhotoImage} style={{ backgroundPosition: '50% 70%' }} />
    <Container className={styles.pressReleaseContainer}>
      <Row>
        <Col md={8} className={styles.pressReleaseBox}>
          <p>
            <strong>FOR IMMEDIATE RELEASE: 08/23/24</strong>
          </p>
          <div className={styles.contactInfo}>
            <p>Waterloo Rocketry</p>
            <p>Engineering 5, University of Waterloo, 200 University Street West, Waterloo, ON</p>
            <p>
              <a href="mailto:contact@waterloorocketry.com">contact@waterloorocketry.com</a>
            </p>
          </div>
          <h2>
            Waterloo Rocketry Soars to New Heights with Canada’s First Liquid Engine Rocket Launch
          </h2>
          <p>
            <strong>Timmins, Ontario:</strong>
            {' '}
            Waterloo Rocketry, a student design team from the University of Waterloo,
            proudly announces a historic milestone in Canadian
            aerospace with the successful launch of
            ‘Borealis,’ the first-ever Canadian liquid bi-propellant rocket.
            The launch occurred on August 20, 2024,
            during the third annual Launch Canada event held just outside Timmins, ON.
          </p>
          <p>
            The ‘Borealis’ rocket, powered by a bi-propellant
            mixture of ethanol and nitrous oxide,
            reached an altitude of 5,855 metres
            (19,212 feet) and achieved a top speed of 1646 km/h before
            falling back to the ground under its own parachute. Designed entirely by students,
            building on years of team history, this rocket showcases the culmination of the advanced
            engineering capabilities developed by the team throughout its past 13 years.
          </p>
          <p>
            This accomplishment positions the University of Waterloo
            as a leading institution in Canadian student rocketry,
            joining a select group of universities globally that have
            successfully launched liquid engine rockets.
            In years to come, the team plans to continue building bigger
            and better liquid bi-propellant rockets,
            with sights set for higher altitudes, more complex payloads,
            and continued learning to further propel
            Canada into the global aerospace arena.
          </p>
        </Col>
        <Col md={4} className={styles.mediaBox}>
          <Photo link={pressReleasePhotoA} altText="Placeholder 1" />
          <Video link="https://www.youtube.com/embed/Z126ZESX3uA?si=K_Zxes8V2nKABoGa" title="Rocket Launch" />
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className="my-4 mx-2 gx-5 justify-content-center">
        <Col lg={{ span: 4 }}>
          <Content title="ABOUT US">
            Waterloo Rocketry is a student design team from the University of Waterloo in
            Waterloo, Ontario. We currently have around 50 members, primarily
            undergraduate students in engineering, science, and mathematics. We design,
            build, and launch rockets to a target altitude of 30,000&apos; at the
            Intercollegiate Rocket Engineering Competition each June at Spaceport America,
            New Mexico. Our team&apos;s primary objective is to provide students
            with hands-on learning opportunities in research, design, analysis, fabrication, and
            testing throughout the entire engineering design cycle.
          </Content>
        </Col>
        <Col lg={{ span: 4, offset: 1 }}>
          <Content title="JOIN US">
            We are dedicated to learning aerospace engineering in a competitive hands-on
            environment through the Intercollegiate Rocket Engineering Competition.
            Our team is open to all, with no experience required to join. For more information,
            {' '}
            <a href="join">visit our Join page</a>
          </Content>
        </Col>
      </Row>
      <Row className={`${styles.imageLinkRow} px-md-5 py-4`}>
        <Col md={4}>
          <ImageLink title="ROCKETS" image={rocketsCoverImage} link="rockets">
            Take a look at what we&apos;ve worked on in the past.
          </ImageLink>
        </Col>
        <Col md={4}>
          <ImageLink title="SPONSORS" image={sponsorsCoverImage} link="sponsors">
            We are grateful to our sponsors. Please take a look at who they are.
          </ImageLink>
        </Col>
        <Col md={4}>
          <ImageLink title="GALLERY" image={galleryCoverImage} link="https://www.flickr.com/photos/uwrocketry/">
            A picture is worth a thousand words. Learn more about us through our photos.
          </ImageLink>
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
