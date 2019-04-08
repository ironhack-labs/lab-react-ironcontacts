import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer'
import 'bulma/css/bulma.css'

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
