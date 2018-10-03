import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharactersContainer from './components/CharactersContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <CharactersContainer/>
      </div>
    );
  }
}

export default App;
