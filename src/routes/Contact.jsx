import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';

import DividerLine from '../components/DividerLine/DividerLine';

import styles from './css/Contact.module.css';

import contactCoverPhoto from '../img/contact.jpg';
import IgIcon from '../img/instagram-logo.png';

/* eslint-disable max-len */

const Contact = () => {
  return (
    <>
      <CoverPhoto
        image={contactCoverPhoto}
        style={{ height: '22rem', backgroundPosition: '50% 100%' }}
      />
      <Container fluid>
        <Row lg={2} md={2} sm={1} xs={1}>
          <Col className="my-5 mx-md-0 mx-sm-2 text-center" style={{ maxWidth: '40rem' }}>
            <div className={styles.iframe} style={{ maxWidth: '30rem', margin: '0 auto' }}>
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1447.7052036526507!2d-80.53989328187978!3d43.472904841579165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4011c244c4f%3A0xb10643898bf7c87!2sEngineering+5!5e0!3m2!1sen!2sca!4v1391451986334"
                width="100%"
                height="450"
                style={{ border: 0, maxWidth: '450px' }}
              />
            </div>
          </Col>
          <Col className="my-lg-5 my-md-5 mx-md-0 mx-sm-4 justify-content-center" style={{ maxWidth: '31rem' }}>
            <h1 className={styles.email}>
              For general inquiries, please contact us at
              {' '}
              <a href="mailto:contact@waterloorocketry.com">contact@waterloorocketry.com</a>
            </h1>
            <div style={{ maxWidth: '30rem' }}>
              <DividerLine />
            </div>
            <Content title="ADDRESS">
              <p className="content-text">
                1008, Engineering 5
                {' '}
                <br />
                200 University Avenue
                {' '}
                <br />
                Waterloo, ON
                {' '}
                <br />
                N2L 3E9
              </p>
            </Content>
            <Content title="ACADEMIC ADVISOR">
              <p className="content-text">
                Dr. Andrew J.B. Milne
                <br />
                Graduate Attributes Lecturer
                <br />
                Mechanical and Mechatronics Engineering Department
                <br />
                University of Waterloo (E7 3332)
                <br />
                BASc (U Waterloo), MSc, PhD (U Alberta), NSERC PDF (MIT)
                <br />
                <a href="mailto:ajbmilne@uwaterloo.ca">
                  ajbmilne@uwaterloo.ca
                </a>
              </p>
            </Content>
          </Col>
        </Row>
        <Col className="text-center">
          <Content title="MEDIA" />
          <DividerLine />
        </Col>
        <Row xl={4} lg={1} md={1} sm={1} xs={1} className="my-4 justify-content-center" style={{ overflowX: 'hidden' }}>

          <Col className="my-4 text-center">
            <a href="https://www.facebook.com/WaterlooRocketry/">
              <img alt="Facebook" className={styles.fb} src="https://duo.com/assets/img/customerlogos/tech-facebook.png" />
            </a>
          </Col>
          <Col className="my-4 text-center">
            <a href="https://www.instagram.com/waterloorocketry/">
              <img alt="Instagram" className={styles.ig} src={IgIcon} />
            </a>
          </Col>
          <Col className="my-4 text-center">
            <a href="https://www.flickr.com/photos/uwrocketry/albums">
              <img alt="Flickr" className={styles.fk} src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flickr_logo.png" />
            </a>
          </Col>
          <Col className="my-4 text-center">
            <a href="https://www.youtube.com/user/uwrocketry">
              <img alt="Youtube" className={styles.yt} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGb_-wlzPBl2X6V7SXwIwRVMGUi0ciOp5apm8IltXM_lqOfkUM" />
            </a>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Contact;
