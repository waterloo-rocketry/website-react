import { React } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import ImageBox from '../components/ImageBox/ImageBox';

import DividerLine from '../components/DividerLine/DividerLine';

import outreachCoverPhoto from '../img/outreach/cover_outreach.jpg';
import afdPhoto from '../img/outreach/afd_logo.jpg';
import rdrPhoto from '../img/outreach/rocket_drag_race_2019.jpg';
import edPhoto from '../img/outreach/ed_session.jpg';

/* eslint-disable max-len */

const Outreach = () => {
  return (
    <>
      <CoverPhoto image={outreachCoverPhoto} style={{ height: '30rem', backgroundPosition: '50% 40%' }} />
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
        <DividerLine />
        <Row className="my-4 mx-2 gx-5 justify-content-left">
          <Col className="" sm={{ span: 8 }}>
            <Content title="AVIATION FUN DAY">
              <p className="content-text">
                Aviation Fun Day is an annual event held by the Region of Waterloo
                International Airport, featuring all things aviation. Proceeds go
                to support the Cambridge Self Help Food Bank and The Food Bank of
                Waterloo Region.
              </p>
              <p className="content-text">
                Waterloo Rocketry has displayed rockets that we&apos;ve flown in the past
                at this event since 2018, alongside other cool shows like vintage
                aircraft and classic cars. We demonstrate the our rocket&apos;s essential
                subsystems to the local community. Some systems we&apos;ve showcased in
                the past include:
              </p>
              <ul>
                <li>our student designed and manufactured combustion chamber</li>
                <li>our Remote Launch Control System, which is the wireless system we use to carry out launch procedures from afar</li>
                <li>samples of the solid fuel we&apos;ve used to power rockets at competition</li>
                <li>our recovery subsystem, which allows the rocket to land after launching</li>
              </ul>
              <p className="content-text">
                Check out event details
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.waterlooairport.ca/en/about-ykf/aviation-fun-day.aspx">
                  here
                </a>
                {' '}
                - or come experience it in person this year,
                from 10am-4pm on Saturday, June 27th, 2020!
              </p>
            </Content>
          </Col>
          <Col sm={{ span: 4 }}>
            <ImageBox
              image={afdPhoto}
              width="85%"
              height="auto"
            />
          </Col>
        </Row>
        <DividerLine />
        <Row className="my-4 mx-2 gx-5 justify-content-left">
          <Col className="" sm={{ span: 8 }}>
            <Content title="MODEL ROCKET COMPETITION">
              <p>
                The Model Rocket Competition is an annual event by Waterloo Rocketry.
                Participants in the event are invited to explore the field of rocketry
                by designing, building and launching their own model rockets.
              </p>
              <p>
                Day one consists of a quick introduction to the basics of
                rocket engineering, such as propulsion and recovery systems,
                giving students the necessary background to design their
                own rocket with OpenRocket flight simulation software.
                We then provide them with the supplies to bring their ideas
                to life, and students make everything from the airframe to
                the parachutes. Participants are also encouraged to use any
                other means of fabrication (at their own expense). The only
                component that is not student designed and constructed is
                the solid rocket motor (that would be a challenge beyond
                the scope of this competition).
              </p>
              <p>
                Day two of the competition is for rocket launches! Participants
                get to try to launch and recover their self-built rockets.
                Flying however tends to be the easy part, and recovery of the
                rockets is what tends to be more challenging. Rockets are also
                judged, and prizes are given for criteria such as flight,
                construction, and appearance.
              </p>
              <p>
                We hold this event at the beginning of every fall term.
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/uwrocketry/">
                  Watch out for it by liking our Facebook page.
                </a>
                {' '}
                The Model Rocket Competition is a great opportunity for beginners
                and experts alike to learn and have some fun with rocket
                science - we invite you to check it out, and hope you have a blast!
              </p>
            </Content>
          </Col>
          <Col sm={{ span: 4 }}>
            <ImageBox
              image={rdrPhoto}
              width="85%"
              height="auto"
            />
          </Col>
        </Row>
        <DividerLine />
        <Row className="my-4 mx-2 gx-5 justify-content-left">
          <Col className="" sm={{ span: 8 }}>
            <Content title="ROCKETRY EDUCATION SESSION">
              <p>
                The ESQ (Engineering Science Quest) day camp for children is
                run throughout the summer at University of Waterloo. Children
                participate in a number of science related actives. One of the
                activities is to visit with student engineering teams. Over the
                past years, we have run outreach sessions for over 250 children,
                most recently in 2018. We have taught them some of the basic
                principles of rocket design and flown small model rockets with them.
              </p>
              <p>
                We&apos;ve also coordinated outreach events with individual groups in the
                past, tailoring the depth of content we cover to the level of the
                students we visit. Specific examples include high school presentations,
                where we showcased
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.waterloorocketry.com/vidar3">
                  Vidar III
                </a>
                , and intro to rocketry tutorials for
                local Air Cadet squadrons.
              </p>
            </Content>
          </Col>
          <Col sm={{ span: 4 }}>
            <ImageBox
              image={edPhoto}
              width="85%"
              height="auto"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Outreach;
