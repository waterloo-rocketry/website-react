import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import styles from './AwardItem.module.css';

/**
* Component to add title and horizontal line
* @param {Int} Year Number of year
*/
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

/**
* To add a singular award
* @param  {string} RocketName Name of Rocket
* @param {string} AwardName Name of Award
* @param {string} AwardDescription Description of Award
* @param {string} ImageAddress Address of Image relative to Award.jsx file
* @param {string} ImageName Name of Image for alt tag
*/
const AwardItem = ({
  RocketName, AwardName, children, ImageAddress, ImageName, ImageStyle,
}) => {
  return (
    <div className={styles.award__wrapper}>
      <div className={styles.content_rocket_tag}>
        <h1>{RocketName}</h1>
      </div>
      <div className={styles.award_body}>
        <h2>{AwardName}</h2>
        <div className={styles.line} />
        <div className={styles.content_text}>
          <p>
            {children}
          </p>
        </div>
      </div>
      <div>
        <img className={styles.poster} src={ImageAddress} alt={ImageName} style={ImageStyle} />
      </div>
    </div>
  );
};
AwardItem.defaultProps = {
  RocketName: 'RocketName',
  AwardName: 'AwardName',
  children: <span>Award Description</span>,
  ImageAddress: 'AwardName',
  ImageName: 'AwardDescription',
  ImageStyle: {},
};

export { AwardItem, AwardYear };
