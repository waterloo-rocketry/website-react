import React, { useRef } from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import BannerPhoto from '../components/BannerPhoto/BannerPhoto';
import HomeContent from '../components/HomeContent/HomeContent';
import ImageLink from '../components/ImageLink/ImageLink';
import { Photo, Video } from '../components/Gallery/Gallery';

import styles from './css/Home.module.css';

import coverPhotoImage from '../img/home/cover_home.webp';
import rocketsCoverImage from '../img/home/link_to_rockets.webp';
import sponsorsCoverImage from '../img/home/link_to_sponsors.webp';
import galleryCoverImage from '../img/home/link_to_gallery.webp';

import aboutUsImage1 from '../img/rocket/aurora-2025.webp';

import pressReleasePhotoA from '../img/home/aurora-logo.webp';

const Home = () => {
  const aboutUsRef = useRef(null);

  const handleScrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <BannerPhoto image={coverPhotoImage}>
        <div>
          <h1 className={styles.landingContainer}>
            <span style={{ fontWeight: 'bold', textAlign: 'left' }}>Waterloo Rocketry</span>
            <div className={styles.landingButtons}>
              <Button variant="dark" onClick={handleScrollToAboutUs} style={{ position: 'relative', left: '22%', top: '0' }}>Learn More</Button>
              <Button variant="dark" href="join" style={{ position: 'relative', left: '22%', top: '0' }}>Join Us</Button>
            </div>
          </h1>
        </div>
      </BannerPhoto>
      <Container ref={aboutUsRef} style={{ paddingTop: '80px' }}>
        <Row>
          <Col md={7}>
            <div>
              <HomeContent title="ABOUT US">
                <p>
                  Waterloo Rocketry is a student design team from the University of Waterloo in
                  Waterloo, Ontario. With a membership of around 50 students—primarily
                  undergraduates in engineering, science, and mathematics— the team is dedicated to
                  advancing rocketry in Canada while providing exceptional experiential learning
                  opportunities.
                </p>
                <p>
                  Each year, the team designs, builds, and launches rockets at Launch Canada,
                  the nation&apos;s premier rocketry competition.
                  In 2024, Waterloo Rocketry proudly made history with Borealis, Canada&apos;s
                  first-ever liquid engine rocket.
                  In 2025, the team followed up with Aurora, which more than doubled the Canadian
                  altitude record for liquid bi-propellant rockets.
                </p>
              </HomeContent>
            </div>
          </Col>
          <Col>
            <Row>
              <Photo link={aboutUsImage1} alt="About Us 1" style={{ borderRadius: '70%' }} />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={styles.pressReleaseContainer}>
        <Row>
          <Col md={8} className={styles.pressReleaseBox}>
            <p>
              <strong>FOR IMMEDIATE RELEASE: 08/24/25</strong>
            </p>
            <div className={styles.contactInfo}>
              <p>Waterloo Rocketry</p>
              <p>Engineering 5, University of Waterloo, 200 University Street West, Waterloo, ON</p>
              <p>
                <a href="mailto:contact@waterloorocketry.com">contact@waterloorocketry.com</a>
              </p>
            </div>
            <h2>
              Waterloo Rocketry&apos;s Aurora Rocket Shatters Records at Launch Canada 2025
            </h2>
            <p>
              <strong>Timmins, Ontario:</strong>
              {' '}
              Waterloo Rocketry, a student design team from the University of Waterloo,
              is excited to announce the successful launch of Aurora, the team&apos;s 2025 liquid
              bi-propellant rocket, at Launch Canada on Thursday, August 21st.
            </p>
            <p>
              Aurora soared to an altitude of about 38,000 feet at around Mach 2,
              more than doubling the team&apos;s standing Canadian altitude record for liquid
              bi-propellant rockets. Although the recovery system&apos;s parachutes did not
              survive—meaning the rocket could not be retrieved from the forest and is likely at
              the bottom of a lake—the team is immensely proud of this year&apos;s achievement.
            </p>
            <p>
              Designed and built entirely by students, Aurora represents a year of dedication,
              innovation, and teamwork. With this milestone, Waterloo Rocketry secured 2nd place
              in Launch Canada&apos;s Advanced category.
            </p>
            <p>
              The team extends a huge thank you to its sponsors for their generous support—this
              launch would not have been possible without them. Gratitude also goes to the
              University of Waterloo and the Sedra Student Design Centre for enabling the team
              to pursue ambitious projects like Aurora.
            </p>
          </Col>
          <Col md={4} className={styles.mediaBox}>
            <Photo link={pressReleasePhotoA} altText="Aurora Logo" />
            <Video link="https://www.youtube.com/embed/vRShaLdex7Q?si=k5kqdmuP8fEYu2LC" title="Rocket Launch" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className={`${styles.imageLinkRow} px-md-5 py-4`}>
          <Col md={4}>
            <ImageLink title="ROCKETS" image={rocketsCoverImage} link="rockets">
              Take a look at what we&apos;ve worked on in the past.
            </ImageLink>
          </Col>
          <Col md={4}>
            <ImageLink title="SPONSORS" image={sponsorsCoverImage} link="sponsors">
              We are grateful to our sponsors. Please take a look at who they are.
            </ImageLink>
          </Col>
          <Col md={4}>
            <ImageLink title="GALLERY" image={galleryCoverImage} link="https://www.flickr.com/photos/uwrocketry/">
              A picture is worth a thousand words. Learn more about us through our photos.
            </ImageLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
