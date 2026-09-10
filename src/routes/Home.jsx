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
import { Photo } from '../components/Gallery/Gallery';

import styles from './css/Home.module.css';

import coverPhotoImage from '../img/home/cover_home.webp';
import rocketsCoverImage from '../img/home/link_to_rockets.webp';
import sponsorsCoverImage from '../img/home/link_to_sponsors.webp';
import galleryCoverImage from '../img/home/link_to_gallery.webp';

import aboutUsImage1 from '../img/rocket/aurora-2025.webp';

import pressReleasePhotoA from '../img/home/Polaris Launch 1 - Alex Kari.JPG';

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
              <strong>FOR IMMEDIATE RELEASE: 08/28/26</strong>
            </p>
            <div className={styles.contactInfo}>
              <p>Waterloo Rocketry</p>
              <p>Engineering 5, University of Waterloo, 200 University Street West, Waterloo, ON</p>
              <p>
                <a href="mailto:contact@waterloorocketry.com">contact@waterloorocketry.com</a>
              </p>
            </div>
            <h2>
              Waterloo Rocketry Reaches New Heights With World&apos;s Highest Amateur Liquid Bi-propellant Rocket
            </h2>
            <p>
              <strong>Timmins, Ontario:</strong>
              {' '}
              Waterloo Rocketry, a student design team from the University of Waterloo,
              proudly announces a historic milestone in Canadian aerospace with the successful
              launch of ‘Polaris’, the highest flying amateur liquid bi-propellant rocket.
              The launch occurred on August 20, 2026 in Timmins, ON.
            </p>
            <p>
              ‘Polaris’, powered by ethanol and nitrous oxide and standing at over 17 feet,
              reached an altitude of 19,383 metres (63,497 feet) and achieved a top speed of 3108 km/h (Mach 2.7).
              The rocket also demonstrated active roll control during its flight before falling back to the ground under its own parachute.
            </p>
            <p>
              Designed entirely by students, ‘Polaris’ is the result of thousands of hours of engineering work
              undertaken by dozens of undergrads, outside of their classwork and internships, and is an incredible
              testament to their dedication, collaboration, and skill.
            </p>
            <p>
              The University of Waterloo has become a leading institution in international collegiate rocketry,
              with ‘Polaris’ marking the team’s third liquid rocket and one of a handful of amateur liquid rocket flights worldwide.
            </p>
            <p>
              In future years, the team continues to develop higher-performing propulsion systems, more reliable flight electronics,
              advanced active control systems, and to continue to push the bounds of what student rocketry programs can do.
            </p>
          </Col>
          <Col md={4} className={styles.mediaBox}>
            <Photo link={pressReleasePhotoA} altText="Polaris Launch" />
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
