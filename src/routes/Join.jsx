import { React } from 'react';
import { Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import DividerLine from '../components/DividerLine/DividerLine';
import SubsectionTitle from '../components/SubsectionTitle/SubsectionTitle';
import FAQComponent from '../components/FAQComponent/FAQComponent';

import styles from './css/Join.module.css';

import joinCoverPhoto from '../img/join/cover_join.jpg';

const Join = () => {
  return (
    <>
      <CoverPhoto image={joinCoverPhoto} style={{ backgroundPosition: '50% 65%' }} />
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
            Slack workspace, the team&apos;s main form of communication.
          </Content>
        </Row>

        <DividerLine />

        <Row className={`${styles.faqContainer}`}>
          <SubsectionTitle title="FREQUENTLY ASKED QUESTIONS" />
          <FAQComponent questionText="Who can join the team? What requirements or prerequisites are there? How do I apply?" index={0}>
            <div>
              The only requirement to join the team is to be a student at the University of
              Waterloo. No prior experience is required, and there is no application process. The
              team is open and welcome to everyone, not just engineering students.
            </div>
          </FAQComponent>

          <FAQComponent questionText="What time commitment is required of team members?" index={1}>
            <div>
              There is no &quot;time commitment&quot; that a team member needs to meet. Of course,
              if you take on work for a project,
              then it is expected that you communicate with the project team to ensure it is finished in
              a reasonable time period.
              In terms of &quot;hours per week&quot; etc, however, you can put as much or as little
              in as you wish.
            </div>
          </FAQComponent>

          <FAQComponent questionText="What do the team's day to day operations look like?" index={2}>
            <div>
              The team is split up into different projects - for example - electrical, recovery,
              propulsion, etc. Each project has regular meetings, usually once a week, while the
              entire team gathers for a weekly general meeting.
              Each project is responsible for a different part of the rocket and supporting
              equipment.
              A project lead supervises the operation of each project. You are not restricted to
              any one project; you can be a part of as many as you want. Communication is done
              primarily through a Slack workspace.
            </div>
          </FAQComponent>

          <FAQComponent questionText="Can I join Waterloo Rocketry if I am in a different student design team?" index={3}>
            <div>
              Sure! We don&apos;t mind if you&apos;re on another design team, but there&apos;s no
              guarantee our meeting times won&apos;t overlap.
            </div>
          </FAQComponent>

          <FAQComponent questionText="What will I be able to do as a new member?" index={4}>
            <div>
              What you start off with will depend on what stage our projects are at, as well as your
              own preference and comfort level.
              There is usually a variety of ongoing tasks to choose from. Some examples of past
              projects that first-years have worked on are:
              <br />
              <br />
              <ul className="join-ul ml-3">
                <li>Designing a test operations procedures simulator in Python</li>
                <li>
                  Sourcing and obtaining sponsorship for components of our data acquisition system
                </li>
                <li>
                  Designing part of a scientific experiment measuring radiation throughout flight
                </li>
                <li>Machining an aluminium bulkhead for the recovery system</li>
                <li>Representing the team at high school and university outreach events</li>
              </ul>
              Check out our
              {' '}
              <a href="subsystems">subsytems page</a>
              {' '}
              for more information. Each subsystem has a &quot;currently working on&quot;
              section that can provide a better glimpse of available work.
            </div>
          </FAQComponent>

          <FAQComponent questionText="How can I learn more about the team in general?" index={5}>
            <div>
              To learn about the annual competition we compete in, see our
              {' '}
              <a href="competition">competition page</a>
              .
              <br />
              To learn about all the projects our team is comprised of, see our
              {' '}
              <a href="subsystems">subsystems page</a>
              .
              <br />
              To learn about the rockets we build each year, see our
              {' '}
              <a href="rockets">rockets page</a>
              .
              <br />
              To learn about our team members, see our
              {' '}
              <a href="team">team page</a>
              .
              <br />
              To learn about our past successes, see our
              {' '}
              <a href="awards">awards page</a>
              .
            </div>
          </FAQComponent>
        </Row>
      </Container>
    </>
  );
};

export default Join;
