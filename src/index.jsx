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
          path="/competition"
          element={<Page title="Competition"><Competition /></Page>}
        />
        <Route
          exact
          path="/join"
          element={<Page title="Join Us"><Join /></Page>}
        />
        <Route
          exact
          path="/rockets"
          element={<Page title="Rockets"><Rockets /></Page>}
        />
        <Route
          exact
          path="/sponsors"
          element={<Page title="Sponsors"><Sponsors /></Page>}
        />
        <Route
          exact
          path="/subsystems"
          element={<Page title="Subsystems"><Subsystems /></Page>}
        />
        <Route
          exact
          path="/awards"
          element={<Page title="Awards"><Awards /></Page>}
        />
        <Route
          exact
          path="/outreach"
          element={<Page title="Outreach"><Outreach /></Page>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
