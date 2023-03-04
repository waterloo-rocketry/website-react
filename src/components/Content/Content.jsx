import React from 'react';

import styles from './Content.module.css';

// Text content with a title at the top
const Content = ({ title, hr = false, children }) => {
  return (
    <>
      <h1 className={styles.contentTitle}>{title}</h1>
      {hr && <hr className="contentTitleHr" />}
      <p className={styles.contentText}>
        {children}
      </p>
    </>
  );
};

export default Content;
