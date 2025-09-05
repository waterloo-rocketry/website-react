import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import MemberImage from '../components/MemberImage/MemberImage';

// Cover
import teamCoverImage from '../img/teams/team-win-min.webp';

// Members
import AaronL from '../img/teams/aaronL.webp';
import AlexA from '../img/teams/alexA.webp';
import AnaD from '../img/teams/anaD.webp';
import AndreA from '../img/teams/andreA.webp';
import AnthonyC from '../img/teams/anthonyC.webp';
import ArmaanS from '../img/teams/armaanS.webp';
import ArtemS from '../img/teams/artemS.webp';
import AshL from '../img/teams/ashL.webp';
import BenP from '../img/teams/benP.webp';
import BonitaS from '../img/teams/bonitaS.webp';
import ChamathW from '../img/teams/chamathW.webp';
import ChrisS from '../img/teams/chrisS.webp';
import ChrisY from '../img/teams/chrisY.webp';
import ConnorS from '../img/teams/connorS.webp';
import DivjotB from '../img/teams/divjotB.webp';
import ElizabethX from '../img/teams/elizabethX.webp';
import FinnB from '../img/teams/finnB.webp';
import FrancisY from '../img/teams/francisY.webp';
import JackC from '../img/teams/jackC.webp';
import JasonH from '../img/teams/jasonH.webp';
import JasonX from '../img/teams/jasonX.webp';
import JenniferL from '../img/teams/jenniferL.webp';
import JeremyS from '../img/teams/jeremyS.webp';
import JerryL from '../img/teams/jerryL.webp';
import JiuchengZ from '../img/teams/jiuchengZ.webp';
import JiyaM from '../img/teams/jiyaM.webp';
import JoeD from '../img/teams/joeD.webp';
import JoelG from '../img/teams/joelG.webp';
import KasiaA from '../img/teams/kasiaA.webp';
import KavinS from '../img/teams/kavinS.webp';
import KeeganT from '../img/teams/keeganT.webp';
import LanaT from '../img/teams/lanaT.webp';
import LucaS from '../img/teams/lucaS.webp';
import LucasS from '../img/teams/lucasS.webp';
import ManavT from '../img/teams/ManavT.webp';
import MatthewG from '../img/teams/matthewG.webp';
import MichaelZ from '../img/teams/michaelZ.webp';
import NahvidZ from '../img/teams/nahvidZ.webp';
import OwenH from '../img/teams/owenH.webp';
import PatrickG from '../img/teams/patrickG.webp';
import PranavM from '../img/teams/pranavM.webp';
import RajetA from '../img/teams/rajatA.webp';
import RheaS from '../img/teams/rheaS.webp';
import RichardD from '../img/teams/richardD.webp';
import RidaS from '../img/teams/ridaS.webp';
import RioL from '../img/teams/rioL.webp';
import RobertC from '../img/teams/robertC.webp';
import RomanK from '../img/teams/romanK.webp';
import RyanL from '../img/teams/ryanL.webp';
import SeanG from '../img/teams/seanG.webp';
import StefanA from '../img/teams/stefanA.webp';
import TessaP from '../img/teams/tessaP.webp';
import ThomasF from '../img/teams/thomasf.webp';
import TristanY from '../img/teams/tristanY.webp';
import XavierR from '../img/teams/xavierR.webp';
import YuRanW from '../img/teams/yuranW.webp';
import ZachariahM from '../img/teams/zachM.webp';

// Alumni
import AaronM from '../img/teams/aaronM.webp';
import AdamP from '../img/teams/adamP.webp';
import AlexM from '../img/teams/alexM.webp';
import CaseyT from '../img/teams/caseyT.webp';
import ChrisV from '../img/teams/chrisV.webp';
import DavidN from '../img/teams/davidN.webp';
import DawsonK from '../img/teams/dawsonK.webp';
import DelaneyD from '../img/teams/delaneyD.webp';
import DorisJ from '../img/teams/dorisJ.webp';
import EdwardY from '../img/teams/edwardY.webp';
import HamzaA from '../img/teams/hamzaA.webp';
import HilbertL from '../img/teams/hilbertL.webp';
import HusseinS from '../img/teams/husseinS.webp';
import IvanB from '../img/teams/ivanB.webp';
import JacobD from '../img/teams/jacobD.webp';
import JustinR from '../img/teams/justinR.webp';
import KaveeshanT from '../img/teams/kaveeshanT.webp';
import KyleT from '../img/teams/kyleT.webp';
import MattiG from '../img/teams/mattiG.webp';
import MirandaD from '../img/teams/mirandaD.webp';
import NickC from '../img/teams/nickC.webp';
import NinaK from '../img/teams/ninaK.webp';
import OzayrR from '../img/teams/ozayrR.webp';
import RobinL from '../img/teams/robinL.webp';
import ShirleyK from '../img/teams/shirleyK.webp';
import StefanM from '../img/teams/stefanM.webp';
import TeresaT from '../img/teams/teresaT.webp';
import TomC from '../img/teams/tomC.webp';
import VithusanR from '../img/teams/vithusanR.webp';
import YashS from '../img/teams/yashS.webp';
import YiqingW from '../img/teams/yiqingW.webp';
import ZacharyT from '../img/teams/zacharyT.webp';
import ZhenboB from '../img/teams/zhenboB.webp';

import styles from './css/Team.module.css';

const Team = () => {
  return (
    <>
      <CoverPhoto image={teamCoverImage} style={{ backgroundPosition: '50% 75%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col>
            <Content title="TEAM">
              <p>
                Waterloo Rocketry is a multidisciplinary team with members from Mechanical,
                Mechatronics, Electrical, Computer, Chemical, Systems Design, Nanotechnology,
                Software, and Civil Engineering, as well as from the Science and Mathematics
                faculties.
                Our team members have diverse backgrounds and skillsets ranging from firmware and
                systems programming to structural and thermal analysis, and encompassing everything
                in between.
              </p>
            </Content>
          </Col>
        </Row>

        <Container className={styles.containerFluid} fluid>
          <MemberImage image={TessaP} name="Tessa Pugh" title="Senior Member" />
          <MemberImage image={JeremyS} name="Jeremy Schnellhardt" title="Team Co-Lead" />
          <MemberImage image={BenP} name="Ben Pickens" title="Safety Captain/Controls Co-Lead" />
          <MemberImage image={RheaS} name="Rhea Scollie" title="Safety Captain/Payload Co-Lead" />
          <MemberImage image={AshL} name="Ash Lang" title="Safety Captain/Electrical Co-Lead" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" title="Senior Member" />
          <MemberImage image={JackC} name="Jack Christensen" title="Senior Member" />
          <MemberImage image={FrancisY} name="Francis Yao" title="Senior Member (Airframe/Launch Tower)" />
          <MemberImage image={RioL} name="Rio Liu" title="Electrical" />
          <MemberImage image={MatthewG} name="Matthew Gordon" title="Senior Member" />
          <MemberImage image={JoelG} name="Joel Godard" title="Senior Member" />
          <MemberImage image={NahvidZ} name="Nahvid Zolfaghari" title="Senior Member" />
          <MemberImage image={JoeD} name="Joe Dolina" title="Senior Member" />
          <MemberImage image={XavierR} name="Xavier Rayes" title="Propulsion/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" title="Senior Member" />
          <MemberImage image={AndreA} name="Andre Arroyo-Cottier" title="Recovery Co-Lead" />
          <MemberImage image={OwenH} name="Owen Henry" title="Senior Member" />
          <MemberImage image={ThomasF} name="Thomas Fairhead" title="Propulsion Co-Lead" />
          <MemberImage image={KeeganT} name="Keegan Tripp" title="Senior Member" />
          <MemberImage image={RyanL} name="Ryan Lau" title="Flight Dynamics" />
          <MemberImage image={JasonX} name="Jason Xu" title="Electrical Lead" />
          <MemberImage image={KasiaA} name="Kasia-Alexei Delpeche" title="Senior Member" />
          <MemberImage image={JiyaM} name="Jiya Makwana" title="Senior Member" />
          <MemberImage image={JenniferL} name="Jennifer Li" title="Senior Member" />
          <MemberImage image={RichardD} name="Richard Ding" title="Controls" />
          <MemberImage image={LucaS} name="Luca Scavone" title="Team Co-Lead/Flight Dynamics Lead" />
          <MemberImage image={AnthonyC} name="Anthony Chen" title="Software/Infrastructure" />
          <MemberImage image={ElizabethX} name="Xiaotong Elizabeth Xiong" title="Electrical Co-Lead/Controls" />
          <MemberImage image={LucasS} name="Lucas Shumaker" title="Senior Member" />
          <MemberImage image={ConnorS} name="Connor Stubbs" title="Payload Co-Lead/Propulsion" />
          <MemberImage image={SeanG} name="Sean Gauthier " title="Airframe Lead" />
          <MemberImage image={ManavT} name="Manav Toor" title="Electrical" />
          <MemberImage image={YuRanW} name="Yu Ran Wang" title="Propulsion Co-Lead" />
          <MemberImage image={PatrickG} name="Patrick Gu" title="Controls/Software/Flight Dynamics" />
          <MemberImage image={AlexA} name="Alex Aumais" title="Media Lead" />
          <MemberImage image={PranavM} name="Pranav Mahabal" title="Electrical" />
          <MemberImage image={ArmaanS} name="Armaan Sengupta" title="Senior Member" />
          <MemberImage image={RajetA} name="Rajat Agrawal" title="Integration Lead/Airframe" />
          <MemberImage image={AnaD} name="Ana Dimitrievska" title="Propulsion" />
          <MemberImage image={JiuchengZ} name="Jiucheng Zang" title="Software Co-Lead" />
          <MemberImage image={JasonH} name="Jason Huang" title="Controls" />
          <MemberImage image={TristanY} name="Tristan Yan-Klassen" title="Controls/Flight Dynamics" />
          <MemberImage image={FinnB} name="Finn Breuer" title="Controls" />
          <MemberImage image={ChrisY} name="Chris Yang" title="Software" />
          <MemberImage image={DivjotB} name="Divjot Bhogal" title="Propulsion" />
        </Container>

        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col>
            <Content title="ALUMNI">
              <p>
                Our success would not have been possible without the efforts of countless alumni.
                Their dedication, leadership, and mentorship have paved the way for the current
                team, and while it would be impossible to list everyone who has played a part in
                our history, we would like to acknowledge those who we can.
              </p>
            </Content>
          </Col>
        </Row>

        <Container className={styles.containerFluid} fluid>
          <MemberImage status="alum" image={BonitaS} name="Bonita Shao" title="AFM '27" />
          <MemberImage status="alum" image={OzayrR} name="Ozayr Raazi" title="Computer Eng '27" />
          <MemberImage status="alum" image={MichaelZ} name="Michael Zhou" title="Starbase '27" />
          <MemberImage status="alum" image={RobertC} name="Robert Cai" title="Computer Science & Combinatorics and Optimization '25" />
          <MemberImage status="alum" image={KavinS} name="Kavin Satheeskumar" title="Computer Eng '25" />
          <MemberImage status="alum" image={CaseyT} name="Casey Tsujita" title="Psychology Arts '25" />
          <MemberImage status="alum" image={RidaS} name="Rida Sayed" title="Nanotechnology Eng '25" />
          <MemberImage status="alum" image={ArtemS} name="Artem Sotnikov" title="Mechatronics Eng '24" />
          <MemberImage status="alum" image={JerryL} name="Jerry Lu" title="Mechatronics Eng '24" />
          <MemberImage status="alum" image={ChrisS} name="Chris Sankey" title="Mechanical Eng '24" />
          <MemberImage status="alum" image={ChamathW} name="Chamath Wijesekera" title="Mechatronics Eng '24" />
          <MemberImage status="alum" image={LanaT} name="Lana Tomlin" title="Mechatronics Eng '24" />
          <MemberImage status="alum" image={RomanK} name="Roman Kobets" title="Mechanical Eng '24" />
          <MemberImage status="alum" image={AaronL} name="Aaron Leszkowiat" title="Mechanical Eng '24" />
          <MemberImage status="alum" image={KaveeshanT} name="Kaveeshan Thurairajah" title="Mechanical Eng '23" />
          <MemberImage status="alum" image={ZhenboB} name="Zhen Bo Bian" title="Mechanical Eng '23" />
          <MemberImage status="alum" image={DawsonK} name="Dawson Kletke" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={TeresaT} name="Teresa Tang" title="Nanotechnology Eng '23" />
          <MemberImage status="alum" image={MattiG} name="Matti Gencher" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={KyleT} name="Kyle Tam" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={DelaneyD} name="Delaney Dyment" title="Physics '23" />
          <MemberImage status="alum" image={TomC} name="Tom Cojocar" title="Mechanical Eng '23" />
          <MemberImage status="alum" image={ZacharyT} name="Zachary Teper" title="Electrical Eng '22" />
          <MemberImage status="alum" image={HamzaA} name="Hamza Abuabah" title="Mechanical Eng '22" />
          <MemberImage status="alum" image={EdwardY} name="Edward Yang" title="Mechatronics Eng '22" />
          <MemberImage status="alum" image={ShirleyK} name="Shirley Kong" title="Mechanical Eng '22" />
          <MemberImage status="alum" image={HusseinS} name="Hussein Saafan" title="Chemical Eng '21" />
          <MemberImage status="alum" image={AdamP} name="Adam Paul" title="Computer Eng '21" />
          <MemberImage status="alum" image={JacobD} name="Jacob Deery" title="Mechatronics Eng '21" />
          <MemberImage status="alum" image={AaronM} name="Aaron Morrison" title="Electrical Eng '21" />
          <MemberImage status="alum" image={AlexM} name="Alex Mihaila" title="Mechatronics Eng '20" />
          <MemberImage status="alum" image={StefanM} name="Stefan Martin" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={VithusanR} name="Vithusan Rajkumar" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={DorisJ} name="Doris Jiang" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={NickC} name="Nick Christopher" title="MASc '20; Mech '18" />
          <MemberImage status="alum" image={JustinR} name="Justin Robinson" title="Mechanical Eng '19" />
          <MemberImage status="alum" image={MirandaD} name="Miranda Daly" title="Mechanical Eng '19" />
          <MemberImage status="alum" image={HilbertL} name="Hilbert Li" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={RobinL} name="Robin Liu" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={NinaK} name="Nina Kornilovsky" title="Civil Eng '18" />
          <MemberImage status="alum" image={DavidN} name="David Ng" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={ChrisV} name="Chris Virtue" title="Mechatronics Eng '18" />
          <MemberImage status="alum" image={YashS} name="Yash Sewlani" title="Mechanical Eng '17" />
          <MemberImage status="alum" image={IvanB} name="Ivan Baranov" title="Computer Eng '17" />
          <MemberImage status="alum" image={YiqingW} name="Yiqing Wang" title="Mechanical Eng '16" />
        </Container>
      </Container>
    </>
  );
};

export default Team;
