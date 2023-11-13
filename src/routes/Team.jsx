import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import MemberImage from '../components/MemberImage/MemberImage';

// Cover
import teamCoverImage from '../img/teams/team-win-min.jpg';

// Members
import AaronL from '../img/teams/aaronL.jpg';
import ABMH from '../img/teams/abmH.jpg';
import AdamL from '../img/teams/adamL.jpg';
import AndreA from '../img/teams/andreA.jpg';
import AnthonyC from '../img/teams/anthonyC.jpg';
import ArtemS from '../img/teams/artemS.jpg';
import CaseyT from '../img/teams/caseyT.jpg';
import ChamathW from '../img/teams/chamathW.jpg';
import CharlieB from '../img/teams/charlieB.jpg';
import ChrisS from '../img/teams/chrisS.jpg';
import DavisL from '../img/teams/davisL.jpg';
import DomenicH from '../img/teams/domenicH.jpg';
import EvanC from '../img/teams/evanC.jpg';
import ElizabethX from '../img/teams/elizabethX.jpg';
import FrancisY from '../img/teams/francisY.jpg';
import JackC from '../img/teams/jackC.jpg';
import JasonX from '../img/teams/jasonX.jpg';
import JerryL from '../img/teams/jerryL.jpg';
import JiyaM from '../img/teams/jiyaM.jpg';
import JoeD from '../img/teams/joeD.jpg';
import JoelG from '../img/teams/joelG.jpg';
import KasiaA from '../img/teams/kasiaA.jpg';
import KavinS from '../img/teams/kavinS.jpg';
import KeeganT from '../img/teams/keeganT.jpg';
import KimiL from '../img/teams/kimiL.jpg';
import LanaT from '../img/teams/lanaT.jpg';
import MabelA from '../img/teams/mabelA.jpg';
import MakisL from '../img/teams/makisL.jpg';
import MatthewG from '../img/teams/matthewG.jpg';
import MichaelZ from '../img/teams/michaelZ.jpg';
import NahvidZ from '../img/teams/nahvidZ.jpg';
import OwenH from '../img/teams/owenH.jpg';
import OzayrR from '../img/teams/ozayrR.jpg';
import RichardD from '../img/teams/richardD.jpg';
import RidaS from '../img/teams/ridaS.jpg';
import RioL from '../img/teams/rioL.jpg';
import RobertC from '../img/teams/robertC.jpg';
import RomanK from '../img/teams/romanK.jpg';
import RyanL from '../img/teams/ryanL.jpg';
import StefanA from '../img/teams/stefanA.jpg';
import TessaP from '../img/teams/tessaP.jpg';
import ThomasF from '../img/teams/thomasf.jpg';
import ThomasM from '../img/teams/thomasm.jpg';
import XavierR from '../img/teams/xavierR.jpg';
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
      <CoverPhoto image={teamCoverImage} style={{ position: 'center bottom' }} />
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
          <MemberImage image={RomanK} name="Roman Kobets" title="Team Co-Lead" />
          <MemberImage image={JackC} name="Jack Christensen" title="Team Co-Lead" />
          <MemberImage image={TessaP} name="Tessa Pugh" title="Team Co-Lead" />
          <MemberImage image={MatthewG} name="Matthew Gordon" title="Safety Captain/Operations Lead" />
          <MemberImage image={RidaS} name="Rida Sayed" title="Safety Captain" />
          <MemberImage image={AaronL} name="Aaron Leszkowiat" title="Senior Member" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" title="Senior Member" />
          <MemberImage image={ABMH} name="ABM Hussein" title="Senior Member" />
          <MemberImage image={LanaT} name="Lana Tomlin" title="Payload/Electrical" />
          <MemberImage image={FrancisY} name="Francis Yao" title="Airframe Lead/Launch Tower" />
          <MemberImage image={ChamathW} name="Chamath Wijesekera" title="Software/Electrical" />
          <MemberImage image={ChrisS} name="Chris Sankey" title="Recovery" />
          <MemberImage image={KavinS} name="Kavin Satheeskumar" title="Software/Electrical/Controls" />
          <MemberImage image={MichaelZ} name="Michael Zhou" title="Propulsion Fluid Systems" />
          <MemberImage image={RobertC} name="Robert Cai" title="Software/Flight Dynamics/Controls" />
          <MemberImage image={RioL} name="Rio Liu" title="Electrical" />
          <MemberImage image={JerryL} name="Jerry Lu" title="Propulsion" />
          <MemberImage image={ArtemS} name="Artem Sotnikov" title="Recovery" />
          <MemberImage image={JoelG} name="Joel Godard" title="Airframe" />
          <MemberImage image={KimiL} name="Kimi Liang" title="Airframe" />
          <MemberImage image={NahvidZ} name="Nahvid Zolfaghari" title="Infrastructure Lead/Airframe" />
          <MemberImage image={JoeD} name="Joe Dolina" title="Controls Lead" />
          <MemberImage image={XavierR} name="Xavier Rayes" title="Propulsion/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" title="Recovery Lead" />
          <MemberImage image={AndreA} name="Andre Arroyo-Cottier" title="Propulsion/Payload" />
          <MemberImage image={AdamL} name="Adam Lastovka" title="Propulsion" />
          <MemberImage image={CharlieB} name="Charlie Bell" title="Propulsion" />
          <MemberImage image={DomenicH} name="Domenic Hampson" title="Electrical Co-Lead" />
          <MemberImage image={OwenH} name="Owen Henry" title="Payload" />
          <MemberImage image={ThomasF} name="Thomas Fairhead" title="Propulsion Lead" />
          <MemberImage image={OzayrR} name="Ozayr Raazi" title="Software Lead" />
          <MemberImage image={KeeganT} name="Keegan Tripp" title="Media Lead" />
          <MemberImage image={EvanC} name="Evan Cheung" title="Software" />
          <MemberImage image={CaseyT} name="Casey Tsujita" title="Finance Lead" />
          <MemberImage image={ThomasM} name="Thomas Martinez" title="Infrastructure/Electrical" />
          <MemberImage image={MabelA} name="Mabel Aung" title="Propulsion/Infrastructure" />
          <MemberImage image={RyanL} name="Ryan Lau" title="Flight Dynamics" />
          <MemberImage image={DavisL} name="Davis Liu" title="Electrical" />
          <MemberImage image={JasonX} name="Jason Xu" title="Electrical Co-Lead" />
          <MemberImage image={KasiaA} name="Kasia-Alexei Delpeche" title="Airframe" />
          <MemberImage image={MakisL} name="Makis Lam" title="Airframe" />
          <MemberImage image={JiyaM} name="Jiya Makwana" title="Propulsion" />
          <MemberImage image={RichardD} name="Richard Ding" title="Controls" />
          <MemberImage image={AnthonyC} name="Anthony Chen" title="Software" />
          <MemberImage image={ElizabethX} name="Xiaotong Elizabeth Xiong" title="Controls/Software" />
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
