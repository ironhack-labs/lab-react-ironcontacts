import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Celebrities from './components/Celebrities';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Celebrities/>
      </div>
    );
  }
}

export default App;
