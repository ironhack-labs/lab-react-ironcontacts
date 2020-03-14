import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Celebrities from './components/celebrities';


class App extends Component {
  
  
  render() {
    
    return (
      <>
      <Header></Header>
     
      <Celebrities></Celebrities>
      </>
    )
  }
}

export default App;
