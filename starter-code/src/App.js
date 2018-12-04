import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Celebrities from "./components/celebrities.js"

export default class App extends Component {
  render(){
    return(
      <Celebrities />)
  }
}
