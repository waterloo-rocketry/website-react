import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../AwardItem.module.css';
import AwardItem from '../AwardItem';

// How to add awards:

const Awards = () => {
  return (
    <>
      <div id={`${styles.awards_cover}`} />
      <Container fluid>

        {/* 2019 */}
        <div className={`${styles.year}`}>
          <h3 className={`${styles.h3__year}`}>2019</h3>
          <hr width="95%" />
          <AwardItem
            RocketName="SotS"
            AwardName="SECOND PLACE - 30K LIQUID/HYBRID SRAD"
            AwardDescription="The Category Second Place Awards recognize the teams with the second highest overall scores in each of the six competition categories, with this category representing Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 30000 feet, moving us a division up from last year. Teams are scored on the project technical report, competency of design, quality of construction, degree of student development, flight performance, and operating procedures. Our team received this award for finishing second in our category at the 2019 IREC, with the debut flight of SOTS."
          />
        </div>

        {/* 2018 */}
        <div className={`${styles.year}`}>
          <h3>2018</h3>
          <hr width="95%" />
          <AwardItem
            RocketName="UXO"
            AwardName="FIRST PLACE - 10K LIQUID/HYBRID SRAD"
            AwardDescription="The Category First Place Awards recognize the teams with the highest overall scores in each of the six competition categories, with this category representing Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 10000 feet. Teams are scored on the project technical report, competency of design, quality of construction, degree of student development, flight performance, and operating procedures. Our team received this award for finishing first in our category at the 2018 IREC, with the debut flight of UXO."
          />
        </div>

        {/* 2017 */}
        <div className={`${styles.year}`}>
          <h3>2017</h3>
          <hr width="95%" />
          <AwardItem RocketName="VIDAR III" />
          <AwardItem RocketName="VIDAR III" />
        </div>
      </Container>

    </>
  );
};

export default Awards;
