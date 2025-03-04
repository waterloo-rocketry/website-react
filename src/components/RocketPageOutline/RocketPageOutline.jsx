import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import DividerLine from '../DividerLine/DividerLine';

import styles from './RocketPageOutline.module.css';

const RocketPageOutline = (
  {
    img, altText, title, mediaType = 'image', children,
  },
) => {
  return (
    <Container fluid className={styles.container}>
      <Row style={{ width: '95%' }}>
        <Col className={`${styles.rocketDiv} col-2`}>
          {mediaType === 'video' ? (
            <video
              className={`${styles.rocket} ${styles.rocketVideo}`}
              src={img}
              alt={altText}
              autoPlay
              loop
            >
              <track default kind="captions" />
            </video>
          ) : (
            <img className={styles.rocket} src={img} alt={altText} />
          )}
        </Col>
        <Col className={styles.description}>
          <h1>{title}</h1>
          <DividerLine />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default RocketPageOutline;
