import React, { Component } from 'react'
import './App.css';
import MovieTable from './components/MovieTable';




class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IRON CONTACTS</h1>
        </header>
        <MovieTable />
      </div>
    );
  }
}

export default App;
