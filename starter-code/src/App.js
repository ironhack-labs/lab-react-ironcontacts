import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';

class App extends Component {

  state = {
    Showcontacts: contacts.splice(0,5)
  }

  getRandomNum = () => {
    let a = Math.floor(Math.random() * (contacts.length - 0 + 1)) + 0;
    return a;
  }

  getRandomContact = () => {
    let b = contacts[this.getRandomNum()];
    return b;
  }

  addRandomContact = () => {
    this.setState({
      Showcontacts: [...this.state.Showcontacts, this.getRandomContact()]
    })
  }

  sortByName = () => {
    this.setState({
      Showcontacts: this.sortArrayByName()
    })
  }

  hola = () => {
    console.log("hola");
  }

  sortArrayByName = () => {
    return this.state.Showcontacts.sort(function (a,b) {
      const bandA = a.name.toUpperCase();
      const bandB = b.name.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    })
  }

  sortArrayByNumber = () => {
    return  this.state.Showcontacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
  }

  sortByPop = () => {
    this.setState({
      Showcontacts: this.sortArrayByNumber()
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContactsX</h1>
          <button onClick={this.addRandomContact} className="mt-30 btn"> Add Random Contact </button>
          <button onClick={this.sortByName} className="mt-30 btn"> Sort by name </button>
          <button onClick={this.sortByPop} className="mt-30 btn"> Sort by popularity </button>
        </header>

        <div className="ml inLine mt-30">
          <div className="with20 bg-blue"> Picture </div>
          <div className="with20 bg-blue"> Name </div>
          <div className="with20 bg-blue"> Popularity </div>
          <div className="with20 bg-blue"> Action </div>
        </div>

        {this.state.Showcontacts.map((item,index) => {
           return <Table key={index}  name={item.name} img={item.pictureUrl} pop={item.popularity} />  
          })
        }
      </div>
    );
  }
}

export default App;
