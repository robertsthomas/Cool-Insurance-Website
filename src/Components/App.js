import React, { Component } from 'react';

import Nav from './Nav/Nav'
import Hero from '../Sections/Hero/Hero'
import HowItWorks from '../Sections/HowItWorks/HowItWorks'
import InsuranceTypes from '../Sections/InsuranceTypes/InsuranceTypes'

// Scroll stuff
import GetQuote from "./GetQuote/GetQuote";
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <div className="container">
          <HowItWorks />
          <InsuranceTypes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
