import React, { Component } from 'react';
import './App.css';
import ContactSelection from './components/ContactSelection'
import AddRandomBtn from './components/AddRandomBtn';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>A list</h1>
        <AddRandomBtn />
        <ContactSelection />
      </div>
    )
  }
}
