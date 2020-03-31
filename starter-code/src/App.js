import React, { Component } from 'react'
import './App.css'
import Actors from "./components/actors"
import Header from "./components/header"

class App extends Component {
  state = {

 }
  render() {
    return (
      <div className="App">
        <Header />
        <Actors />

      </div>
    )
  }
}

export default App;
