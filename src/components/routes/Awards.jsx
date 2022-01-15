import { React } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../AwardItem.module.css';
import { AwardItem, AwardYear } from '../AwardItem';

import SRAD19Image from '../../img/awards/30k_SRAD19.png';
import SRAD18Image from '../../img/awards/10k_SRAD18.png';
import SRAD17Image from '../../img/awards/10k_SRAD17.png';
import TechincalExcellenceImage from '../../img/awards/technical_excellence.png';

const Awards = () => {
  return (
    <>
      <div id={`${styles.awards_cover}`} />
      <Container fluid>

        <div>
          <AwardYear Year={2019} />
          <AwardItem
            RocketName="SotS"
            AwardName="SECOND PLACE - 30K LIQUID/HYBRID SRAD"
            AwardDescription="The Category Second Place Awards recognize the teams with the second highest overall scores in each of the six competition categories, with this category representing Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 30000 feet, moving us a division up from last year. Teams are scored on the project technical report, competency of design, quality of construction, degree of student development, flight performance, and operating procedures. Our team received this award for finishing second in our category at the 2019 IREC, with the debut flight of SOTS."
            ImageAddress={SRAD19Image}
            ImageName="Second Place - 30k Liquid/Hybrid Srad"
          />
        </div>

        <div>
          <AwardYear Year={2018} />
          <AwardItem
            RocketName="UXO"
            AwardName="FIRST PLACE - 10K LIQUID/HYBRID SRAD"
            AwardDescription="The Category First Place Awards recognize the teams with the highest overall scores in each of the six competition categories, with this category representing Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 10,000 feet. Teams are scored on the project technical report, competency of design, quality of construction, degree of student development, flight performance, and operating procedures. Our team received this award for finishing first in our category at the 2018 IREC, with the debut flight of UXO."
            ImageAddress={SRAD18Image}
            ImageName="First Place - 10k Liquid/Hybrid Srad"
          />
        </div>

        <div>
          <AwardYear Year={2017} />
          <AwardItem
            RocketName="VIDAR III"
            AwardName="JIM FURFARO AWARD FOR TECHNICAL EXCELLENCE"
            AwardDescription="The Jim Furfaro Award for Technical Excellence recognizes a team which demonstrates exceptional engineering discipline and technical skill through their analyses and conclusions, project or program planning and execution, operational procedure, manufacturing processes, iterative improvement, systems engineering methodology, and robust design. Our team was presented with this award after our successful launch and recovery of Vidar III at the 2017 IREC, based on our iterative design on the Vidar system over the previous four years."
            ImageAddress={TechincalExcellenceImage}
            ImageName="Jim Furfaro Award for Technical Excellence"
          />
          <AwardItem
            RocketName="VIDAR III"
            AwardName="FIRST PLACE - 10K LIQUID/HYBRID SRAD"
            AwardDescription="The Category First Place Awards recognize the teams with the highest overall scores in each of the six competition categories, with this category representing Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 10,000 feet. Teams are scored on the project technical report, competency of design, quality of construction, degree of student development, flight performance, and operating procedures. Our team received this award for finishing first in our category at the 2017 IREC."
            ImageAddress={SRAD17Image}
            ImageName="First Place - 10k Liquid/Hybrid Srad"
          />
        </div>

      </Container>
    </>
  );
};

export default Awards;
