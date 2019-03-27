import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import CardContainer from './components/CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardContainer />
      </div>
    );
  }
}

export default App;
