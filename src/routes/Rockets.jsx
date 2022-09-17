import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Content from '../components/Content/Content';

const Rockets = () => {
  return (
    <>
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Col lg={{ span: 4 }}>
            <Content title="ABOUT US">
              Placeholder
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
      <Container fluid />
    </>
  );
};

export default Rockets;
