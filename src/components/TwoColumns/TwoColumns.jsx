import { React } from 'react';
import { Col, Row } from 'react-bootstrap';

const TwoColumns = ({ title, children }) => {
  return (
  	<>
  	  <h2>{title}</h2>
  	  <Row>
        <Col>{children[0]}</Col>
        <Col>{children[1]}</Col>
  	  </Row>
  	</>
  );
};