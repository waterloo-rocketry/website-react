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
// eslint-disable-next-line import/no-named-as-default
import Sponsors from './routes/Sponsors';

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
      </Routes>
      <Routes>
        <Route
          exact
          path="/competition"
          element={<Page title="Competition"><Competition /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/join"
          element={<Page title="Join Us"><Join /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/rockets"
          element={<Page title="Rockets"><Rockets /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/sponsors"
          element={<Page title="Sponsors"><Sponsors /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/awards"
          element={<Page title="Awards"><Awards /></Page>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
