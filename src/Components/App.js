import React, { Component } from 'react';

import Nav from './Nav/Nav'
import Hero from '../Sections/Hero/Hero'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>How It Works</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
