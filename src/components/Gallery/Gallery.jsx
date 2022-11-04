import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import DividerLine from '../DividerLine/DividerLine';
import styles from './Gallery.module.css';

const MoreButton = ({ link }) => {
  return (
    <a href={link}>
      <div className={styles.morebutton}>
        <h1>MORE</h1>
      </div>
    </a>
  );
};

const Photo = ({ link, altText }) => {
  return (
    <div>
      <img src={link} alt={altText} className={styles.photo} />
    </div>
  );
};

const Video = ({ link, title }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title={title} className={`${styles.video} embed-responsive-item`} src={link} />
    </div>
  );
};

const Gallery = ({ title, morelink, children }) => {
  const taggedItems = React.Children.toArray(children).map((item, ind) => [item, ind]);
  const items = taggedItems.map((item) => {
    return (
      <Col key={item[1]}>
        {item[0]}
      </Col>
    );
  });
  return (
    <Container fluid className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.galleryTitle}>{title}</h2>
        <Row className={styles.upperPart}>
          <Col className={styles.dividerLine}>
            <DividerLine />
          </Col>
          <Col md={1} xs={3}>
            <MoreButton link={morelink} />
          </Col>
        </Row>
        <Row className={styles.galleryContainer}>{items}</Row>
      </div>
    </Container>
  );
};

export { Photo, Video, Gallery };
