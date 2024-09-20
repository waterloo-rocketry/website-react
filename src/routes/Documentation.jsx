import { React } from 'react';
import { Container, Row } from 'react-bootstrap';

import CoverPhoto from '../img/documentation/cover_documentation';
import Content from '../components/Content/Content';
import SubsectionTitle from '../components/SubsectionTitle/SubsectionTitle';

import styles from './css/Join.module.css';

import joinCoverPhoto from '../img/join/cover_join.jpg';

      <CoverPhoto image={joinCoverPhoto} style={{ backgroundPosition: '50% 65%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-5 justify-content-center">
          <Content title="Official Competition and Work Term Reports">
            Here you can find all of our competition project reports from
	    thoughout the years of our teams history. Feel free to read 
	    and take ideas from them!<br>
	    Furthurmore, available are some student work term reports. 
	    These are technical documents team members have written for 
	    school about a project they undertook during their coop term.
	    Many members chose to write theirs on projects they undertook 
	    for rocketry. Feel free to give them a read but please do credit
	    them if you use any designs or information.<b>
	    If you would like more insight or furthur clarification on any
	    of our projects, feel free to send an email to: contact@waterloorocketry.com<b>
	    For more information on our software and electrical projects, visit <a href="https://docs.waterloorocketry.com/" target="_blank" docs.waterloorocketry.com</a>
          </Content>
          <Content title="Competition Reports">
            <ul class="competition-reports-link-list">
	    	<li>
			2024 Launch Canada (Borealis) |
			<a href="https://www.waterloorocketry.com/pdfs/2024_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2024_project_report.pdf" download>Download</a>
		</li>
		<li>
			2023 SpacePort America Cup (Leviathan of the Sky) |
			<a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf" download>Download</a>
		</li>
		<li>
			2022 IREC (Kraken of the Sky) |
			<a href="https://www.waterloorocketry.com/pdfs/2022_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2022_project_report.pdf" download>Download</a>
		</li>
		<li>
			2019 IREC (Shark of the Sky) |
			<a href="https://www.waterloorocketry.com/pdfs/2019_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/20219_project_report.pdf" download>Download</a>
		</li>
		<li>
			2018 IREC (Unexploded Ordnance) |
			<a href="https://www.waterloorocketry.com/pdfs/2018_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2018_project_report.pdf" download>Download</a>
		</li>
		<li>
			2017 IREC (Vidar III) |
			<a href="https://www.waterloorocketry.com/pdfs/2017_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2017_project_report.pdf" download>Download</a>
		</li>
		<li>
			2016 IREC (Vidar III) |
			<a href="https://www.waterloorocketry.com/pdfs/2016_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2016_project_report.pdf" download>Download</a>
		</li>
		<li>
			2014 IREC (Vidar) |
			<a href="https://www.waterloorocketry.com/pdfs/2014_project_report.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/2014_project_report.pdf" download>Download</a>
		</li>
	    </ul>
          </Content>
	  <Content title="Work Term Reports">
            <ul class="competition-reports-link-list">
		<li>
			Increasing Rocket Apogee by 23% Through Iterative Design - Joel Godard (Jan 2024) |
			<a href="https://www.waterloorocketry.com/pdfs/JoelGodardJan2024.pdf" target="_blank">View</a></li> |
	    		<a href="https://www.waterloorocketry.com/pdfs/JoelGodardJan2024.pdf" download>Download</a>
		</li>
		<li>
			The Design of the Recovery Electronics Module for the 2023 IREC Competition - Stefan Arroyo-Cottier (Jan 2024) |
			<a href="https://www.waterloorocketry.com/pdfs/StefanArroyo-CottierJan2024.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/StefanArroyo-CottierJan2024.pdf" download>Download</a>
		</li>
		<li>
			The Design of a Testable Hybrid Rocket Engine Using Software Analysis - Artem Sotnikov (Jan 2023) |
			<a href="https://www.waterloorocketry.com/pdfs/ArtemSotnikovJan2023.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ArtemSotnikovJan2023.pdf" download>Download</a>
		</li>
		<li>
			A Practical Method For Reducing Skin Friction Drag in Sounding Rockets - Aaron Leszkowiat (Sep 2023) |
			<a href="https://www.waterloorocketry.com/pdfs/AaronLeszkowiatSep2023.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/AaronLeszkowiatSep2023.pdf" download>Download</a>
		</li>
		<li>
			Design and Testing of a Coaxial Propellant Valve - Michael Zhou (Sep 2023) |
			<a href="https://www.waterloorocketry.com/pdfs/MichaelZhouSep2023.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/MichaelZhouSep2023.pdf" download>Download</a>
		</li>
		<li>
			Design of a Weatherproof Laptop for Rocketry Operations - Zachariah Mears (Sep 2022) |
			<a href="https://www.waterloorocketry.com/pdfs/ZachariahMearsSep2022.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ZachariahMearsSep2022.pdf" download>Download</a>
		</li>
		<li>
			Flightworthiness Verification of a 3U CubeSat for Sounding Rocket Payloads with Ansys FEA - Zhen Bo Bian (Jan 2021)
			<a href="https://www.waterloorocketry.com/pdfs/ZhenBoBianJan2021.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ZhenBoBianJan2021.pdf" download>Download</a>
		</li>
		<li>
			Design of a Remote Arming System for Sounding Rocket Recovery Systems - Zachariah Mears (May 2021) |
			<a href="https://www.waterloorocketry.com/pdfs/ZachariahMearsMay2021.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ZachariahMearsMay2021.pdf" download>Download</a>
		</li>
		<li>
			The Design of a Reefing Parachute Recovery System for a Student Competition Sounding Rocket - Artem Sotnikov (Sep 2021) |
			<a href="https://www.waterloorocketry.com/pdfs/ArtemSotnikovSep2021.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ArtemSotnikovSep2021.pdf" download>Download</a>
		</li>
		<li>
			Design and Analysis of a Thrust Structure for a Hybrid Sounding Rocket - Shirley Kong (Sep 2021) |
			<a href="https://www.waterloorocketry.com/pdfs/ShirleyKongSep2021.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ShirleyKongSep2021.pdf" download>Download</a>
		</li>
		<li>
			Design of Robust 635 LBF NOS-Ethanol Rocket Engine for Ground Testing - Zhen Bo Bian (Sep 2021) |
			<a href="https://www.waterloorocketry.com/pdfs/ZhenBoBianSep2021.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ZhenBoBianSep2021.pdf" download>Download</a>
		</li>
		<li>
			Design of Test Stand for High Risk Rocket Engine Testing - Hamza Abuabah (May 2020) |
			<a href="https://www.waterloorocketry.com/pdfs/HamzaAbuabahMay2020.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/HamzaAbuabahMay2020.pdf" download>Download</a>
		</li>
		<li>
			Design of a CubeSat Structure for Sounding Rocket Payloads - Kyle Tam (May 2020) |
			<a href="https://www.waterloorocketry.com/pdfs/KyleTamMay2020.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/KyleTamMay2020.pdf" download>Download</a>
		</li>
		<li>
			Development of a laminate calculator based on Classical Laminate Plate Theory - Shirley Kong (May 2020) |
			<a href="https://www.waterloorocketry.com/pdfs/ShirleyKongMay2020.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/ShirleyKongMay2020.pdf" download>Download</a>
		</li>
		<li>
			Design of a Safety Vent Valve - Matthew Gencher (May 2020) |
			<a href="https://www.waterloorocketry.com/pdfs/MatthewGencherMay2020.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/MatthewGencherMay2020.pdf" download>Download</a>
		</li>
		<li>
			Development of a Layout Algorithm for Plumbing System Visualization - Jacob Deery (Sep 2020) |
			<a href="https://www.waterloorocketry.com/pdfs/JacobDeerySep2020.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/JacobDeerySep2020.pdf" download>Download</a>
		</li>
		<li>
			Design of an Upgraded Fill Disconnect System Compatible with Quick Connect Fittings - Ruoqin Jiang (Sep 2019) |
			<a href="https://www.waterloorocketry.com/pdfs/RuoqinJiangSep2019.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/RuoqinJiangSep2019.pdf" download>Download</a>
		</li>
		<li>
			Analysis and selection of microcontrollers for rocketry avionics application - Ivan Baranov (Jan 2017) |
			<a href="https://www.waterloorocketry.com/pdfs/IvanBaranovJan2017.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/IvanBaranovJan2017.pdf" download>Download</a>
		</li>
		<li>
			Bolt Head Drag - Nicholas Christopher (July 2017) |
			<a href="https://www.waterloorocketry.com/pdfs/NicholasChristopherJuly2017.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/NicholasChristopherJuly2017.pdf" download>Download</a>
		</li>
		<li>
			Design of an Integrated Tank Stand for Rocket Engine Testing - Robin Liu (Sep 2017) |
			<a href="https://www.waterloorocketry.com/pdfs/RobinLiuSep2017.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/RobinLiuSep2017.pdf" download>Download</a>
		</li>
		<li>
			Design of an Avionics Module for the Vidar III Hybrid-Engine Rocket - Robin Liu (Jan 2016) |
			<a href="https://www.waterloorocketry.com/pdfs/RobinLiuJan2016.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/RobinLiuJan2016.pdf" download>Download</a>
		</li>
		<li>
			Center of Gravity Simulation for a Hybrid Rocket Engine - Hilbert Li (May 2016) |
			<a href="https://www.waterloorocketry.com/pdfs/HilbertLiMay2016.pdf" target="_blank">View</a> |
			<a href="https://www.waterloorocketry.com/pdfs/HilbertLiMay2016.pdf" download>Download</a>
		</li>
	    </ul>
          </Content>
        </Row>
      </Container>
    </>
  );
};

export default Join;
