import React, { Component } from 'react';
import Promo from './components/promo/promo';
import Reason from './components/reason/reason';
import Service from './components/service/service';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Promo/>
        <Reason/>
        <Service/>
        <Footer/>
      </div>
    );
  }
}

export default App;
