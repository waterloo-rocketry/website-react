import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import styles from './AwardItem.module.css';

// Component to add title and horizontal line
// Year: Number of year (Int)
const AwardYear = ({ Year }) => {
  return (
    <div>
      <h3 className={`${styles.h3__year}`}>{Year}</h3>
      <hr width="95%" />
    </div>
  );
};
AwardYear.defaultProps = {
  Year: 9999,
};

// Component to add a singular award
// RocketName: Name of Rocket (Str)
// AwardName: Name of Award (Str)
// AwardDescription: Description of Award (Str)
// ImageAddress: Address of Image relative to Award.jsx file (Image)
// ImageName: Name of Image for alt tag (Str)
const AwardItem = ({
  RocketName, AwardName, AwardDescription, ImageAddress, ImageName,
}) => {
  return (
    <div className={`${styles.award__wrapper}`}>
      <div className={`${styles.content_rocket_tag}`}>
        <h1>{RocketName}</h1>
      </div>
      <div className={`${styles.award_body}`}>
        <h2>{AwardName}</h2>
        <div className={`${styles.line}`} />
        <div className={`${styles.content_text}`}>
          <p>
            {AwardDescription}
          </p>
        </div>
      </div>
      <div>
        <img className={`${styles.poster}`} src={ImageAddress} alt={ImageName} />
      </div>
    </div>
  );
};
AwardItem.defaultProps = {
  RocketName: 'RocketName',
  AwardName: 'AwardName',
  AwardDescription: 'AwardDescription',
  ImageAddress: 'AwardName',
  ImageName: 'AwardDescription',
};

export { AwardItem, AwardYear };
