import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import eridaniUpright from '../../img/rocketPhotos/eridani_upright.webp';

const Eridani = () => {
  return (
    <>
      <RocketPageOutline title="Eridani" img={eridaniUpright} altText="Eridani Drawing">
        <Content title="Overview">
          At 20 feet long, 11.5 inches in diameter and with a dry weight of more than
          200 pounds, it is by far the largest rocket ever at the IREC competition.
          This record is likely remain standing for many years, if not decades to come.
          The Eridani is also the first liquid bi-propellant rocket at the IREC
          competition, and as of 2013, the only one. Unfortunately, due to its
          immense size and nature of liquid bi-propellant propulsion system,
          Eridani is extremely complex. Many difficulties were encountered
          during its design, construction, testing and launch operation.
          The launch at IREC 2012 was not a success, and Eridani was heavily
          damaged in the process. It was ultimately scrapped for parts.
          Eridani did however, provide a valuable learning opportunity for the team.
          And the liquid bi-propellant propulsion system alone is an impressive feat
          by any standard.
        </Content>
        <DividerLine />
        <TwoColumns title="DETAILS">
          <Content title="ENGINE">
            This rocket features an advanced engine and control system.
            Propulsion is one of the main areas of focus through which our
            team differentiates itself from the competition. Many teams compete
            by building a structure, calculating aerodynamics and using a solid rocket
            motor from a commercial supplier. Only 10% of teams actually design and
            build their own engines. While this approach does carry increased technical
            risk, it allows our team to score more points in the student construction
            category and to innovate, take risks, and be creative. Of the two teams
            who developed propulsion for this year&apos;s competition, our team was
            applauded by some judges for having successfully designed, built and
            tested the first liquid engine to be brought to the competition.
            The design, construction and testing of a liquid engine were great
            challenges to our team. The engine took a full year of development and
            represents a significant accomplishment for undergraduate engineering students.
            <br />
            <br />
            Eridani uses nitrous oxide and propane for propulsion. The two fuels are injected
            at high pressure into a combustion chamber insulated with a graphite ablator
            and containing a graphite ablative nozzle. The propane fuel burns clear and
            unfortunately does not have a visible flame plume, although it can be heard
            quite well during testing. Here you can see our liquid engine being tested
            at our Waterloo facilities.
          </Content>
          <>
            <Content title="PAYLOAD">
              10 lb solid steel slug in a rubber casing cast in a 3D printed Haack Series shaped
              exterior shell. Placing the payload at the top allows for a better weight
              distribution.
            </Content>
            <Content title="RECOVERY MODULE">
              A small amount of gunpowder is ignited to release CO2 into the module,
              pressurizing the fiberglass chamber. This internal pressure
              breaks the shear pins connecting the tubes together, and
              releases the parachutes. The 3&apos; dome shaped drogue chute
              is deployed at apogee, followed by the 8&apos; Iris Ultra main
              chute roughly halfway down. The main chute is dragged out by the payload.
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157640556841084">
        <Photo link="https://c2.staticflickr.com/8/7353/12329920415_b97dddebfa_c.jpg" altText="Eridani ready for launch" />
        <Photo link="https://c1.staticflickr.com/3/2855/12330021503_6afd44a0d3_c.jpg" altText="Setting up launch" />
        <Photo link="https://c2.staticflickr.com/4/3721/12330093573_f9b263c395_c.jpg" altText="At launch" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/XY38dDuwwng" title="Recovery Testing" />
        <Video link="https://www.youtube.com/embed/Tnbe386fRAY" altText="Engine test" />
      </Gallery>
    </>
  );
};

export default Eridani;
