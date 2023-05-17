import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import DividerLine from '../DividerLine/DividerLine';

import styles from './RocketPageOutline.module.css';

const RocketPageOutline = (
  {
    img, altText, title, children,
  },
) => {
  return (
    <Container fluid className={styles.container}>
      <Row style={{ width: '95%' }}>
        <Col className={`${styles.rocketDiv} col-2`}>
          <img className={styles.rocket} src={img} alt={altText} />
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
