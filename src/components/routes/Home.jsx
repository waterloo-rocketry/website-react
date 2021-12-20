import { React } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../CoverPhoto';
import Content from './Content';
import ImageLink from '../ImageLink';

import coverPhotoImage from '../../img/cover_photo.jpg';
import rocketsCoverImage from '../../img/rockets_cover.jpg';
import sponsorsCoverImage from '../../img/sponsors_cover.jpg';
import galleryCoverImage from '../../img/gallery_cover.jpg';

const Home = () => {
  return (
    <>
      <CoverPhoto image={coverPhotoImage} />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Content title="ABOUT US">
              Waterloo Rocketry is a student design team from the University of Waterloo in Waterloo,
              Ontario. We currently have around 50 members, primarily undergraduate students in
              engineering, science, and mathematics. We design, build, and launch rockets to a target
              altitude of 30,000&apos; at the Intercollegiate Rocket Engineering Competition each June
              at Spaceport America, New Mexico. Our team&apos;s primary objective is to provide students
              with hands-on learning opportunities in research, design, analysis, fabrication, and
              testing throughout the entire engineering design cycle.
            </Content>
          </Col>
          <Col md={6}>
            <Content title="JOIN US">
              We are dedicated to learning aerospace engineering in a competitive hands-on environment
              through the Intercollegiate Rocket Engineering Competition.
              Our team is open to all, with no experience required to join. For more information,
              {' '}
              <a href="join">visit&nbsp;our&nbsp;Join&nbsp;page</a>
              .
            </Content>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#f7f7f7' }}>
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
