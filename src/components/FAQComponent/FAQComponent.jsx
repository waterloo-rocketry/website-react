import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import styles from './FAQComponent.module.css';

const FAQComponent = ({ children, questionText, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="col-10 col-md-8 col-lg-7 px-0 mx-auto">
      <Button
        id={styles.FAQBtn}
        onClick={() => { setIsExpanded(!isExpanded); }}
        aria-controls={`FAQ${index}`}
        aria-expanded={isExpanded}
      >
        { questionText }
      </Button>
      <Collapse in={isExpanded}>
        <div>
          <div className={`mx-auto ${styles.answer}`} id={`FAQ${index}`}>
            { children }
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default FAQComponent;
