import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Table from './components/table';

class App extends Component {
  constructor(){
    super()

    this.state = {
      contacts:contacts.slice(0,5)
    }

  }
  addRandomContact = () =>{
    let newArray = [...this.state.contacts]
    var random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    newArray.push(contacts[random]);
    this.setState({contacts: newArray})

  }


  render() {
    return (
      <div className="App">
        <Table {...this.state.contacts} addRandomContact={this.addRandomContact}/>
      </div>
    );
  }
}

export default App;
