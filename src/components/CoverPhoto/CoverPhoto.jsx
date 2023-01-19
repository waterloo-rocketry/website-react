import React from 'react';

import styles from './CoverPhoto.module.css';

// A cover photo spanning the width of the page
const CoverPhoto = ({ image, style }) => {
  return (
    <div className={styles.coverPhoto} style={{ backgroundImage: `url(${image})`, ...style }} />
  );
};

export default CoverPhoto;
