import React from 'react';

import { Col, Button } from 'react-bootstrap';

import styles from './faq.module.css';

const faqButtonAnswer = ({ question, answer, id }) => {
  return (
    <>
      <Col lg="7" px="0" md="8" mx="auto">
        <button className={styles.btn} type="button" data-toggle="collapse" data-target={"#" + id} aria-expanded="false">
          {question}
        </button>
      </Col>
      <Col id={id} className={`collapse ${styles.answer}`} lg="7" px="0" md="8" mx="auto">
        <div className={styles.answerText}>
          {answer}
        </div>
      </Col>

      {/* <div className="col-10 col-md-8 col-lg-7 px-0 mx-auto">
        <button className={styles.btn} type="button" data-toggle="collapse" data-target={"#" + id} aria-expanded="false">
          {question}
        </button>
      </div>

      <div className="col-10 col-md-8 col-lg-7 mx-auto answer collapse" id={id}>
        <div className={styles.answerText}>
          {answer}
        </div>
      </div> */}
    </>
  );
};

export default faqButtonAnswer;