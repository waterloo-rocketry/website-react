import React from 'react';

import styles from './HomeContent.module.css';

// Text content with a title at the top
const HomeContent = ({ title, hr = false, children }) => {
  return (
    <>
      <h1 className={styles.homeContentTitle}>{title}</h1>
      {hr && <hr className="homeContentTitleHr" />}
      <p className={styles.homeContentText}>
        {children}
      </p>
    </>
  );
};

export default HomeContent;
