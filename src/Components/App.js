import React, { Component } from 'react';

import Nav from './Nav/Nav'
import Hero from '../Sections/Hero/Hero'
import GetQuote from "./GetQuote/GetQuote";

import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
      </React.Fragment>
    );
  }
}

export default App;
