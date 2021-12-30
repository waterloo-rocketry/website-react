import React from 'react';

import styles from './CoverPhoto.module.css';

// A cover photo spanning the width of the page
const CoverPhoto = ({ image }) => {
  return (
    <div className={styles.coverPhoto} style={{ backgroundImage: `url(${image})` }} />
  );
};

export default CoverPhoto;
