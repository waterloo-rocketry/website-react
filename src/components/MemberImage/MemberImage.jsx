import React from 'react';

import styles from './MemberImage.module.css';

// A link consisting of an image, with a title below it, and a description
const MemberImage = ({
  image, name, descriptor, status = 'current',
}) => {
  let [boxOuterStyle, boxInnerStyle] = [styles.box_outer, styles.box_inner];
  if (status === 'alum' || status === 'alumni') {
    boxOuterStyle = styles.box_outer_alum;
    boxInnerStyle = styles.box_inner_alum;
  }
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={boxOuterStyle}>
      <div className={boxInnerStyle}>
        <div className={styles.text_holder}>
          <h1 className={styles.box_inner_h1} style={status === 'alum' ? { fontSize: '0.9rem' } : { fontSize: '1.3rem' }}>{name}</h1>
          <h2 className={styles.box_inner_h2} style={status === 'alum' ? { fontSize: '0.7rem' } : { fontSize: '1.0rem' }}>{descriptor}</h2>
        </div>
      </div>
    </div>
  );
};

export default MemberImage;
