import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';

import sponsorCoverImage from '../img/sponsorship/cover_sponsors.jpg';

const Sponsors = () => {
  return (
    <>
      <CoverPhoto image={sponsorCoverImage} height="35rem" position="50% 90%" />
      <Container fluid>
        <Row className="my-4 mx-2 gx-4 justify-content-centre">
          <Col lg={{ span: 6 }}>
            <Content title="WANT TO BECOME A SPONSOR?">
              <p>
                If you would like to contact us about sponsorship opportunities, check out our
                sponsorship package here and please email us at
                <a href="mailto:contact@waterloorocketry.com"> contact@waterloorocketry.com</a>
              </p>
              <div> </div>
            </Content>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sponsors;
