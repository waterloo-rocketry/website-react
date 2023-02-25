import { React, useState } from 'react';
import {
  Col, Container, Row, Tab, Tabs, Image,
} from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';

import Content from '../components/Content/Content';

import styles from './css/Subsystems.module.css';

import airframeImg from '../img/subsystems/rocket_imgs/airframe.png';
import daqImg from '../img/subsystems/rocket_imgs/daq.png';
import payloadImg from '../img/subsystems/rocket_imgs/payload.png';
import propulsionImg from '../img/subsystems/rocket_imgs/propulsion.png';
import recoveryImg from '../img/subsystems/rocket_imgs/recovery.png';
import rlcsImg from '../img/subsystems/rocket_imgs/rlcs.png';
import rocketcanImg from '../img/subsystems/rocket_imgs/rocketcan.png';

import subsystemsCoverImage from '../img/subsystems/cover_subsystems.jpg';

const rocketImgs = {
  airframe: airframeImg,
  daq: daqImg,
  payload: payloadImg,
  propulsion: propulsionImg,
  recovery: recoveryImg,
  rlcs: rlcsImg,
  rocketcan: rocketcanImg,
};

const Subsystems = () => {
  const [rocketImg, setRocketImg] = useState(rocketImgs.airframe);

  const handleTabSelect = (key) => {
    setRocketImg(rocketImgs[key]);
  };

  return (
    <>
      <CoverPhoto image={subsystemsCoverImage} style={{ height: '35rem', backgroundPosition: '50% 90%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="SUBSYSTEMS">
            <p>
              Our rocket consists of many interacting subsystems, each of which handles certain
              aspects of the rocket&apos;s testing, launch, and recovery. We cover a huge range of
              disciplines in the functionality of the rocket, and we&apos;re always open to
              incorporating more!
            </p>
          </Content>
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Col sm={10} md={8} lg={7}>
            <Image fluid src={rocketImg} alt="Rocket Diagram" />
            <Tabs
              defaultActiveKey="airframe"
              transition={false}
              id="subsystems-tabs"
              onSelect={handleTabSelect}
              fill
            >
              <Tab
                eventKey="airframe"
                title="AIRFRAME"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="AIRFRAME">
                  <h3>OVERVIEW</h3>
                  <p>
                    The airframe consists of the outer structure of the rocket. As the part of the
                    rocket that withstands various forces throughout the entirety of the flight, a
                    strong and aerodynamic airframe is required to optimize the performance of our
                    transonic rocket. Since 2017, the team has been expanding our knowledge of
                    composites by manufacturing our own fibreglass and carbon fibre components
                    using vacuum bag layup processes.
                  </p>
                  <h3>COMPONENTS</h3>
                  <ul>
                    <li>Fibreglass body tubes</li>
                    <li>Von Kármán fibreglass nosecone</li>
                    <li>Carbon fibre fin can</li>
                    <li>Aluminium oxidizer tank</li>
                    <li>3D-printed fairing</li>
                  </ul>
                  <h3>HISTORY</h3>
                  <p>
                    Prior to 2018, the team possessed no composites fabrication capabilities.
                    Components were machined by hand with aluminium, wood, and steel being the
                    primary fabrication materials, and the only composites used were commercially
                    purchased fibreglass tubes. In 2018, the team designed and manufactured its
                    first fibreglass nosecone as a weight and space-saving initiative to replace
                    the old machined/sanded wood nosecone design. Since then, the team has taken
                    on
                    more composites design and fabrication, and expanded its structural analysis
                    abilities for further weight savings.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <p>Want to get involved? This is what we&apos;re working on right now:</p>
                  <ul>
                    <li>
                      Ox tank aft skirt: the structure between the oxidizer tank and the engine.
                      It houses the injector valve and rocket side fill plumbing.
                    </li>
                    <li>
                      Fill disconnect hatch: an access panel on the rocket that opens to
                      accommodate tower side fill plumbing and closes after fill disconnect system
                      actuation.
                    </li>
                    <li>
                      Composite boattail: a lighter and more aerodynamic version of the old
                      aluminium boattail that used to double as a heat sink for the engine.
                    </li>
                    <li>
                      Composites stress calculator: a calculator implemented in Python to aid
                      in composites layup schedule design by calculating stress in each ply.
                    </li>
                    <li>
                      WatWind: a 3-axis filament winder for use in manufacturing of body
                      tubes.
                    </li>
                    <li>
                      Nosecone mould: a female fibreglass mould to replace aging
                      <a
                        href="https://en.wikipedia.org/wiki/Medium-density_fibreboard"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        MDF
                      </a>
                      {' '}
                      moulds used in the nosecone layup process.
                    </li>
                  </ul>
                </Content>
              </Tab>
              <Tab
                eventKey="recovery"
                title="RECOVERY"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="RECOVERY">
                  <h3>OVERVIEW</h3>
                  <p>
                    Recovery is the phase of the rocket&apos;s flight between apogee
                    (the maximum altitude)
                    and landing. After flight our rocket should be in a condition in which it could
                    be flown again. To achieve this, we employ a dual parachute system deployed by
                    pyrotechnics and controlled by electronics with built-in redundancies.
                    Traditionally our altimeters deploy a small drogue parachute at apogee,
                    followed by our large main parachute at 1500 ft above the ground. The
                    rocket&apos;s
                    location is tracked by two onboard GPS units and the location is received by a
                    handheld unit to help find the rocket after flight. All of our hardware and
                    electronics must take as little mass and space as possible so as to not impact
                    the performance of the rocket drastically. They are typically located in the
                    topmost section of the rocket to aid parachute deployment sequence.
                  </p>
                  <p>
                    Ideally, we try to optimize our design primarily for simplicity and reliability,
                    with cost, weight, and space savings as secondary goals.
                  </p>
                  <h3>COMPONENTS</h3>
                  <p>Hardware:</p>
                  <ul>
                    <li>Drogue parachute and rigging</li>
                    <li>Main parachute and rigging</li>
                    <li>Airtight bulkheads for parachute sections</li>
                    <li>Deployment mechanism to split the rocket & release parachutes</li>
                    <li>
                      Hardware to mount electronics and to isolate them from the vibrations and
                      shock of the parachute deployments
                    </li>
                  </ul>
                  <p>Electrical:</p>
                  <ul>
                    <li>Redundant altimeters, batteries, and magnetic switches</li>
                    <li>Remote arming board</li>
                    <li>ST PATS (handheld GPS tracking system)</li>
                  </ul>
                  <h3>HISTORY</h3>
                  <p>
                    In each of our past 3 flights, our drogue chute has deployed correctly but the
                    main parachute has failed to deploy. This has resulted in hard landings where
                    our
                    rocket is left mostly intact, but with significant damages. Each year the root
                    cause of the main deployment failure has been different, with the following
                    year&apos;s focus being to determine and eliminate the root cause.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <ul>
                    <li>Optimizing all of our hardware to minimize weight.</li>
                    <li>
                      Experimental reefing parachute system to only require one parachute to be
                      flown. This would reduce the weight and footprint of the rocket dramatically.
                    </li>
                    <li>
                      Putting together a test program with a local wind tunnel facility to
                      characterize our existing parachutes and test the reefing system.
                    </li>
                    <li>Implementing a remote arming system to simplify launch operations.</li>
                    <li>
                      Developing and running thorough ground tests to mimic flight conditions
                      as closely as possible.
                    </li>
                  </ul>
                </Content>
              </Tab>
              <Tab
                eventKey="payload"
                title="PAYLOAD"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="PAYLOAD">
                  <h3>OVERVIEW</h3>
                  <p>
                    The payload is the cargo of the rocket. Every year the team designs a new
                    scientific experiment to collect data during the flight of the rocket,
                    with a focus on high-altitude, high-acceleration or microgravity research.
                    The goal of the payload project is to design a competitive experiment
                    that can be submitted to the Space Dynamics Laboratory Payload Challenge
                    at the SA Cup while engaging an interdisciplinary group of students that
                    will be tomorrow&apos;s scientists and engineers.
                  </p>
                  <h3>COMPONENTS</h3>
                  <p>
                    Payload is somewhat unique as a subteam in that our scope is very broad
                    - we handle the research and development of the experiment, as well as
                    the electrical and mechanical components necessary to support the
                    experiment in the rocket. The star of the show is the
                    {' '}
                    <a
                      href="https://en.wikipedia.org/wiki/CubeSat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3U CubeSat
                    </a>
                    , of course, but to facilitate its function we also work with PCBs,
                    embedded software, and other implementation details for the experiment
                    that vary every year.
                  </p>
                  <h3>HISTORY</h3>
                  <p>
                    In 2018, the team launched its first functional payload at IREC which
                    consisted of a sensor package that gathered data during the flight. In
                    2019, the team launched a 3D-printed parts experiment that tested the
                    viability of integrating 3D-printed parts as structural components.
                    Also in 2019, the team participated in the
                    {' '}
                    <a
                      href="https://seds.ca/projects/can-rgx/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SEDS-Canada&apos;s CAN-RGX flight campaign
                    </a>
                    {' '}
                    with an experiment that looked at the effects of magnetic ferrofluid solutions
                    in microgravity.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <p>
                    The plan for the 2021 payload is to conduct a materials analysis of metal
                    oxide conformal coatings and
                    {' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Boron_nitride_nanotube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      boron nitride nanotube (BNNT)
                    </a>
                    {' '}
                    composites during the flight of the rocket to determine the viability of
                    these materials as structural and protective shielding elements in spacecraft.
                    In addition, a set of radiation detectors are being developed to measure the
                    atmospheric secondary radiation that permeates into the rocket and to determine
                    the radiation shielding abilities of these materials.
                    All of this will be housed in a redesigned CubeSat optimized to be easy
                    to fabricate and modular for future payload experiments.

                  </p>
                </Content>
              </Tab>
              <Tab
                eventKey="propulsion"
                title="PROPULSION"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="PROPULSION">
                  <h3>OVERVIEW</h3>
                  <p>
                    The propulsion system is the heart of our rocket and is responsible for
                    producing thrust and lifting the rocket into the air. Our rockets are currently
                    powered by an entirely student-developed and manufactured hybrid engine known
                    as Kismet, which uses
                    {' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Hydroxyl-terminated_polybutadiene"
                      target="_blank"
                      rel="noreferrer"
                    >
                      hydroxyl-terminated polybutadiene (HTPB)
                    </a>
                    {' '}
                    as a solid fuel and nitrous oxide as a liquid oxidizer.
                  </p>
                  <h3>COMPONENTS</h3>
                  <ul>
                    <li>Oxidizer tank</li>
                    <li>Combustion chamber</li>
                    <li>Nozzle</li>
                    <li>Fuel grain</li>
                    <li>Vent valve</li>
                    <li>Injector valve</li>
                  </ul>
                  <h3>HISTORY</h3>
                  <p>
                    The current propulsion system is an evolution of the hybrid engines flown
                    on the Vidar series of rockets. Only a few parameters,
                    like propellant composition, have been left unchanged to date
                    when compared with the original iteration. The current engine
                    configuration, Kismet, was first flown on the UXO rocket in 2018.
                    Every year we perform multiple cold-flow injector and full-duration
                    static fire tests of the propulsion system to validate the changes
                    made to the engine and ensure that the total impulse will allow the
                    rocket to achieve our target apogee. Recent years have seen significant
                    weight reductions to the valves and oxidizer tank and increases to the
                    engine&apos;s thrust and combustion stability. In late 2019, parallel
                    development
                    of a next-generation liquid fuelled engine began, culminating in a static
                    fire attempt in March of 2020. Development of both the hybrid and liquid
                    engines is ongoing.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <ul>
                    <li>Development of a nitrous oxide/ethanol bipropellant liquid engine</li>
                    <li>
                      Fast Actuation Solenoid Oxidizer-Transfer (FAST) valve: a lightweight
                      air-powered replacement to the current main oxidizer valve.
                    </li>
                    <li>
                      3D-printed nozzle: in partnership with
                      {' '}
                      <a href="https://msam-uwaterloo.ca/" target="_blank" rel="noreferrer">MSAM</a>
                      , this is a
                      {' '}
                      <a
                        href="https://en.wikipedia.org/wiki/Bell_nozzle"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Rao parabolic nozzle
                      </a>
                      {' '}
                      which will be
                      {' '}
                      <a
                        href="https://en.wikipedia.org/wiki/Selective_laser_melting"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SLM printed
                      </a>
                      {' '}
                      out of Inconel. It features a novel phase-change liquid cooling system
                      with structural topology optimization done in
                      {' '}
                      <a href="https://www.ansys.com" target="_blank" rel="noreferrer">ANSYS</a>
                      , and will replace the current graphite nozzle to drastically reduce
                      weight and increase divergence efficiency.
                    </li>
                    <li>
                      Oxidizer fill sensing: this new subsystem will measure the fill level of
                      the rocket&apos;s oxidizer tank during pre-launch operations using a floating
                      magnetic indicator and
                      {' '}
                      <a
                        href="https://en.wikipedia.org/wiki/Hall_effect_sensor"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Hall effect sensors
                      </a>
                      {' '}
                      along the length of the tank. This allows the operations team to be
                      certain that the tank is full enough to launch the rocket.
                    </li>
                  </ul>
                </Content>
              </Tab>
              <Tab
                eventKey="rocketcan"
                title="ROCKETCAN"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="ROCKETCAN">
                  <h3>OVERVIEW</h3>
                  <p>
                    RocketCAN is the system of boards distributed throughout the rocket and
                    linked through a CAN bus that are responsible for all onboard electrical
                    functionality. Each board has a specific function such as radio transmission
                    of telemetry, control of valves, and gathering sensor data. All of the boards
                    and software have been entirely designed by members of the rocketry team,
                    including the custom CAN library that the system is based on.
                  </p>
                  <h3>COMPONENTS</h3>
                  <p>
                    RocketCAN is easily adaptable and can consist of whatever boards are required
                    by the specific application. The following is a list of the current CAN boards:
                  </p>
                  <br />
                  <table style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <th style={{ width: '10%' }}>Board</th>
                        <th>Description</th>
                      </tr>
                      <tr>
                        <td>Radio Board</td>
                        <td>
                          Handles short-range radio communications and can depower the rest of
                          the CAN bus to save power.
                        </td>
                      </tr>
                      <tr>
                        <td>Live Telemetry</td>
                        <td>
                          An improved version of radio board that allows for long-range
                          communication, and therefore the transmission of live telemetry data
                          throughout flight.
                        </td>
                      </tr>
                      <tr>
                        <td>Injector Board</td>
                        <td>
                          Designed to control the rocket&apos;s injector valve, this CAN board is a
                          high powered DC motor controller.
                        </td>
                      </tr>
                      <tr>
                        <td>Vent Board</td>
                        <td>
                          Designed to control a solenoid vent valve, this CAN board allows a
                          medium current device to be powered on and off.
                        </td>
                      </tr>
                      <tr>
                        <td>Fill Sensing</td>
                        <td>
                          This board is designed to read from a series of up to 14 hall effect
                          sensors in order to detect the fill level of the oxidizer tank.
                        </td>
                      </tr>
                      <tr>
                        <td>Logger Board</td>
                        <td>
                          This small board is responsible for logging all CAN messages to an SD
                          card.
                        </td>
                      </tr>
                      <tr>
                        <td>Mini Sensor</td>
                        <td>
                          This small board features an accelerometer, gyro, magnetometer, and
                          connectors for a temperature sensor and pressure transducer to measure
                          data
                          about the rocket&apos;s performance.
                        </td>
                      </tr>
                      <tr>
                        <td>GPS Board</td>
                        <td>
                          This board uses a GPS to relay the rocket&apos;s location to the CAN bus
                          at
                          all times.
                        </td>
                      </tr>
                      <tr>
                        <td>Remote Arming</td>
                        <td>
                          This large board allows the two altimeters that control the recovery
                          system to be powered on and off via commands from the CAN bus. It also
                          collects the rocket&apos;s current altitude according to one of the
                          altimeters
                          and data about the state of the recovery system, ensuring that the
                          recovery
                          system is completely functional before launch.
                        </td>
                      </tr>
                      <tr>
                        <td>USB Debug</td>
                        <td>
                          This board allows CAN messages to be printed and sent over USB in order
                          to help develop new hardware and software.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>HISTORY</h3>
                  <p>
                    The 2018 rocket, UXO, featured two large flight computers as its means of
                    electrical control. This caused a number of issues if there was a single
                    component failure, requiring the entire flight computer to be replaced.
                    RocketCAN was developed for the 2019 rocket, Shark of the Sky, in order
                    to address these issues, and to allow for more expandability.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <p>
                    The software for some of the newest boards is still being completed, and there
                    are new boards currently being developed.
                  </p>
                </Content>
              </Tab>
              <Tab
                eventKey="daq"
                title="DAQ"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="DAQ">
                  <h3>OVERVIEW</h3>
                  <p>
                    DAQ, data acquisition, is the system through which engine data is recorded
                    during
                    cold flow and static fire tests. We obtain, monitor, and log data from the
                    various
                    sensors attached to the rocket, including load cells, pressure transducers, and
                    thermistors. This subsystem covers the entire chain from calibrating the sensors
                    to connecting the various cables and wires to writing the computer code to
                    process the data.
                    Although DAQ is mostly used during engine tests in Waterloo, a version of the
                    system travels with us to competition. It is used together with RLCS to provide
                    live data during the launch.
                  </p>
                  <h3>COMPONENTS</h3>
                  <ul>
                    <li>LabVIEW</li>
                    <li>Data acquisition PCB</li>
                    <li>NI-DAQ module</li>
                    <li>Sensors</li>
                  </ul>
                  <h3>HISTORY</h3>
                  <p>
                    Prior to the current setup, all tests conducted in Waterloo were run using a
                    minimal host of load and pressure sensors. These were routed into a PCB provided
                    by National Instruments to monitor the test data before the development of the
                    team&apos;s custom DAQ board.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <p>
                    A wireless long-distance DAQ is currently being investigated. It would allow for
                    more freedom during tests and have the potential to be transported to different
                    locations.
                    Another goal for DAQ is to optimize the system to minimize noise and receive
                    data
                    with higher resolution.
                  </p>
                </Content>
              </Tab>
              <Tab
                eventKey="rlcs"
                title="RLCS/OPS"
                tabClassName={styles.subsystemTabButton}
                className={styles.subsystemTab}
              >
                <Content hr title="REMOTE LAUNCH CONTROL SYSTEM | OPERATIONS">
                  <h3>OVERVIEW</h3>
                  <p>
                    RLCS, the Remote Launch Control System, is responsible for allowing remote
                    control of the ground based plumbing, and enabling communication between Mission
                    Control and the rocket&apos;s on-board flight computers. This means that it
                    allows the
                    rocket to be fuelled and launched remotely and from a safe distance.
                    Our team also has set operations procedures that are carried out using RLCS.
                  </p>
                  <h3>COMPONENTS</h3>
                  <p>
                    RLCS consists of 2 primary components: the client and tower side boxes.
                    The client side box consists of a display and a bank of switches that allow the
                    operator to see the state of and control the rocket. It uses a long range XBee
                    radio to communicate with the tower side box, and is powered by an Arduino Mega.
                    The tower side box is responsible for the electrical control of the ground
                    systems. It contains a series of custom PCBs that allow for the control of
                    motorized valves that control the flow of propellant, as well as provide data
                    acquisition from sensors in the plumbing system. It also features a pair of
                    radios, one of which communicates with the tower side box, and the other of
                    which relays commands to the rocket&apos;s onboard systems.
                  </p>
                  <h3>HISTORY</h3>
                  <p>
                    As our rockets have become larger, and as we focused more on safety, we
                    required a remote system for controlling our rockets. The initial RLCS
                    consisted of four or five different boxes, and was far from robust. The
                    second version operated as described above and was almost completely
                    redesigned with a major emphasis being placed on robustness. We&apos;ve
                    successfully
                    used it for three years, including on two launches and in countless tests.
                  </p>
                  <h3>CURRENTLY WORKING ON</h3>
                  <p>
                    A third version of RLCS is nearing completion. This version is focused on
                    streamlining the design, and includes redesigns of all the custom PCBs to
                    create a system that can be easily expanded to handle bigger, more complex
                    rockets.
                  </p>
                  <p>
                    In terms of operations, we&apos;re currently working on our operations simulator
                    software, which runs a realistic simulation of our operations procedure on a
                    virtual model of our systems fill setup. You can check out our repository
                    {' '}
                    <a
                      href="https://github.com/waterloo-rocketry/topside"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                    A brief overview of our software looks like this:
                  </p>
                  <ul>
                    <li>
                      <p>
                        The plumbing setup we use to fill our rocket with its prerequisite chemicals
                        is represented by a graph using
                        <a href="https://networkx.github.io/" target="_blank" rel="noreferrer">
                          NetworkX
                        </a>
                        . We use this library in combination with an organic, home-grown algorithm
                        to simulate and monitor pressure at any point in the graph through time.
                      </p>
                    </li>
                    <li>
                      <p>
                        Our visualization software uses an optimization library to determine a
                        layout for the systems graph, which is then displayed by the UI.
                      </p>
                    </li>
                    <li>
                      <p>
                        The UI is done in Qt, and interfaces with the rest of our (Python) code to
                        control the plumbing engine.
                      </p>
                    </li>
                    <li>
                      <p>
                        The components and engine structure are read in by our plumbing
                        description language parser, which interprets a YAML-like plumbing
                        description
                        language to create the plumbing system.
                      </p>
                    </li>
                    <li>
                      <p>
                        Procedures can be specified with our procedures description language.
                        Our procedures parser interprets the provided PDL, which enables automatic
                        navigation of a specific set of actions.
                      </p>
                    </li>
                  </ul>
                </Content>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subsystems;
