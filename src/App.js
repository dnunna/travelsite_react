import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import FlagDisplay from './components/flagdisplay/FlagDisplay';
import Tabular from './components/tabular/Tabular';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="TravelSite">
        <Navigation/>
        <Hero/>
        <FlagDisplay/>
        <Tabular/>
        <Footer/>
      </div>
  );
  }
}

export default App;
