import React from 'react';

import './CoverPhoto.css';

// A cover photo spanning the width of the page
const CoverPhoto = ({ image }) => {
  return (
    <div className="cover-photo" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default CoverPhoto;
