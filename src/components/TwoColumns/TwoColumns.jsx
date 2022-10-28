import { React } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './TwoColumns.module.css';

const TwoColumns = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <Row className={styles.container}>
        <Col className={styles.leftColumn}>{children[0]}</Col>
        <Col className={styles.rightColumn}>{children[1]}</Col>
      </Row>
    </>
  );
};

export default TwoColumns;
