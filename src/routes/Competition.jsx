import { React } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import ImageBox from '../components/ImageBox/ImageBox';

import compCoverImage from '../img/competition/cover_comp.jpg';
import LCImage from '../img/competition/lc_group.jpg';

const Competition = () => {
  return (
    <>
      <CoverPhoto image={compCoverImage} style={{ backgroundPosition: '50% 90%' }} />
      <Container fluid>
        <Row className="my-4 mx-0 gx-5 justify-content-left">
          <Col className="" lg={{ span: 6 }}>
            <Content title="LAUNCH CANADA">
              <p>
                The Launch Canada Challenge is Canada’s
                first-ever major national rocketry competition.
                It brings together Canada’s passionate and
                rapidly growing amateur and student rocketry community
                with academia, industry and government to facilitate
                the development of national talent in the interdisciplinary
                field of rocket engineering, while fostering a strong
                culture of safety.
              </p>
              <p>
                The team have competed in the 2023 Launch Canada challenge
                with a solid rocket - 10K KOTS Solid, and again in 2024 with
                Borealis - the first-ever Canadian liquid engine rocket.
              </p>
              <p>
                Visit the official competition page
                {' '}
                <a href="https://www.launchcanada.org/">here</a>
                .
              </p>
            </Content>
          </Col>
          <Col lg={{ span: 5 }}>
            <ImageBox
              image={LCImage}
              width="40rem"
            />
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Competition;
