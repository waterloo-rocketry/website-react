import { React } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AwardItem, AwardYear } from '../components/AwardItem/AwardItem';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';

import awardsCoverImage from '../img/awards/awards_cover.jpg';
import MOORE21Image from '../img/awards/DrGilMoore21.png';
import CANRGXImage from '../img/awards/CANRGXOutreach19.png';
import ADVANCED2024 from '../img/awards/advanced_2024.png';
import SRAD23Image from '../img/awards/30k_SRAD23.png';
import KOTS23Image from '../img/awards/10k_KOTS23.png';
import SRAD19Image from '../img/awards/30k_SRAD19.png';
import SRAD18Image from '../img/awards/10k_SRAD18.png';
import SRAD17Image from '../img/awards/10k_SRAD17.png';
import TechnicalExcellenceImage from '../img/awards/technical_excellence.png';

const Awards = () => {
  return (
    <>
      <CoverPhoto image={awardsCoverImage} style={{ backgroundPosition: '50% 52.5%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-right">
          <AwardYear Year={2024} />
          <AwardItem
            RocketName="Borealis"
            AwardName="FIRST PLACE - ADVANCED CATEGORY"
            ImageAddress={ADVANCED2024}
            ImageStyle={{ width: '300px', marginLeft: '2%' }}
            ImageName="First place - advanced category"
          >
            The Category First Place Awards recognize the teams with the highest overall
            scores in each of the three competition categories, with this category representing
            advanced flights, including Student Research and Designed two-stage, hybird and liquid
            engine rockets. Our team received this award for finishing first in our category
            at the 2024 LC, with the flight of Borealis - the  first-ever Canadian
            liquid bi-propellant rocket.
          </AwardItem>
          <AwardYear Year={2023} />
          <AwardItem
            RocketName="LotS"
            AwardName="SECOND PLACE - 30K LIQUID/HYBRID SRAD"
            ImageAddress={SRAD23Image}
            ImageName="Second Place - 30k Liquid/Hybrid Srad"
          >
            The Category Second Place Awards recognize the teams with the second highest overall
            scores in each of the six competition categories, with this category representing
            Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of
            30000 feet. Teams are scored on the project technical report, competency of design,
            quality of construction, degree of student development, flight performance, and
            operating procedures. Our team received this award for finishing second in our category
            at the 2023 IREC, with the debut flight of LOTS which reached the closest altitude
            to 30,000 ft ever achieved by an SRAD hybrid rocket at the Spaceport America Cup.
          </AwardItem>
          <AwardItem
            RocketName="10KKOTS"
            AwardName="THIRD PLACE - BASIC CATEGORY"
            ImageAddress={KOTS23Image}
            ImageStyle={{ width: '250px', marginLeft: '2%' }}
            ImageName="Third Place - Basic Category"
          >
            The basic category contains all single-stage vehicles using commercial off-the-shelf
            (COTS) rocket motors, with a target apogee of at least 10,000 feet. This challenge is
            geared towards both new teams just getting started in advanced rocketry, as well as
            more experienced teams that want to flight test new technologies for the first time
            using off-the-shelf propulsion systems.  In Waterloo Rocketry&apos;s case, the vehicle
            flown for this award was constructed in less than two months, representing a different
            kind of engineering challenge than the complex year-long development we are familiar
            with.
          </AwardItem>

          <AwardYear Year="2020 - 2021" />
          <AwardItem
            RocketName="KotS"
            AwardName="Dr. Gil Moore Award For Innovation"
            ImageAddress={MOORE21Image}
            ImageName="DR. GIL MOORE AWARD FOR INNOVATION"
          >
            The Dr. Gil Moore Award for Innovation recognizes a team whose project includes one or
            more features (including analytic or operational processes as well as components or
            assemblies) the judging panel finds genuinely novel, inventive, or solving a unique
            problem identified by the team. Our team was presented with this award for the design of
            a novel 3D-printed rocket nozzle. The manufacturing of this design was made possible
            through a sponsorship collaboration with the Multi-Scale Additive Manufacturing lab
            (MSAM) at the University of Waterloo.
          </AwardItem>

          <AwardYear Year={2019} />
          <AwardItem
            RocketName="SotS"
            AwardName="SECOND PLACE - 30K LIQUID/HYBRID SRAD"
            ImageAddress={SRAD19Image}
            ImageName="Second Place - 30k Liquid/Hybrid Srad"
          >
            The Category Second Place Awards recognize the teams with the second highest overall
            scores in each of the six competition categories, with this category representing
            Student Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of
            30000 feet, moving us a division up from last year. Teams are scored on the project
            technical report, competency of design, quality of construction, degree of student
            development, flight performance, and operating procedures. Our team received this
            award for finishing second in our category at the 2019 IREC, with the debut flight
            of SOTS.
          </AwardItem>
          <AwardItem
            RocketName="SotS"
            AwardName="CAN-RGX OUTREACH PRIZE"
            ImageAddress={CANRGXImage}
            ImageName="CANRGX OUTREACH PRIZE"
          >
            The Outreach Prize recognizes the team that demonstrated the largest impact of
            their microgravity project on students, the public, and our peers through various
            activities and presentations. A great emphasis of the CANRGX competition involves
            inspiring the next generation of STEM leaders, educating youth and the public on
            microgravity research and space exploration and development at large. Our team was
            awarded this prize for our extensive outreach efforts at the university, through
            collaborations with local high schools and community events.
          </AwardItem>

          <AwardYear Year={2018} />
          <AwardItem
            RocketName="UXO"
            AwardName="FIRST PLACE - 10K LIQUID/HYBRID SRAD"
            ImageAddress={SRAD18Image}
            ImageName="First Place - 10k Liquid/Hybrid Srad"
          >
            The Category First Place Awards recognize the teams with the highest overall scores in
            each of the six competition categories, with this category representing Student
            Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 10,000
            feet. Teams are scored on the project technical report, competency of design, quality
            of construction, degree of student development, flight performance, and operating
            procedures. Our team received this award for finishing first in our category at the
            2018 IREC, with the debut flight of UXO.

          </AwardItem>

          <AwardYear Year={2017} />
          <AwardItem
            RocketName="VIDAR III"
            AwardName="JIM FURFARO AWARD FOR TECHNICAL EXCELLENCE"
            ImageAddress={TechnicalExcellenceImage}
            ImageName="Jim Furfaro Award for Technical Excellence"
          >
            The Jim Furfaro Award for Technical Excellence recognizes a team which demonstrates
            exceptional engineering discipline and technical skill through their analyses and
            conclusions, project or program planning and execution, operational procedure,
            manufacturing processes, iterative improvement, systems engineering methodology, and
            robust design. Our team was presented with this award after our successful launch and
            recovery of Vidar III at the 2017 IREC, based on our iterative design on the Vidar
            system over the previous four years.
          </AwardItem>

          <AwardItem
            RocketName="VIDAR III"
            AwardName="FIRST PLACE - 10K LIQUID/HYBRID SRAD"
            ImageAddress={SRAD17Image}
            ImageName="First Place - 10k Liquid/Hybrid Srad"
          >
            The Category First Place Awards recognize the teams with the highest overall scores
            in each of the six competition categories, with this category representing Student
            Researched and Developed (SRAD) Hybrid/Liquid engines targeting an apogee of 10,000
            feet. Teams are scored on the project technical report, competency of design, quality
            of construction, degree of student development, flight performance, and operating
            procedures. Our team received this award for finishing first in our category at
            the 2017 IREC.
          </AwardItem>
        </Row>
      </Container>
    </>
  );
};

export default Awards;
