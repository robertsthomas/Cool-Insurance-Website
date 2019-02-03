import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav/Nav'
import Hero from '../Sections/Hero/Hero'
import HowItWorks from '../Sections/HowItWorks/HowItWorks'
import InsuranceTypes from '../Sections/InsuranceTypes/InsuranceTypes'

// Scroll stuff
import GetQuote from "./GetQuote/GetQuote";
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {

  constructor(props) {
    super(props);
    this.quote = React.createRef();

    this.state ={
      show: false
    }
  }


  componentDidMount() {
    let floatingQuote = ReactDOM.findDOMNode(this.quote.current)
    let styles = ['sticky-top']

    window.addEventListener('scroll', (e) => {
      console.log(window.scrollY)
      if(e.pageY > 600){
        floatingQuote.classList.add(...styles)
        floatingQuote.classList.remove('invisible')
      }else{
        floatingQuote.classList.remove(...styles)
        floatingQuote.classList.add('invisible')
      }

      if(e.pageY > 2600){
        floatingQuote.classList.add('invisible')
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this)
  }


  render() {
    let {show} = this.state;
    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <div className='d-md-none bg-white border-bottom invisible' ref={this.quote}>
            <GetQuote />
        </div>
        <HowItWorks />
        <InsuranceTypes />
        <div className="border-top">
          <div className="container">
            <GetQuote />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
