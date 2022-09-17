import React from 'react';

import styles from './CoverPhoto.module.css';

// A cover photo spanning the width of the page
const CoverPhoto = ({ image, height, position }) => {
  return (
    <div className={styles.coverPhoto} style={{ height: `${height}`, backgroundImage: `url(${image})`, backgroundPosition: `${position}` }} />
  );
};

export default CoverPhoto;
