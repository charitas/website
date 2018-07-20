import React, { Fragment } from 'react';
import './styles.css';
import About from './About';
import Home from './Home';
import GetStarted from './GetStarted';
import TopMenu from './TopMenu';

export default function App() {
  return (
    <Fragment>
      <TopMenu />
      <Home />
      <GetStarted />
      <About />
    </Fragment>
  );
}
