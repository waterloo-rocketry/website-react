import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import vidar3Upright from '../../img/rocketPhotos/vidar3_drawing.png';

const Vidar3 = () => {
  return (
    <>
      <RocketPageOutline title="VIDAR III" img={vidar3Upright} altText="VIDAR III Drawing">
        <Content title="Overview">
          Vidar III is the third iteration of the Vidar launch vehicle, featuring significant
          changes to the oxidizer feed system. These changes include redesigned injector and
          ignition subsystems. This is the first Vidar rocket to feature a functional payload,
          which is implemented in accordance with the PocketQube standard. Vidar III was
          the first of the team&apos;s vehicles to achieve a successful launch and recovery,
          at the 2017 IREC.
        </Content>
        <SpecsComponent specs={
          [
            [{ Diameter: '4"', Length: '128.5"' }, { 'Motor Classification': 'M', 'Wet Mass': '63.1 lbs' }],
            [{ Fuel: 'Aluminized HTPB', Oxidizer: 'Nitrous Oxide' }, { 'Drogue Chute Diameter': '37.5"', 'Main Chute Diameter': '98"' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The payload of Vidar III contains an 8.8 pound dead weight in order to fulfill
              competition requirements. Additionally, the rocket is equipped with a small
              functional payload including a GoPro, accelerometer, and gyroscope.
            </Content>
            <Content title="AVIONICS">
              Our avionics module houses two commercial Raven altimeters. Furthermore, there is
              a GPS module on the rocket for recovery purposes. These electronics are
              activated by magnetic switches and can be armed and disarmed while
              the rocket is on the pad.
            </Content>
            <Content title="RECOVERY MODULE">
              The recovery module consists of a drogue parachute and main parachute housed in
              a single fiberglass bay. At apogee, the avionics altimeters initiate deployment.
              CO2 canisters pressurize the recovery module, splitting the rocket and deploying
              the drogue parachute. At 1500 ft, a secondary electrical signal triggers
              pyrocutters that deploy the main parachute. The drogue parachute pulls
              the main parachute out from the recovery module and slows the rocket to 8 m/s.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              The Vidar III oxidizer tank is constructed from aluminium. The tank wall fulfills
              a secondary purpose as the structural airframe, saving weight and
              increasing stability. The run tank is designed for pressures of 750
              psi, with a safety factor of 2.5. It is sealed on each end by a
              machined aluminium bulkhead. The top bulkhead has a permanent vent,
              as well as a dip tube to control ullage in the tank. The run tank
              is filled from the bottom bulkhead, where a hose can connect to the rocket
              through the outside of the bulkhead.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The combustion chamber houses the rocket&apos;s solid fuel. Like the
              oxidizer tank, it is made of 6061-T6 aluminium at a 4&quot; OD.
              The fuel grain consists of aluminized HTPB cast inside an ABS
              tube, with a pseudo-finocyl grain geometry. The nozzle is machined from graphite.
            </Content>
            <Content title="FINS">
              The fin can is constructed from aluminium, with dimensions determined based
              on flight simulation using data from static testing. Vidar III uses three
              trapezoidal fins, which are welded to the can that slips over the combustion chamber.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of onboard and ground
              support systems, engineering drawings of all rocket components, and a complete
              set of assembly and launch procedures for VIDAR III can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2017_project_report.pdf">here.</a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157682620082462">
        <Photo link="https://c1.staticflickr.com/5/4286/35618856956_6c0afc1c9b_b.jpg" altText="VIDAR III setup at IREC" />
        <Photo link="https://c1.staticflickr.com/5/4021/35271293190_b0d7e646c3_b.jpg" altText="The team members setting up VIDAR III" />
        <Photo link="https://c2.staticflickr.com/8/7523/26411950113_92b0737317_b.jpg" altText="Machining VIDAR III parts" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://youtu.be/bWtbes6lPNQ" title="Pyrovalve Test" />
        <Video link="https://youtu.be/aBGdopZXZPM" altText="Static Fire #7" />
        <Video link="https://youtu.be/zb4q3UH-TVQ" altText="VIDAR III IREC launch" />
      </Gallery>
    </>
  );
};

export default Vidar3;
