import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto';
import Content from '../components/Content';
import ImageLink from '../components/ImageLink';

import styles from './Home.module.css';

import coverPhotoImage from '../img/cover_photo.jpg';
import rocketsCoverImage from '../img/rockets_cover.jpg';
import sponsorsCoverImage from '../img/sponsors_cover.jpg';
import galleryCoverImage from '../img/gallery_cover.jpg';

const Rockets = () => {
  return (
    <>
      <CoverPhoto image={coverPhotoImage} />
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
              <a href="join">visit&nbsp;our&nbsp;Join&nbsp;page</a>
              .
            </Content>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rockets;
