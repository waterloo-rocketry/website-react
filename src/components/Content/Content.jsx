import React from 'react';

import styles from './Content.module.css';

// Text content with a title at the top
const Content = ({ title, children }) => {
  return (
    <div>
      <h1 className={styles.contentTitle}>{title}</h1>
      <div className={styles.contentText}>
        {children}
      </div>
    </div>
  );
};

export default Content;
