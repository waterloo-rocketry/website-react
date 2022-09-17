import { React } from 'react';
import { Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import DividerLine from '../components/DividerLine/DividerLine';
import SubsectionTitle from '../components/SubsectionTitle/SubsectionTitle';

import styles from './css/Join.module.css';

import joinCoverPhoto from '../img/join/cover_join.jpg';

const Join = () => {
  return (
    <>
      <CoverPhoto image={joinCoverPhoto} height="28rem" position="center bottom" />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="WHY JOIN US?">
            There are many benefits to joining a student design team. Learn
            invaluable engineering skills, meet likeminded and talented people,
            gain experience to put on a resume, and have fun. Join us, and you
            can even call yourself a rocket scientist. Our team is open to all,
            with no prior experience needed. At Waterloo Rocketry, we design,
            build, test, and launch rockets to altitudes of 30,000 feet. As a
            member of our team, you will have opportunities to make meaningful
            contributions to our projects, irrespective of your current experience
            level.
          </Content>
          <Content title="HOW DO I JOIN?">
            Use
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSewaG7r4s2cqx92y0XSWVFhUW3j89a3_qGRDDavCQ3JIQBJbw/viewform">
              this sign up form
            </a>
            {' '}
            to get started. We&apos;ll send you an invite to our
            Slack workspace, the team&apos;s main form of communication. If you haven&apos;t
            already, you can also join our
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/uwrocketry/">
              Facebook group
            </a>
            {' '}
            for important updates and
            announcements regarding the team.
          </Content>
        </Row>

        <DividerLine />

        <Row className={`my-0 ${styles.faqContainer}`}>
          <SubsectionTitle title="FREQUENTLY ASKED QUESTIONS" />
        </Row>

      </Container>
    </>
  );
};

export default Join;
