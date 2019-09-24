import React, { Component } from 'react';
import Header from './components/Header'
import Celebs from './components/Celeb.js'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        
        <Header/>
        <Celebs />
      </div>
    );
  }
}


export default App;
