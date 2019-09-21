import React, { Component } from 'react';
import './App.css';
import CelebList from './components/celeblist'

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <CelebList />

      </div>
    );
  }
}

export default App;
