import { React } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto';
import Content from '../components/Content';
import ImageBox from '../components/ImageBox';

import compCoverImage from '../img/competition/cover_comp.jpg';
import SpaceportImage from '../img/competition/spaceport_group.jpg';

const Competition = () => {
  return (
    <>
      <CoverPhoto image={compCoverImage} height="35rem" position="50% 90%" />
      <Container fluid>
        <Row className="my-4 mx-0 gx-5 justify-content-left">
          <Col className="" lg={{ span: 6 }}>
            <Content title="INTERCOLLEGIATE ROCKET ENGINEERING COMPETITION">
              <p>
                The IREC is an international competition each June in Las Cruces,
                New Mexico. Hosted by the Experimental Sounding Rocket Association
                in partnership with Spaceport America, it is the flagship event
                of the Spaceport America Cup. Student teams compete in one of six
                categories, split between two different altitude categories and
                three different engine types. Each rocket carries a four kilogram
                payload. Students are strongly encouraged to design and construct
                each of their rocket&apos;s myriad systems themselves: everything from
                propulsion and structures to avionics, recovery, and payload.
                Overuse of commercial components is discouraged. In this way, the
                IREC promotes student design and a spirit of simple, holistic
                design: excess complexity is the bane of the student rocket
                engineering team.
              </p>
              <p>
                Visit the official competition page
                {' '}
                <a href="join">here</a>
                .
              </p>
            </Content>
          </Col>
          <Col lg={{ span: 5 }}>
            <ImageBox
              image={SpaceportImage}
              width="40rem"
            />
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Competition;
