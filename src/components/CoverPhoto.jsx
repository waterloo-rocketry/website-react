import React from 'react';

const CoverPhoto = ({ image }) => {
  return (
    <div className="cover-photo" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default CoverPhoto;
