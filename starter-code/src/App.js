import React from 'react';
import logo from './logo.svg';
import Famous from "./Components/Famous/Famous.jsx";
import Button from "./Components/Button/Button.jsx";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">IronContacts</h1>
        <Famous></Famous>
      </div>
    );
  }
}
