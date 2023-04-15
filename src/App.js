import React, { Component } from 'react';
//import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Contact />
      <Footer>
      </Footer>
      </div>
      
    );
  }
}

export default App;
