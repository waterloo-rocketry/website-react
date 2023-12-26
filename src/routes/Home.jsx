import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import ImageLink from '../components/ImageLink/ImageLink';

import styles from './css/Home.module.css';

import coverPhotoImage from '../img/home/cover_home.jpg';
import rocketsCoverImage from '../img/home/link_to_rockets.jpg';
import sponsorsCoverImage from '../img/home/link_to_sponsors.jpg';
import galleryCoverImage from '../img/home/link_to_gallery.jpg';

const Home = () => {
  return (
    <>
      <CoverPhoto image={coverPhotoImage} style={{ backgroundPosition: '50% 70%' }} />
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
              .
            </Content>
          </Col>
        </Row>
        <Row className={`${styles.imageLinkRow} px-md-5 py-4`}>
          <Col md={4}>
            <ImageLink title="ROCKETS" image={rocketsCoverImage} link="rockets">Take a look at what we&apos;ve worked on in the past.</ImageLink>
          </Col>
          <Col md={4}>
            <ImageLink title="SPONSORS" image={sponsorsCoverImage} link="sponsors">We are grateful to our sponsors. Please take a look at who they are.</ImageLink>
          </Col>
          <Col md={4}>
            <ImageLink title="GALLERY" image={galleryCoverImage} link="https://www.flickr.com/photos/uwrocketry/">A picture is worth a thousand words. Learn more about us through our photos.</ImageLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
