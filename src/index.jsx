import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Page from './components/Page';

// pages
import Home from './routes/Home';
import Competition from './routes/Competition';
import Join from './routes/Join';
import Awards from './routes/Awards';

import Rockets from './routes/Rockets';
import Sponsors from './routes/Sponsors';
import Subsystems from './routes/Subsystems';

import Outreach from './routes/Outreach';

import Footer from './components/Footer/Footer';

import KrakenOfTheSky from './routes/rocketPages/KrakenOfTheSky';
import SharkOfTheSky from './routes/rocketPages/SharkOfTheSky';
import UnexplodedOrdnance from './routes/rocketPages/UnexplodedOrdnance';
import Vidar3 from './routes/rocketPages/Vidar3';
import Vidar2 from './routes/rocketPages/Vidar2';
import Vidar from './routes/rocketPages/Vidar';
import SilverBrant from './routes/rocketPages/SilverBrant';
import Eridani from './routes/rocketPages/Eridani';
import WRT1 from './routes/rocketPages/WRT1';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/website-react">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={<Page title="Home"><Home /></Page>}
        />
        <Route
          exact
          path="competition"
          element={<Page title="Competition"><Competition /></Page>}
        />
        <Route
          exact
          path="join"
          element={<Page title="Join Us"><Join /></Page>}
        />
        <Route
          exact
          path="rockets"
          element={<Page title="Rockets"><Rockets /></Page>}
        />
        <Route
          exact
          path="rockets/kots"
          element={<Page title="Kraken Of The Sky"><KrakenOfTheSky /></Page>}
        />
        <Route
          exact
          path="rockets/sots"
          element={<Page title="Shark Of The Sky"><SharkOfTheSky /></Page>}
        />
        <Route
          exact
          path="rockets/uxo"
          element={<Page title="Unexploded Ordnance"><UnexplodedOrdnance /></Page>}
        />
        <Route
          exact
          path="rockets/vidar3"
          element={<Page title="Vidar III"><Vidar3 /></Page>}
        />
        <Route
          exact
          path="rockets/vidar2"
          element={<Page title="Vidar II"><Vidar2 /></Page>}
        />
        <Route
          exact
          path="rockets/vidar"
          element={<Page title="Vidar"><Vidar /></Page>}
        />
        <Route
          exact
          path="rockets/silverbrant"
          element={<Page title="Silver Brant"><SilverBrant /></Page>}
        />
        <Route
          exact
          path="rockets/eridani"
          element={<Page title="Eridani"><Eridani /></Page>}
        />
        <Route
          exact
          path="rockets/wrt1"
          element={<Page title="WRT1"><WRT1 /></Page>}
        />
        <Route
          exact
          path="sponsors"
          element={<Page title="Sponsors"><Sponsors /></Page>}
        />
        <Route
          exact
          path="subsystems"
          element={<Page title="Subsystems"><Subsystems /></Page>}
        />
        <Route
          exact
          path="awards"
          element={<Page title="Awards"><Awards /></Page>}
        />
        <Route
          exact
          path="outreach"
          element={<Page title="Outreach"><Outreach /></Page>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
