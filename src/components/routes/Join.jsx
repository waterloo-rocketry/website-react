import { React } from 'react';
import {
  Col, Container, Row, Accordion,
} from 'react-bootstrap';

import CoverPhoto from '../CoverPhoto';
import Content from '../Content';

import coverPhotoImage from '../../img/cover_photo.jpg';

import FAQ from './FAQ.json';

const Home = () => {
  return (
    <>
      <CoverPhoto image={coverPhotoImage} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Col lg={{ span: 4 }}>
            <Content title="WHY JOIN US?">
              There are many benefits to joining a student design team. Learn invaluable engineering skills, meet likeminded and talented people, gain
              experience to put on a resume, and have fun. Join us, and you can even call yourself a rocket scientist. Our team is open to all, with no
              prior experience needed. At Waterloo Rocketry, we design, build, test, and launch rockets to altitudes of 30,000 feet. As a member of our team,
              you will have opportunities to make meaningful contributions to our projects, irrespective of your current experience level.
            </Content>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <Content title="HOW DO I JOIN?">
              Use
              {' '}
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSewaG7r4s2cqx92y0XSWVFhUW3j89a3_qGRDDavCQ3JIQBJbw/viewform">this sign up form</a>
              {' '}
              to get started. We&apos;ll send
              you an invite to our Slack workspace, the team&apos;s main form of communication.
              If you haven&apos;t already, you can also join our
              {' '}
              <a href="https://www.facebook.com/groups/uwrocketry/">Facebook group</a>
              {' '}
              for important updates and announcements regarding the team.
            </Content>
          </Col>
        </Row>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="FREQUENTLY ASKED QUESTIONS">
            <Accordion>
              {FAQ.map((option, i) => (
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>{option.question}</Accordion.Header>
                  <Accordion.Body>
                    {option.answer}
                    {option.bullets.map((bullet, j) => (
                      <li>{bullet}</li>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Content>
        </Row>
      </Container>
    </>
  );
};

export default Home;
