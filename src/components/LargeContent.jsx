import React from 'react';

import styles from './LargeContent.module.css';

// Text content with a title at the top
const LargeContent = ({ title, children }) => {
  return (
    <div>
      <h1 className={styles.largecontentTitle}>{title}</h1>
      <p className={styles.largecontentText}>
        {children}
      </p>

    </div>
  );
};

export default LargeContent;
