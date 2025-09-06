import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';

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
  const handleClick = () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = link;
    img.alt = altText;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';

    modal.appendChild(img);

    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      role="button"
      tabIndex={0}
      style={{ cursor: 'pointer' }}
    >
      <img src={link} alt={altText} className={styles.photo} />
    </div>
  );
};

const Video = ({ link, title }) => {
  return (
    <div className={styles.video}>
      <Ratio aspectRatio="16x9">
        <iframe title={title} src={link} />
      </Ratio>
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

export {
  Photo,
  Video,
  Gallery,
};
