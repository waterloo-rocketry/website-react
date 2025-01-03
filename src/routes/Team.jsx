import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import MemberImage from '../components/MemberImage/MemberImage';

// Cover
import teamCoverImage from '../img/teams/team-win-min.jpg';

// Members
import AaronL from '../img/teams/aaronL.jpg';
import AlexA from '../img/teams/alexA.jpg';
import AnaD from '../img/teams/anaD.jpg';
import AndreA from '../img/teams/andreA.jpg';
import AnthonyC from '../img/teams/anthonyC.jpg';
import ArmaanS from '../img/teams/armaanS.jpg';
import ArtemS from '../img/teams/artemS.jpg';
import AshL from '../img/teams/ashL.jpg';
import BenP from '../img/teams/benP.jpg';
import BonitaS from '../img/teams/bonitaS.jpg';
import CaseyT from '../img/teams/caseyT.jpg';
import ChamathW from '../img/teams/chamathW.jpg';
import ChrisS from '../img/teams/chrisS.jpg';
import ConnorS from '../img/teams/connorS.jpg';
import DavisL from '../img/teams/davisL.jpg';
import DomenicH from '../img/teams/domenicH.jpg';
import ElizabethX from '../img/teams/elizabethX.jpg';
import FrancisY from '../img/teams/francisY.jpg';
import JackC from '../img/teams/jackC.jpg';
import JasonX from '../img/teams/jasonX.jpg';
import JenniferL from '../img/teams/jenniferL.jpg';
import JeremyS from '../img/teams/jeremyS.jpg';
import JerryL from '../img/teams/jerryL.jpg';
import JiuchengZ from '../img/teams/jiuchengZ.jpg';
import JiyaM from '../img/teams/jiyaM.jpg';
import JoeD from '../img/teams/joeD.jpg';
import JoelG from '../img/teams/joelG.jpg';
import KasiaA from '../img/teams/kasiaA.jpg';
import KavinS from '../img/teams/kavinS.jpg';
import KeeganT from '../img/teams/keeganT.jpg';
import LanaT from '../img/teams/lanaT.jpg';
import LucaS from '../img/teams/lucaS.jpg';
import LucasS from '../img/teams/lucasS.jpg';
import LydiaG from '../img/teams/lydiaG.jpg';
import MabelA from '../img/teams/mabelA.jpg';
import ManavT from '../img/teams/ManavT.jpg';
import MatthewG from '../img/teams/matthewG.jpg';
import MichaelZ from '../img/teams/michaelZ.jpg';
import NahvidZ from '../img/teams/nahvidZ.jpg';
import OwenH from '../img/teams/owenH.jpg';
import OwenS from '../img/teams/owenS.jpg';
import OzayrR from '../img/teams/ozayrR.jpg';
import PatrickG from '../img/teams/patrickG.jpg';
import PranavM from '../img/teams/pranavM.jpg';
import RajetA from '../img/teams/rajatA.jpg';
import RheaS from '../img/teams/rheaS.jpg';
import RichardD from '../img/teams/richardD.jpg';
import RidaS from '../img/teams/ridaS.jpg';
import RioL from '../img/teams/rioL.jpg';
import RobertC from '../img/teams/robertC.jpg';
import RomanK from '../img/teams/romanK.jpg';
import RyanL from '../img/teams/ryanL.jpg';
import SeanG from '../img/teams/seanG.jpg';
import StefanA from '../img/teams/stefanA.jpg';
import TessaP from '../img/teams/tessaP.jpg';
import ThomasF from '../img/teams/thomasf.jpg';
import ThomasM from '../img/teams/thomasm.jpg';
import XavierR from '../img/teams/xavierR.jpg';
import YuRanW from '../img/teams/yuranW.jpg';
import ZachariahM from '../img/teams/zachM.jpg';

// Alumni
import AaronM from '../img/teams/aaronM.jpg';
import AdamP from '../img/teams/adamP.jpg';
import AlexM from '../img/teams/alexM.jpg';
import ChrisV from '../img/teams/chrisV.jpg';
import DavidN from '../img/teams/davidN.jpg';
import DawsonK from '../img/teams/dawsonK.jpg';
import DelaneyD from '../img/teams/delaneyD.jpg';
import DorisJ from '../img/teams/dorisJ.jpg';
import EdwardY from '../img/teams/edwardY.jpg';
import HamzaA from '../img/teams/hamzaA.jpg';
import HilbertL from '../img/teams/hilbertL.jpg';
import HusseinS from '../img/teams/husseinS.jpg';
import IvanB from '../img/teams/ivanB.jpg';
import JacobD from '../img/teams/jacobD.jpg';
import JustinR from '../img/teams/justinR.jpg';
import KaveeshanT from '../img/teams/kaveeshanT.jpg';
import KyleT from '../img/teams/kyleT.jpg';
import MattiG from '../img/teams/mattiG.jpg';
import MirandaD from '../img/teams/mirandaD.jpg';
import NickC from '../img/teams/nickC.jpg';
import NinaK from '../img/teams/ninaK.jpg';
import RobinL from '../img/teams/robinL.jpg';
import ShirleyK from '../img/teams/shirleyK.jpg';
import StefanM from '../img/teams/stefanM.jpg';
import TeresaT from '../img/teams/teresaT.jpg';
import TomC from '../img/teams/tomC.jpg';
import VithusanR from '../img/teams/vithusanR.jpg';
import YashS from '../img/teams/yashS.jpg';
import YiqingW from '../img/teams/yiqingW.jpg';
import ZacharyT from '../img/teams/zacharyT.jpg';
import ZhenboB from '../img/teams/zhenboB.jpg';

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
          <MemberImage image={TessaP} name="Tessa Pugh" title="Team Co-Lead" />
          <MemberImage image={JeremyS} name="Jeremy Schnellhardt" title="Team Co-Lead" />
          <MemberImage image={MatthewG} name="Matthew Gordon" title="Operations Lead" />
          <MemberImage image={RheaS} name="Rhea Scollie" title="Safety Captain/Payload Co-Lead" />
          <MemberImage image={AshL} name="Ash Lang" title="Safety Captain/Electrical/Controls" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" title="Senior Member" />
          <MemberImage image={JackC} name="Jack Christensen" title="Senior Member" />
          <MemberImage image={FrancisY} name="Francis Yao" title="Senior Member (Airframe/Launch Tower)" />
          <MemberImage image={KavinS} name="Kavin Satheeskumar" title="Software/Electrical/Controls" />
          <MemberImage image={MichaelZ} name="Michael Zhou" title="Propulsion Fluid Systems" />
          <MemberImage image={RobertC} name="Robert Cai" title="Software/Flight Dynamics/Controls" />
          <MemberImage image={RioL} name="Rio Liu" title="Electrical" />
          <MemberImage image={JoelG} name="Joel Godard" title="Flight Dynamics Co-Lead/Airframe" />
          <MemberImage image={NahvidZ} name="Nahvid Zolfaghari" title="Senior Member" />
          <MemberImage image={JoeD} name="Joe Dolina" title="Senior Member" />
          <MemberImage image={XavierR} name="Xavier Rayes" title="Propulsion/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" title="Recovery Co-Lead" />
          <MemberImage image={AndreA} name="Andre Arroyo-Cottier" title="Recovery Co-Lead" />
          <MemberImage image={DomenicH} name="Domenic Hampson" title="Electrical" />
          <MemberImage image={OwenH} name="Owen Henry" title="Payload" />
          <MemberImage image={ThomasF} name="Thomas Fairhead" title="Propulsion" />
          <MemberImage image={OzayrR} name="Ozayr Raazi" title="Software" />
          <MemberImage image={KeeganT} name="Keegan Tripp" title="Media / Test Flight" />
          <MemberImage image={LydiaG} name="Lydia Griffith" title="Payload" />
          <MemberImage image={CaseyT} name="Casey Tsujita" title="Finance" />
          <MemberImage image={ThomasM} name="Thomas Martinez" title="Infrastructure/Electrical" />
          <MemberImage image={MabelA} name="Mabel Aung" title="Propulsion/Infrastructure" />
          <MemberImage image={RyanL} name="Ryan Lau" title="Flight Dynamics" />
          <MemberImage image={DavisL} name="Davis Liu" title="Electrical" />
          <MemberImage image={JasonX} name="Jason Xu" title="Electrical Lead" />
          <MemberImage image={KasiaA} name="Kasia-Alexei Delpeche" title="Airframe" />
          <MemberImage image={JiyaM} name="Jiya Makwana" title="Infrastructure Lead" />
          <MemberImage image={JenniferL} name="Jennifer Li" title="Airframe Co-Lead" />
          <MemberImage image={RichardD} name="Richard Ding" title="Controls Lead" />
          <MemberImage image={LucaS} name="Luca Scavone" title="Flight Dynamics Co-Lead/Airframe" />
          <MemberImage image={AnthonyC} name="Anthony Chen" title="Software/Infrastructure" />
          <MemberImage image={ElizabethX} name="Xiaotong Elizabeth Xiong" title="Controls/Electrical/Flight Dynamics" />
          <MemberImage image={LucasS} name="Lucas Shumaker" title="Recovery" />
          <MemberImage image={ConnorS} name="Connor Stubbs" title="Payload Co-Lead/Propulsion" />
          <MemberImage image={SeanG} name="Sean Gauthier " title="Airframe Co-Lead" />
          <MemberImage image={ManavT} name="Manav Toor" title="Electrical" />
          <MemberImage image={YuRanW} name="Yu Ran Wang" title="Propulsion Lead" />
          <MemberImage image={PatrickG} name="Patrick Gu" title="Controls/Software/Flight Dynamics" />
          <MemberImage image={AlexA} name="Alex Aumais" title="Media Lead" />
          <MemberImage image={PranavM} name="Pranav Mahabal" title="Electrical" />
          <MemberImage image={BenP} name="Ben Pickens" title="Controls" />
          <MemberImage image={ArmaanS} name="Armaan Sengupta" title="Controls" />
          <MemberImage image={BonitaS} name="Bonita Shao" title="Finance Co-Lead" />
          <MemberImage image={RajetA} name="Rajat Agrawal" title="Airframe/Painting" />
          <MemberImage image={AnaD} name="Ana Dimitrievska" title="Propulsion" />
          <MemberImage image={OwenS} name="Owen Stephenson" title="Propulsion" />
          <MemberImage image={JiuchengZ} name="Jiucheng Zang" title="Software Co-Lead" />
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
