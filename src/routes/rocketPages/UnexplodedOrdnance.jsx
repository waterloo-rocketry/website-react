import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import uxoUpright from '../../img/rocketPhotos/uxo_upright.png';

const UnexplodedOrdnance = () => {
  return (
    <>
      <RocketPageOutline title="Unexploded Ordnance" img={uxoUpright} altText="Shark of the sky drawing">
        <Content title="Overview">
          Unexploded Ordnance (UXO) is a hybrid rocket developed by Waterloo Rocketry for entry in
          the 10000 ft apogee with a SRAD (Student Researched and Designed) hybrid/liquid propulsion
          system category at the 2018 Intercollegiate Rocket Engineering Competition. The UXO launch
          vehicle is powered by the Kismet engine, a nitrous oxide/hydroxyl-terminated polybutadiene
          SRAD hybrid engine, and achieved a successful launch at the 2018 IREC.
        </Content>
        <SpecsComponent specs={
          [
            [{ Diameter: '6"', Length: '178"' }, { 'Motor Classification': 'O', 'Wet Mass': '141 lbs' }],
            [{ Fuel: 'Hydroxyl-Terminated Polybutadiene', Oxidizer: 'Nitrous Oxide' }, { 'Drogue Chute Diameter': '37.5"', 'Main Chute Diameter': '142"' }, { Apogee: '13,412 ft AGL' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The team developed a deployable payload system this year. This was done in order to
              evaluate the performance of this type of mechanism, which would promote future
              iteration and development of scientific payloads. An instrument package was
              integrated in the payload, and housed various sensors which recorded and logged
              data in order to achieve this goal.
            </Content>
            <Content title="RECOVERY">
              The UXO recovery system consists of a drogue parachute and main parachute housed in
              two adjacent fiberglass tubes joined by aluminium couplers. This recovery system uses
              dual deployment events, deploying the drogue parachute 5 seconds after apogee and a
              main parachute at 1500 ft AGL. A 5 second delay was selected for drogue deployment
              to ensure that this event does not interfere with payload deployment.
              <br />
              <br />
              UXO uses two COTS (Commercial Off-the-Shelf) altimeters for recovery deployment.
              Two different altimeters, a PerfectFlite StratoLoggerCF and a Featherweight Raven3,
              were selected in order to decrease the risk of common mode failures and increase the
              reliability of the system. Each altimeter is capable of independently triggering
              each ejector and each cutter.
            </Content>
            <Content title="NOSECONE">
              A tangent ogive nosecone with a 4:1 fineness ratio was selected as it minimized
              simulated drag during the design stage. The body of the nose cone was manufactured
              as a single fiberglass composite piece which required the creation of a 2-part mold
              CNC-machined from medium-density fiberboard.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              The UXO oxidizer tank is made of 6061-T6 aluminium alloy. The tank has a minimum
              factor of safety of 2.4 in bearing failure of the tank, and has been successfully
              hydrostatically tested to a factor of safety (FOS) of 1.5 times the maximum expected
              operating pressure of 1000 psi. There are two student designed electrically actuated
              ball valves on the rocket, which are used during the filling and venting of the
              oxidizer tank, as well as allowing the flow of oxidizer after the primary ignition
              sequence is initiated.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              This component houses the rocket&apos;s solid fuel and it is also made of 6061-T6
              aluminium.
              The combustion chamber is insulated with a 1/8&quot; thick G10 fiberglass tube and
              sealed with flame-resistant caulking on the top and bottom ends. It has a FOS of 2.6
              and has been hydrostatically tested to 2.1 times the maximum expected operating
              pressure of 500 psi. The fuel used in Kismet is a mixture of 90% HTPB and 10%
              powdered aluminium by mass, and has a pseudo-finocyl grain geometry achieved
              through investment casting. The nozzle is machined out of graphite and is a
              linear approximation of a Bell nozzle.
            </Content>
            <Content title="FINS">
              UXO uses a fin can assembly of three trapezoidal fins welded to 6&quot; OD, 13&quot;
              long, 1/4&quot; thick cylindrical 6061-T6 stock. 6061-T6 was chosen as the
              material for the fin can components for its good weldability and strength.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of onboard and ground
              support systems, engineering drawings of all rocket components, and a complete
              set of assembly and launch procedures for UXO can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2018_project_report.pdf">here.</a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/albums/72157698702806445">
        <Photo link="https://farm2.staticflickr.com/1829/29330281158_f906aa3938_o_d.jpg" altText="UXO on the launch rail" />
        <Photo link="https://farm1.staticflickr.com/833/42297840735_8d1c43ed85_k_d.jpg" altText="UXO launching" />
        <Photo link="https://farm1.staticflickr.com/847/43201849271_77911b6f80_o_d.jpg" altText="The team members setting up UXO" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/eyrOPgDnM9o" title="Cold flow #3" />
        <Video link="https://www.youtube.com/embed/liMpHmOH-Bc" altText="Static Fire 2" />
        <Video link="https://www.youtube.com/embed/fx_Xt69g6Lg" altText="UXO IREC launch" />
      </Gallery>
    </>
  );
};

export default UnexplodedOrdnance;
