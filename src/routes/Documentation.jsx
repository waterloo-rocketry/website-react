import { React } from 'react';
import { Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';

import documentCoverPhoto from '../img/documentation/cover_documentation.webp';

const Documentation = () => {
  return (
    <>
      <CoverPhoto image={documentCoverPhoto} style={{ backgroundPosition: '50% 45%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="Official Competition and Work Term Reports">
            Here you can find all of our competition project reports from
            throughout the years of our teams history. Feel free to read
            and take ideas from them!
            Furthermore, available are some student work term reports.
            These are technical documents team members have written for
            school about a project they undertook during their coop term.
            Many members chose to write theirs on projects they undertook
            for rocketry. Feel free to give them a read but please do credit
            them if you use any designs or information.
            <b>
              If you would like more insight or further clarification on any
              of our projects, feel free to send an email to: contact@waterloorocketry.com
            </b>
            For more information on our software and electrical projects, visit
            {' '}
            <a href="https://docs.waterloorocketry.com/" target="_blank" rel="noreferrer">docs.waterloorocketry.com</a>
          </Content>
          <Content title="Competition Reports">
            {/* eslint-disable max-len */}
            <ul className="competition-reports-link-list">
              <li>
                2025 Launch Canada Payload Challenge (Aurora) |
                <a href="/pdfs/2025_payload_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2025_payload_report.pdf" download>Download</a>
              </li>
              <li>
                2025 Launch Canada (Aurora) |
                <a href="/pdfs/2025_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2025_project_report.pdf" download>Download</a>
              </li>
              <li>
                2024 Launch Canada (Borealis) |
                <a href="/pdfs/2024_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2024_project_report.pdf" download>Download</a>
              </li>
              <li>
                2023 IREC (Leviathan of the Sky) |
                <a href="/pdfs/2023_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2023_project_report.pdf" download>Download</a>
              </li>
              <li>
                2022 IREC (Kraken of the Sky) |
                <a href="/pdfs/2022_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2022_project_report.pdf" download>Download</a>
              </li>
              <li>
                2019 IREC (Shark of the Sky) |
                <a href="/pdfs/2019_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2019_project_report.pdf" download>Download</a>
              </li>
              <li>
                2018 IREC (Unexploded Ordnance) |
                <a href="/pdfs/2018_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2018_project_report.pdf" download>Download</a>
              </li>
              <li>
                2017 IREC (Vidar III) |
                <a href="/pdfs/2017_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2017_project_report.pdf" download>Download</a>
              </li>
              <li>
                2016 IREC (Vidar III) |
                <a href="/pdfs/2016_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2016_project_report.pdf" download>Download</a>
              </li>
              <li>
                2014 IREC (Vidar) |
                <a href="/pdfs/2014_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/2014_project_report.pdf" download>Download</a>
              </li>
            </ul>
          </Content>
          <Content title="Technical Reports">
            <ul className="competition-reports-link-list">
              <li>
                An Ethanol-Nitrous Oxide Regeneratively-Cooled Liquid Rocket Engine (March 2026) |
                <a href="/pdfs/tr_2026_regen_liquid_engine.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/tr_2026_regen_liquid_engine.pdf" download>Download</a>
              </li>
              <li>
                Design of an Ethanol-Liquid Oxygen Rocket Engine with Thrust Vector Control (April 2025) |
                <a href="https://drive.google.com/file/d/1S-WHy9eZPrzOjpIwyzloyIxBCHes_5Z6/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1S-WHy9eZPrzOjpIwyzloyIxBCHes_5Z6" download>Download</a>
              </li>
              <li>
                Roll Control and Estimation of a Canard-controlled Sounding Rocket - Finn Breuer (Dec 2025) |
                <a href="https://drive.google.com/file/d/119KyO_dsHsNTk1UnAL251T2Rk1VyRscx/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=119KyO_dsHsNTk1UnAL251T2Rk1VyRscx" download>Download</a>
              </li>
              <li>
                Airbrakes CFD Report - Richard Ding, Joe Dolina (Aug 2024) |
                <a href="/pdfs/tr_2024_airbrakes_cfd.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/tr_2024_airbrakes_cfd.pdf" download>Download</a>
              </li>
              <li>
                The Structural Analysis of the Static Fire Test Stand - Jiya Makwana (May 2024) |
                <a href="/pdfs/tr_2024_static_fire_test_stand.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/tr_2024_static_fire_test_stand.pdf" download>Download</a>
              </li>
            </ul>
          </Content>
          <Content title="Work Term Reports">
            {/* eslint-disable max-len */}
            <ul className="competition-reports-link-list">
              <li>
                Mechanical Design of Roll Control Canards - Ben Pickens (June 2025) |
                <a href="/pdfs/wtr_2025_pickens_roll_control_canards.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2025_pickens_roll_control_canards.pdf" download>Download</a>
              </li>
              <li>
                Canards Aerodynamic Design for an Active Roll-Control System - Luca Scavone (March 2025) |
                <a href="/pdfs/wtr_2025_scavone_canards_aerodynamics.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2025_scavone_canards_aerodynamics.pdf" download>Download</a>
              </li>
              <li>
                Increasing Rocket Apogee by 23% Through Iterative Design - Joel Godard (Jan 2024) |
                <a href="/pdfs/wtr_2024_godard_apogee_iterative_design.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2024_godard_apogee_iterative_design.pdf" download>Download</a>
              </li>
              <li>
                The Design of the Recovery Electronics Module for the 2023 IREC Competition - Stefan Arroyo-Cottier (Jan 2024) |
                <a href="/pdfs/wtr_2024_arroyo_cottier_recovery_electronics.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2024_arroyo_cottier_recovery_electronics.pdf" download>Download</a>
              </li>
              <li>
                The Design of a Testable Hybrid Rocket Engine Using Software Analysis - Artem Sotnikov (Jan 2023) |
                <a href="/pdfs/wtr_2023_sotnikov_hybrid_engine.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2023_sotnikov_hybrid_engine.pdf" download>Download</a>
              </li>
              <li>
                A Practical Method For Reducing Skin Friction Drag in Sounding Rockets - Aaron Leszkowiat (Sep 2023) |
                <a href="/pdfs/wtr_2023_leszkowiat_skin_friction_drag.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2023_leszkowiat_skin_friction_drag.pdf" download>Download</a>
              </li>
              <li>
                Design and Testing of a Coaxial Propellant Valve - Michael Zhou (Sep 2023) |
                <a href="/pdfs/wtr_2023_zhou_coaxial_propellant_valve.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2023_zhou_coaxial_propellant_valve.pdf" download>Download</a>
              </li>
              <li>
                Design of a Weatherproof Laptop for Rocketry Operations - Zachariah Mears (Sep 2022) |
                <a href="/pdfs/wtr_2022_mears_weatherproof_laptop.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2022_mears_weatherproof_laptop.pdf" download>Download</a>
              </li>
              <li>
                Flightworthiness Verification of a 3U CubeSat for Sounding Rocket Payloads with Ansys FEA - Zhen Bo Bian (Jan 2021) |
                <a href="/pdfs/wtr_2021_bian_cubesat_flightworthiness.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2021_bian_cubesat_flightworthiness.pdf" download>Download</a>
              </li>
              <li>
                Design of a Remote Arming System for Sounding Rocket Recovery Systems - Zachariah Mears (May 2021) |
                <a href="/pdfs/wtr_2021_mears_remote_arming.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2021_mears_remote_arming.pdf" download>Download</a>
              </li>
              <li>
                The Design of a Reefing Parachute Recovery System for a Student Competition Sounding Rocket - Artem Sotnikov (Sep 2021) |
                <a href="/pdfs/wtr_2021_sotnikov_reefing_parachute.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2021_sotnikov_reefing_parachute.pdf" download>Download</a>
              </li>
              <li>
                Design and Analysis of a Thrust Structure for a Hybrid Sounding Rocket - Shirley Kong (Sep 2021) |
                <a href="/pdfs/wtr_2021_kong_thrust_structure.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2021_kong_thrust_structure.pdf" download>Download</a>
              </li>
              <li>
                Design of Robust 635 LBF NOS-Ethanol Rocket Engine for Ground Testing - Zhen Bo Bian (Sep 2021) |
                <a href="/pdfs/wtr_2021_bian_nos_ethanol_engine.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2021_bian_nos_ethanol_engine.pdf" download>Download</a>
              </li>
              <li>
                Design of Test Stand for High Risk Rocket Engine Testing - Hamza Abuabah (May 2020) |
                <a href="/pdfs/wtr_2020_abuabah_engine_test_stand.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2020_abuabah_engine_test_stand.pdf" download>Download</a>
              </li>
              <li>
                Development of a laminate calculator based on Classical Laminate Plate Theory - Shirley Kong (May 2020) |
                <a href="/pdfs/wtr_2020_kong_laminate_calculator.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2020_kong_laminate_calculator.pdf" download>Download</a>
              </li>
              <li>
                Design of a Safety Vent Valve - Matthew Gencher (May 2020) |
                <a href="/pdfs/wtr_2020_gencher_safety_vent_valve.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2020_gencher_safety_vent_valve.pdf" download>Download</a>
              </li>
              <li>
                Development of a Layout Algorithm for Plumbing System Visualization - Jacob Deery (Sep 2020) |
                <a href="/pdfs/wtr_2020_deery_plumbing_layout.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="/pdfs/wtr_2020_deery_plumbing_layout.pdf" download>Download</a>
              </li>
            </ul>
          </Content>
        </Row>
      </Container>
    </>
  );
};

export default Documentation;
