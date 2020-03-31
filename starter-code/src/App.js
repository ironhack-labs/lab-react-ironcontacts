import React, { Component } from 'react';
import './App.css';
import DynamicTable from './components/dynamicTable/DynamicTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicTable/>
      </div>
    );
  }
}

export default App;
