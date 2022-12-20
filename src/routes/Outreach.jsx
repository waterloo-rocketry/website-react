import { React } from 'react';
import { Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';

import outreachCoverPhoto from '../img/outreach/cover_outreach.jpg';

const Outreach = () => {
  return (
    <>
      <CoverPhoto image={outreachCoverPhoto} style={{ height: '28rem', backgroundPosition: 'center bottom' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="OUTREACH">
            Waterloo Rocketry is a design team consisting entirely of students,
            and we love to share our work with the community around us!
            Outreach remains an important part of our work as we seek
            to inspire future generations of rocket scientists. Below
            are some events we&apos;ve put on in the past, both within the
            University of Waterloo and in the wider Kitchener-Waterloo region.
            If you&apos;d be interested in coordinating an outreach event with us,
            feel free to reach out to us at
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="mailto:contact@uwaterloorocketry.com">
              contact@uwaterloorocketry.com
            </a>
            !
          </Content>
        </Row>
      </Container>
    </>
  );
};

export default Outreach;
