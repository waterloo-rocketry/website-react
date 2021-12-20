import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
import './index.css';
import './css_reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './components/routes/Home';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route
        path="/"
        element={<Page title="Home"><Home /></Page>}
      />
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById('root'),
);
