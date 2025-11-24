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
                <a href="https://www.waterloorocketry.com/pdfs/2025_payload_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2025_payload_report.pdf" download>Download</a>
              </li>
              <li>
                2025 Launch Canada (Aurora) |
                <a href="https://www.waterloorocketry.com/pdfs/2025_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2025_project_report.pdf" download>Download</a>
              </li>
              <li>
                2024 Launch Canada (Borealis) |
                <a href="https://www.waterloorocketry.com/pdfs/2024_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2024_project_report.pdf" download>Download</a>
              </li>
              <li>
                2023 IREC (Leviathan of the Sky) |
                <a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf" download>Download</a>
              </li>
              <li>
                2022 IREC (Kraken of the Sky) |
                <a href="https://www.waterloorocketry.com/pdfs/2022_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2022_project_report.pdf" download>Download</a>
              </li>
              <li>
                2019 IREC (Shark of the Sky) |
                <a href="https://www.waterloorocketry.com/pdfs/2019_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/20219_project_report.pdf" download>Download</a>
              </li>
              <li>
                2018 IREC (Unexploded Ordnance) |
                <a href="https://www.waterloorocketry.com/pdfs/2018_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2018_project_report.pdf" download>Download</a>
              </li>
              <li>
                2017 IREC (Vidar III) |
                <a href="https://www.waterloorocketry.com/pdfs/2017_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2017_project_report.pdf" download>Download</a>
              </li>
              <li>
                2016 IREC (Vidar III) |
                <a href="https://www.waterloorocketry.com/pdfs/2016_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2016_project_report.pdf" download>Download</a>
              </li>
              <li>
                2014 IREC (Vidar) |
                <a href="https://www.waterloorocketry.com/pdfs/2014_project_report.pdf" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://www.waterloorocketry.com/pdfs/2014_project_report.pdf" download>Download</a>
              </li>
            </ul>
          </Content>
          <Content title="Technical Reports">
            <ul className="competition-reports-link-list">
              <li>
                The Structural Analysis of the Static Fire Test Stand - Jiya Makwana (May 2024) |
                <a href="https://drive.google.com/file/d/11GC4f6YCBrLKAj2u-H5ouNC7D9_8236c/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=11GC4f6YCBrLKAj2u-H5ouNC7D9_8236c" download>Download</a>
              </li>
              <li>
                Airbrakes CFD Report - Richard Ding, Joe Dolina (Aug 2024) |
                <a href="https://drive.google.com/file/d/1lD9XAifR0tfiJs-JQUnJ0HrR1B0OIGfy/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1lD9XAifR0tfiJs-JQUnJ0HrR1B0OIGfy" download>Download</a>
              </li>
            </ul>
          </Content>
          <Content title="Work Term Reports">
            {/* eslint-disable max-len */}
            <ul className="competition-reports-link-list">
              <li>
                Mechanical Design of Roll Control Canards - Ben Pickens (June 2025) |
                <a href="https://drive.google.com/file/d/1k6xjEufHSWInonTrrOUHfPoZFRcp5GzU/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1k6xjEufHSWInonTrrOUHfPoZFRcp5GzU" download>Download</a>
              </li>
              <li>
                Canards Aerodynamic Design for an Active Roll-Control System - Luca Scavone (March 2025) |
                <a href="https://drive.google.com/file/d/174mq2jf7EHIr_QtrmcfE5dtUbLe7okBr/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=174mq2jf7EHIr_QtrmcfE5dtUbLe7okBr" download>Download</a>
              </li>
              <li>
                Increasing Rocket Apogee by 23% Through Iterative Design - Joel Godard (Jan 2024) |
                <a href="https://drive.google.com/file/d/1WCfqrq5eObcD8L7Ti5hjObDkq3xk2J32/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1WCfqrq5eObcD8L7Ti5hjObDkq3xk2J32" download>Download</a>
              </li>
              <li>
                The Design of the Recovery Electronics Module for the 2023 IREC Competition - Stefan Arroyo-Cottier (Jan 2024) |
                <a href="https://drive.google.com/file/d/1GSmT4Rn4Gx0krKcMmN34iBY3zURa2_Bi/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1GSmT4Rn4Gx0krKcMmN34iBY3zURa2_Bi" download>Download</a>
              </li>
              <li>
                The Design of a Testable Hybrid Rocket Engine Using Software Analysis - Artem Sotnikov (Jan 2023) |
                <a href="https://drive.google.com/file/d/1S1HPG4jcGP1DqZBhM8gB1YVeVin-YZPW/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1S1HPG4jcGP1DqZBhM8gB1YVeVin-YZPW" download>Download</a>
              </li>
              <li>
                A Practical Method For Reducing Skin Friction Drag in Sounding Rockets - Aaron Leszkowiat (Sep 2023) |
                <a href="https://drive.google.com/file/d/13vonNjU3d0A9C-SAtyrdvax5SVbD-dHY/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=13vonNjU3d0A9C-SAtyrdvax5SVbD-dHY" download>Download</a>
              </li>
              <li>
                Design and Testing of a Coaxial Propellant Valve - Michael Zhou (Sep 2023) |
                <a href="https://drive.google.com/file/d/1WzVx9eEEpdomRLxhcIoJ7r-5EQDsG41A/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1WzVx9eEEpdomRLxhcIoJ7r-5EQDsG41A" download>Download</a>
              </li>
              <li>
                Design of a Weatherproof Laptop for Rocketry Operations - Zachariah Mears (Sep 2022) |
                <a href="https://drive.google.com/file/d/1cQ5RsS397zvtpukP9yabZGdcUj8TN_J7/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1cQ5RsS397zvtpukP9yabZGdcUj8TN_J7" download>Download</a>
              </li>
              <li>
                Flightworthiness Verification of a 3U CubeSat for Sounding Rocket Payloads with Ansys FEA - Zhen Bo Bian (Jan 2021)
                <a href="https://drive.google.com/file/d/1svfrbJoNVIn8QLqsAxZuygPx-Sminuqw/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1svfrbJoNVIn8QLqsAxZuygPx-Sminuqw" download>Download</a>
              </li>
              <li>
                Design of a Remote Arming System for Sounding Rocket Recovery Systems - Zachariah Mears (May 2021) |
                <a href="https://drive.google.com/file/d/1mJdbU_DnHBsXbkE7CIYt-ecdo5iTb_A0/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1mJdbU_DnHBsXbkE7CIYt" download>Download</a>
              </li>
              <li>
                The Design of a Reefing Parachute Recovery System for a Student Competition Sounding Rocket - Artem Sotnikov (Sep 2021) |
                <a href="https://drive.google.com/file/d/1vLr4iOF98OzdV2tspgNxmfHTgOtGnNoY/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1vLr4iOF98OzdV2tspgNxmfHTgOtGnNoY" download>Download</a>
              </li>
              <li>
                Design and Analysis of a Thrust Structure for a Hybrid Sounding Rocket - Shirley Kong (Sep 2021) |
                <a href="https://drive.google.com/file/d/1sRroc3RC9PoDO2NRHMSUVpDbmefWFZL3/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1sRroc3RC9PoDO2NRHMSUVpDbmefWFZL3" download>Download</a>
              </li>
              <li>
                Design of Robust 635 LBF NOS-Ethanol Rocket Engine for Ground Testing - Zhen Bo Bian (Sep 2021) |
                <a href="https://drive.google.com/file/d/13wcIYlFyis6gbUdSigMnKtdh1-airZBQ/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=13wcIYlFyis6gbUdSigMnKtdh1-airZBQ" download>Download</a>
              </li>
              <li>
                Design of Test Stand for High Risk Rocket Engine Testing - Hamza Abuabah (May 2020) |
                <a href="https://drive.google.com/file/d/12F9SWNXzpTmkqI2hn29A6uqWMmJUXX0j/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=12F9SWNXzpTmkqI2hn29A6uqWMmJUXX0j" download>Download</a>
              </li>
              <li>
                Development of a laminate calculator based on Classical Laminate Plate Theory - Shirley Kong (May 2020) |
                <a href="https://drive.google.com/file/d/1OKmbffri3W1MqW8Ls_vqQ2R3psECpFIj/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1OKmbffri3W1MqW8Ls_vqQ2R3psECpFIj" download>Download</a>
              </li>
              <li>
                Design of a Safety Vent Valve - Matthew Gencher (May 2020) |
                <a href="https://drive.google.com/file/d/1di-0h_MMZf5IB7Vwp1JeGVw4BenTNKcX/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=1di-0h_MMZf5IB7Vwp1JeGVw4BenTNKcX" download>Download</a>
              </li>
              <li>
                Development of a Layout Algorithm for Plumbing System Visualization - Jacob Deery (Sep 2020) |
                <a href="https://drive.google.com/file/d/15Sd0619EMNpo_Z3IYPA4vw-ykMG10Db6/preview" target="_blank" rel="noreferrer">View</a>
                {' '}
                |
                <a href="https://drive.google.com/uc?export=download&id=15Sd0619EMNpo_Z3IYPA4vw-ykMG10Db6" download>Download</a>
              </li>
            </ul>
          </Content>
        </Row>
      </Container>
    </>
  );
};

export default Documentation;
