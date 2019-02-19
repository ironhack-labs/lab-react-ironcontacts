import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Table from './components/table';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      displayArr: contacts.slice(0, 5)
    }
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteThisOne = this.deleteThisOne.bind(this);
  }

  addRandomContact() {
    let r = Math.floor(Math.random() * contacts.length);
    let newArray = this.state.displayArr;
    newArray[newArray.length] = contacts[r];
    this.setState({displayArr: newArray});
  }

  sortByName() {
    let sortedArray = this.state.displayArr.sort(function (a,b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    this.setState({displayArr: sortedArray});
  }

  sortByPopularity() {
    let sortedArray = this.state.displayArr.sort(function (a,b) {
      return b.popularity - a.popularity;
    });
    this.setState({displayArr: sortedArray});
  }

  deleteThisOne(index) {
    let deletedArray = this.state.displayArr;
    deletedArray.splice(index, 1);
    this.setState({displayArr: deletedArray});
  }

  render() {
    return (
      <div className="App">
        <Table contacts={this.state.displayArr} deleteThisOne ={this.deleteThisOne}/>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      </div>
    );
  }
}

export default App;
