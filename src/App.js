import React, { Component } from 'react';
import Promo from './components/promo/promo';
import Reason from './components/reason/reason';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Promo/>
        <Reason/>
      </div>
    );
  }
}

export default App;
