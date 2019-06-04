import React, { Component } from 'react';
import logo from './logo.svg';
import contactJson from "./contacts.json"
import trueContacts from "./trueContacts.json"
import Table from "./components/stateful/Table"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      famousFull: contactJson, 
      famous:  contactJson.slice(0,5),
      a_z: false,
      asc: false,
    }
  }

  sorted = true   // ESTE A VECES DA PROBLEMAS, PONLO EN FALSE SI VES ALGO RARO

  addRandom = () => {
    const randPos = Math.floor(Math.random()*this.state.famousFull.length)
    const newFamous = [...this.state.famous]
    if(newFamous.includes(this.state.famousFull[randPos]) ) {this.addRandom() } else {
    newFamous.push(this.state.famousFull[randPos])
    console.log(newFamous)
    this.setState({famous: newFamous})
  }
  }

  sortName = () => {
    const newFamous = [...this.state.famous]
    
    if(this.state.a_z) {                  
      newFamous.sort((a,b) => {
        if(a.name>b.name) {return -1} else {return 1}
      })
    } else {
      newFamous.sort((a,b) => {
        if(a.name>b.name) {return 1} else {return -1}
      })   
    }
    
    this.sorted ? this.setState({famous: trueContacts}) : this.setState({famous: newFamous, a_z: !this.state.a_z})
  }

  sortPop = () => {
    const newFamous = [...this.state.famous]
    
    this.state.asc ? newFamous.sort((a,b) => a.popularity-b.popularity) : newFamous.sort((a,b) => b.popularity-a.popularity)
    this.setState({famous: newFamous, asc: !this.state.asc})
  }

  deleteFam = idx => {
    const newFamous = [...this.state.famous]
    newFamous.splice(idx, 1)
    this.setState({famous: newFamous})
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Table famous={this.state.famous} addRand={this.addRandom} sortName={this.sortName} sortPop={this.sortPop} delete={this.deleteFam}/>
      </div>
    );
  }
}

export default App;
