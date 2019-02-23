import React, { Component } from 'react';

import './App.css';

import Table from "./Component/Table";
import Header from "./Component/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <Header/>
          <Table/>

          </div>

      </div>
    );
  }
}

export default App;
