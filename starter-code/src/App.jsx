import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Table from './Components/ContactTable/ContactTable';
import Button from './Components/Button/Button';


class App extends Component {
  constructor(){
    super();
    this.state = {
      contactList: contacts.slice(0,5),
    }
    this.randomContact = this.randomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPop = this.sortByPop.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  randomContact() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const list = [...this.state.contactList];
    if (!list.includes(random)) {
      list.push(random)
      this.setState({
        contactList: list
      });
    } else {
      this.randomContact();
    };
  }

  sortByName() {
    const nameSortedList = [...this.state.contactList];
    nameSortedList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contactList: nameSortedList
    })
  }

  sortByPop() {
    const popSortedList = [...this.state.contactList];
    popSortedList.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contactList: popSortedList
    })
  }

  deleteRow(idx) {
    const deletedList = [...this.state.contactList];
    deletedList.splice(idx,1)
    this.setState({
      contactList: deletedList
    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button onClick= {this.randomContact} name="Add random contact"/>
        <Button onClick= {this.sortByName} name="Sort by Name"/>
        <Button onClick= {this.sortByPop} name="Sort by Popularity"/>
        <Table onClick={this.deleteRow} contactList={this.state.contactList}></Table>        
      </div>
    );
  }
}


export default App;
