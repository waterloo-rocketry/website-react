import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, HashRouter, Routes as Switch,
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './components/routes/Home';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          element={<Page title="Home"><Home /></Page>}
        />
      </Switch>
      <Footer />
    </HashRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
