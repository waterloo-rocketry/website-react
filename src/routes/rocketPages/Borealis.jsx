import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import borealisUpright from '../../img/rocketPhotos/borealis_upright.webm';

import borealisAero from '../../img/rocket/borealis-aerostructures.webp';

const Borealis = () => {
  return (
    <>
      <RocketPageOutline
        title="BOREALIS"
        mediaType="video"
        img={borealisUpright}
        altText="Borealis"
      >
        <Content title="Overview">
          The ‘Borealis’ rocket, powered by a bi-propellant mixture of ethanol
          and nitrous oxide, reached an altitude of 5,855 metres (19,212 feet)
          and achieved a top speed of 1646 km/h before falling back to the
          ground under its own parachute. Designed entirely by students,
          building on years of team history, this rocket showcases the
          culmination of the advanced engineering capabilities developed by the
          team throughout its past 13 years. The rocket was launched at the
          Launch Canada 2024 competition in Timmins, Ontario, where it won the
          Advanced category first place award. It also the first amateur liquid
          rocket in Canada!
        </Content>
        <SpecsComponent
          specs={[
            [
              { Diameter: '6"', Length: '160"' },
              { 'Motor Classification': 'O', 'Wet Mass': '125 lbs' },
            ],
            [
              {
                Fuel: 'Ethanol',
                Oxidizer: 'Nitrous Oxide',
              },
              {
                Apogee: '19,212 ft',
                'Max Velocity': '1,646 km/h',
              },
            ],
          ]}
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PROPULSION">
              Borealis is powered by Waterloo Rocketry&apos;s first ever liquid
              bi-propellant rocket engine. Powered by nitrous oxide and ethanol,
              the engine operates in blowdown mode, producing a peak thrust of
              8kN at a chamber pressure of 400psi over 6 seconds of burn time.
              The propellants are pressurized to 750psi using the vapor pressure
              of the nitrous oxide, with the ethanol pressurized in a concentric
              fuel tank by the nitrous vapor through use of a sliding piston.
              The combustion chamber is ablatively cooled with custom cast
              ablative and a graphite nozzle. The engine uses fully custom SRAD
              pneumatic propellant valves, including two coaxial sleeve main
              propellant valves and two poppet valves for remote filling and
              venting of nitrous oxide. The Borealis propulsion system builds on
              the teams heritage with hybrid rocket engines and is the first
              step towards more advanced propulsion systems.
            </Content>
            <Content title="PAYLOAD">
              The payload of Borealis consists of a 3U CubeSat housing two
              experiments. The first experiment consists of an SRAD peristaltic
              positive-displacement IV pump which runs a 22% glycerin 78% water
              solution through a closed loop to observe the ability of the pump
              to maintain a smooth, uniform flow in a hyper and micro gravity
              environment. A flow sensor monitors temperature and flow rate,
              from which flow velocity, density, and viscosity can be
              extrapolated. The determination of Reynold&apos;s number of the
              fluid at any point through the flight is then calculated,
              indicating the amount of turbulence in the flow. The second
              experiment consists of a qualitative and quantitative analysis of
              vibrational effects on fasteners throughout flight. A 3-axis
              accelerometer quantifies the vibrations of the rocket, and
              hundreds of fasteners are installed on aluminum and steel plates.
              These plates are flown inside the CubeSat, and test various thread
              engagements, plate orientations, fastener sizes, fastener
              profiles, materials, applied torques, nut and bolt configurations,
              and Loctite applications.
            </Content>
            <Content title="RECOVERY">
              The recovery system onboard Borealis uses a reefing two-stage
              recovery system consisting of a small pilot parachute and a
              control-line reefed main parachute. At apogee a dual redundant CO2
              canister-based separation mechanism pressurizes the parachute bay,
              shearing shear pins in the nose cone and separating the nosecone
              from the rocket body. The pilot chute is deployed into the
              airstream, at which point it pulls the reefed parachute out of its
              bag, allowing the rocket to make a controlled decent. At 1500 ft
              AGL, pyrocutters actuated by electric matches disreef the full
              parachute. The system is housed inside the nosecone and a
              fiberglass tube directly below.
              <br />
              <br />
              Borealis is equipped with two COTS (Commercial Off-the-Shelf)
              altimeters for recovery deployment. A PerfectFlite StratoLoggerCF
              and a Featherweight Raven3 were used for increased reliability.
              Each altimeter is powered by a 9V battery and is armed immediately
              prior to launch. The deployment system includes dual redundancy,
              with two carbon dioxide ejectors, two pyrotechnic cutters, and
              both altimeters being capable of independently deploying the
              parachutes.
            </Content>
            <Content title="ELECTRICAL">
              Building on previous avionics system architectures, Borealis
              includes 13 custom-built PCBs on the RocketCAN network (the
              rocket&apos;s CAN bus for board-to-board communication). These
              boards perform tasks such as LiPo charging and power distribution,
              recording in-flight footage, and running state estimation
              algorithms for the airbrakes controller. In case a board fails and
              cannot be troubleshooted, it can replaced with an identical spare,
              with no firmware changes needed.
              <br />
              <br />
              Improvements were also made to the DAQ system, including a new
              patch panel, to allow sensor configuration to be easily adjusted,
              and support for the RocketCAN bus, so that messages can be parsed
              and sent over omnibus to mission control.
            </Content>
          </>
          <>
            <Content title="AIRFRAME">
              The airframe for Borealis was designed for easy integration,
              divided into sections like the nosecone, parachute bay, Upper
              Bodytube (UBT), vent shroud, OTAS fairings, fincan consisting of
              the fins, and boattail. Most of the structure was fiberglass,
              while the fincan, fins, and fairings were carbon fiber.
              <br />
              <br />
              The nosecone followed a Von Kármán profile, chosen for optimal
              aerodynamics and apogee performance. Aluminum couplers machined
              in-house connected sections for quick assembly and disassembly,
              while the boattail and longerons were also aluminum, with the
              boattail CNC-machined.
              <br />
              <br />
              Composite parts were manufactured using Vacuum Assisted Resin
              Transfer Molding (VARTM), and a tip-to-tip layup reinforced the
              fincan for added strength. The rocket&apos;s tip was machined from
              stainless steel and 6061 Aluminum. High-strength bonding epoxy
              secured all couplers to the body tubes as well as the tip to the
              nosecone.
              <Photo link={borealisAero} altText="Airframe detail photo" />
            </Content>
            <Content title="Airbrakes">
              The goal of the airbrakes subsystem is to hit a target apogee
              through the use of active aerodynamic control surfaces that are
              able to adjust the rocket&apos;s flight trajectory mid-flight more
              closely than can be achieved through purely passive controls such
              as propellant mass fill. Historically, precision was achieved
              exclusively through rigorous simulations and precision
              manufacturing, which in 2023 brought LOTS to within 1500ft of the
              30,000ft target apogee. To further improve this result, Borealis
              will fly active in-flight controls in the form of airbrakes.
              <br />
              <br />
              The airbrakes system are composed of three symmetrical plates that
              actuates by extending out of the rocket to create additional
              aerodynamic drag, this is controlled by a PD controller running
              Madgwick filtering and RK 4 trajectory prediction using an onboard
              Vectornav VN-300 IMU, with simulations done in OpenRocket and real
              time drag overwrite with data computed from Ansys Fluent CFD.
              <br />
              <br />
              The airbrakes system brought the Borealis rocket ~800ft closer to
              reported apogee.
            </Content>
            <Content title="PROJECT REPORT">
              A description of the rocket&apos;s custom engine, airframe,
              onboard avionics, ground systems, payload, active controls, and
              all other technical details of the vehicle can be found in&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2024_project_report.pdf">
                this report
              </a>
              , which was submitted to the judges of Launch Canada for review
              before the competition.
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://flic.kr/s/aHBqjBHHnP">
        <Photo
          link="https://live.staticflickr.com/65535/53998023729_45f845ef3f_5k.jpg"
          altText="Borealis on display"
        />
        <Photo
          link="https://live.staticflickr.com/65535/53997950648_3964dbb7e7_6k.jpg"
          altText="Borealis team photo"
        />
        <Photo
          link="https://live.staticflickr.com/65535/53997949738_364d5941b1_6k.jpg"
          altText="Borealis on the launch rail"
        />
      </Gallery>
      <Gallery
        title="VIDEO GALLERY"
        morelink="https://www.youtube.com/user/uwrocketry"
      >
        <Video
          link="https://www.youtube.com/embed/Z126ZESX3uA?si=4D8Q90V0KRJpKcw1"
          title="Borealis - Launch Canada 2024"
        />
        <Video
          link="https://www.youtube.com/embed/SJO39WQ7Uv0?si=oKVYrJBOVjCckHkc"
          altText="Implementation and Verification of Active Altitude Control System"
        />
        <Video
          link="https://www.youtube.com/embed/ZWvHEy1VRlg?si=QgiqgNEIscUUgS4M"
          altText="Eridium - Liquid Engine Static Fire #2"
        />
      </Gallery>
    </>
  );
};

export default Borealis;
