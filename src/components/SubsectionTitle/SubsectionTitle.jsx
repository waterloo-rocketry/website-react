import React from 'react';

import styles from './SubsectionTitle.module.css';

// Text content with a title at the top
const SubsectionTitle = ({ title, fontSize, textAlign }) => {
  return (
    <div>
      <h1 className={styles.contentTitle} style={{ fontSize: `${fontSize}`, textAlign: `${textAlign}` }}>{title}</h1>
    </div>
  );
};

export default SubsectionTitle;
