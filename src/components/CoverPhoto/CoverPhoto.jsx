import React from 'react';

import styles from './CoverPhoto.module.css';

// A cover photo spanning the width of the page
const CoverPhoto = ({ style }) => {
  return (
    <div className={styles.coverPhoto} style={{ height: `${style.height}`, backgroundImage: `url(${style.backgroundImage})`, backgroundPosition: `${style.backgroundPosition}` }} />
  );
};

export default CoverPhoto;
