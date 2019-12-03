import React, { Component } from 'react';
import contacts from './contacts.json'
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";


import './App.scss';

const listOfFive =  contacts.filter((value, index) =>
    index < 5 ? true : false)

class App extends Component {
  state = {
    listOfContacts: listOfFive
  }

  getRandomHandler = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      listOfContacts: [...this.state.listOfContacts, random]
    })    
  }

  sortByNameHandler = () => {    
    const sortedNames = this.state.listOfContacts.sort((a, b) => a.name < b.name ? -1 : 1);
    this.setState({
      listOfContacts: sortedNames
    })
  }

  sortByPopularityHandler = () => {
    const sortedPopular = this.state.listOfContacts.sort((a, b) => a.popularity > b.popularity ? -1 : 1);
    this.setState({
      listOfContacts: sortedPopular
    })
  }

  deleteContactHandler = (index) => {
    const newContactList = this.state.listOfContacts;
    newContactList.splice(index, 1);
    this.setState({
      listOfContacts: newContactList
    })   
  }

  render() {
    const table = this.state.listOfContacts.map((item, index) => 
      <Table
        key={index} 
        { ...item }
        delete={() => this.deleteContactHandler(index)}
      />
    )

    return (
      <div className="App">
        <Navbar />
        <button type="button" onClick={this.getRandomHandler}>Add random contact</button>
        <button type="button" onClick={this.sortByNameHandler}>Sort by name</button>
        <button type="button" onClick={this.sortByPopularityHandler}>Sort by popularity</button>

        <table>
          <thead>
            <tr className="table-header">
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
        </thead>
        {table}
        </table>

      </div>
    );
  }
}

export default App;
