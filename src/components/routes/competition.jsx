import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../CoverPhoto';
import Content from '../LargeContent';
import ImageLink from '../ImageLink';

import styles from './Home.module.css';

import compPhotoImage from '../../img/comp_photo.jpg';
import spacegroupCoverImage from '../../img/spaceport_group.jpg';

const Home = () => {
  return (
    <>
      <CoverPhoto image={compPhotoImage} />
      <Container fluid>
        <Row className={`${styles.imageLinkRow} px-md-5 py-4`}>
          <Col md={4}>
            <ImageLink title="Visit the official competition page" image={spacegroupCoverImage} link="https://www.soundingrocket.org/"> </ImageLink>
          </Col>
          <Col md={8}>
            <Content title="INTERCOLLEGIATE ROCKET ENGINEERING COMPETITION">
              The IREC is an international competition each June in Las Cruces, New Mexico.
              Hosted by the Experimental Sounding Rocket Association in partnership with
              Spaceport America, it is the flagship event of the Spaceport America Cup.
              Student teams compete in one of six categories, split between two different altitude
              categories and three different engine types. Each rocket carries a four kilogram
              payload. Students are strongly encouraged to design and construct each of their
              rocket&apos;s myriad systems themselves: everything from propulsion and structures to
              avionics, recovery, and payload. Overuse of commercial components is discouraged.
              In this way, the IREC promotes student design and a spirit of simple,holistic design:
              excess complexity is the bane of the student rocket engineering team.
            </Content>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
