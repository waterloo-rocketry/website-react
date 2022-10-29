import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo } from '../../components/Gallery/Gallery';

import sotsUpright from '../../img/rocketPhotos/sots_upright.png';

const SharkOfTheSky = () => {
  return (
    <>
      <RocketPageOutline title="SHARK OF THE SKY" img={sotsUpright} altText="Shark of the sky drawing">
        <Content title="Overview">
          Shark of the Sky (SotS) is a hybrid rocket developed for participation in the 2019
          Spaceport America Cup (SAC), 30000 ft SRAD (Student Researched And Designed)
          liquid/hybrid engine category. Building on the success of last year&apos;s rocket
          (UXO), design of SotS focused on mass reduction and engine improvements.
          SotS is powered by the Kismet hybrid SRAD engine, and achieved successful
          launch at the 2019 SAC.
        </Content>
        <SpecsComponent specs={
          [
            [{ Diameter: '6"', Length: '217"' }, { 'Motor Classification': 'O', 'Wet Mass': '171 lbs' }],
            [{ Fuel: 'Hydroxyl-Terminated Polybutadiene', Oxidizer: 'Nitrous Oxide' }, { 'Drogue Chute Diameter': '55"', 'Main Chute Diameter': '149.5"' }, { Apogee: '15,586 ft AGL' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The team developed a payload this year that assessed the properties of 3D printed
              parts with varying infills and materials such as PLA and PET-G during the flight
              of the rocket. By weighing these parts down with steel and aluminium loads, we were
              able to conduct an analysis on the viability of integrating 3D printed parts into
              future iterations of our rocket. Research and development also began on a
              solenoid-powered fluid system as a potential space industry application for pumping
              liquid oxygen and satellite cooling systems without the need for mechanical
              components.
              <br />
              <br />
              Our research in fluids led to the development of the team’s submission for the
              Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX). This scientific
              experiment conducted in partnership with the National Research Council and the
              Canadian Space Agency flew on board a Falcon-20 in microgravity to characterize the
              physics of ferrofluids and colloidal fluids under the influence of a magnetic field
              in microgravity.
            </Content>
            <Content title="RECOVERY">
              The recovery system onboard SotS uses a dual deployment system consisting of a
              drogue parachute and a main parachute. A carbon dioxide canister-based separation
              mechanism deploys the drogue chute at apogee, to minimize shock loading. At 1500 ft
              AGL, pyrocutters actuated by electric matches release the main parachute. The system
              is housed insude the nosecone and a fiberglass tube directly below.
              <br />
              <br />
              SotS is equipped with two COTS (Commercial Off-the-Shelf) altimeters for recovery
              deployment. A PerfectFlite StratoLoggerCF and a Featherweight Raven3 were used for
              increased reliability. Each altimeter is powered by a 9V battery and is armed
              immediately prior to launch. The deployment system includes dual redundancy, with
              two carbon dioxide ejectors, two pyrotechnic cutters, and both altimeters being
              capable of independently deploying the parachutes.
            </Content>
            <Content title="NOSECONE">
              Because of the possibility of going supersonic, a Von Kármán nosecone with a 4:1
              fineness ratio, built from fiberglass was selected for SOTS. Two mold halves were
              formed with MDF on a CNC router, and then joined during the layup to form the
              complete nosecone shape. The nosecone was post-cured at 50 °C for 6 hours, to
              protect against the hot desert temperatures.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              SotS&apos;s oxidizer tank is built from 6061-T6 aluminium alloy and is 80&quot;
              long, with a 6&quot;outer diameter and 3/16&quot; wall thickness. Twenty-four
              1/4&quot;-28 bolts join the bulkheads to the tube at each end with
              Buna-N o-rings, resulting in a minimum safety factor of 2.4, based on a maximum
              operating pressure of 1000 psi. The bulkheads feature hemispherical geometry,
              and improved airframe mounting structure, resulting in a 50% lighter mass
              than the previous year&apos;s design.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The combustion chamber houses the injector, solid fuel, and nozzle. The chamber
              is insulated with a 1/8&quot; thick G11 fiberglass tube, and has a 5&quot; outer
              diameter. It has been hydrostatically tested 1.5x the maximum expected operating
              pressure of 700 psi. Kismet burns a solid mixture of 90% HTPB and 10% powdered
              aluminium by mass. A pseudo-finocyl grain geometry achieved through investment
              casting is used for the fuel. Once the injector valve opens, nitrous oxide is
              sprayed through the system. The propellants combust and leave the nozzle, providing
              the rocket with thrust.
            </Content>
            <Content title="FINS">
              SotS uses a carbon fibre fin can holding 3 trapezoidal carbon fiber fins.
              Carbon fiber was chosen for its high specific stiffness and low mass.
              The fins were cut on a CNC router and bonded to the tube with a high shear
              strength epoxy.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of onboard and ground
              support systems, engineering drawings of all rocket components, and a complete
              set of assembly and launch procedures for SotS can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2019_project_report.pdf">here.</a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <p>Hi</p>
    </>
  );
};

export default SharkOfTheSky;
