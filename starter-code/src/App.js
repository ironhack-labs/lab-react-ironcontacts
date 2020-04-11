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
    console.log(a);
    return a;
  }

  getRandomContact = () => {
    let b = contacts[this.getRandomNum()];
    console.log(b);
    return b;
  }

  addRandomContact = () => {
    this.setState({
      Showcontacts: [...this.state.Showcontacts, this.getRandomContact()]
    })
    console.log(this.state.Showcontacts);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro mt-30 bg-grey">
          IronContactsX
        </h1>

        <button onClick={this.addRandomContact} className="mt-30"> Add Random Contact </button>

        <div className="ml-29 inLine mt-30">
          <div className="with20"> Picture </div>
          <div className="with20"> Name </div>
          <div className="with20"> Popularity </div>
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
