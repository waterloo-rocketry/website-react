import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import vidarUpright from '../../img/rocketPhotos/vidar_upright.webp';

const Vidar = () => {
  return (
    <>
      <RocketPageOutline title="VIDAR" img={vidarUpright} altText="VIDAR Drawing">
        <Content title="Overview">
          Vidar is our team&apos;s fourth submission to I.R.E.C, and was the next
          iteration of the Silver Brant, its predecessor. Named after the Norse
          god of vengeance, the goal of Vidar was to fix the Silver Brant with
          a simple feed system. We designed and commissioned a custom check valve
          for oxidizer fill and injection, which drastically reduced the weight
          and complexity. The check valve contains only one moving part to eliminate
          modes of failure. Additionally, we designed and manufactured
          our own 12&apos; launch tower to increase stability off the rail,
          as hybrid rockets have a lower acceleration as compared to solid ones.
          The development of Vidar marked the team&apos;s first attempt at iterative
          design, as the rockets before that were more experimental in nature.
          Unfortunately, the e-matches that we used at competition were thicker
          than expected, and ended up clogging the nozzle. Along with some other
          factors, we experienced a spectacular pressure explosion within the
          combustion chamber, ultimately destroying Vidar.
        </Content>
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              10 lb solid steel slug encased in a rubber casing casted in a 3D printed
              Haack Series shaped exterior shell. Taken straight from the Silver Brandt,
              but painted red. Placing the payload at the top allows for a better weight
              distribution.
            </Content>
            <Content title="AVIONICS">
              The role of the avionics module is to make sure the recovery systems
              activate at the correct stage during flight my monitoring it&apos;s altitude
              and orientation. There are 2 Raven PCB&apos;s on board to handle this,
              with one serving as a backup. There is also a GPS to track the
              rocket after landing. Two cameras are mounted on the face of the
              fiberglass tube: one side facing camera and one facing down,
              both with an aerodynamic sleeve to reduce drag.
            </Content>
            <Content title="RECOVERY MODULE">
              A small amount of gunpowder is ignited to released CO2 into the module,
              pressurizing the fiberglass chamber. This internal pressure breaks the
              shear pins connecting the tubes together, and release the parachutes.
              The 3&apos; dome shaped drogue chute is deployed at apogee,
              followed by the 8&apos; Iris Ultra main chute at roughly half way down.
              The main chute is dragged out by the payload.
            </Content>
            <Content title="FINS & NOZZLE">
              Aluminium fins were redesigned based on the results of our flight simulation.
              Graphite nozzle was shattered to bits upon explosion.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              Aluminium tube sealed with two bulkheads on each end that double as
              couplers to the avionics module and the engine. Needed to hold 400
              psi of pressure from liquid NO2, and has been hydrostatically tested
              to around 2000 psi. The bulkhead coupling the tank to the engine holds
              our injector.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              HTPB rubber casted with a six sided star shaped port down the middle
              to increase regression rate during combustion. The oxidizer from the
              tank is injected down each port with our new valveless injector.
              The engine produces around 400 lbs of thrust, if the conditions
              for the oxidizer are favorable.
            </Content>
            <Content title="LAUNCH TOWER">
              This year, we brought our own launch tower and pad to the competition.
              At approximately 40&apos; tall, our tower was the tallest structure at the
              competition. It was even used by the judges as a unit of measurement!
              The tower withstood a scorching flame from the University
              of Toronto&apos;s rocket, as well as an explosion from our own.
              We hope to make the erection process easier for 2015.
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157646193644432">
        <Photo link="https://c2.staticflickr.com/4/3898/14649906159_693a9d3c3f_b.jpg" altText="VIDAR Launch setup" />
        <Photo link="https://c2.staticflickr.com/4/3920/14813572946_ca0bb0501a_b.jpg" altText="The team members setting up VIDAR launch" />
        <Photo link="https://c2.staticflickr.com/6/5551/14649841910_d4324a989d_b.jpg" altText="Setting up launch" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/WjVMQl1bXxk" title="Recovery Testing" />
        <Video link="https://www.youtube.com/embed/MuPTyWUIPDA" altText="Injector test" />
        <Video link="https://www.youtube.com/embed/Uod7Vuhxpyc" altText="Engine Test" />
      </Gallery>
    </>
  );
};

export default Vidar;
