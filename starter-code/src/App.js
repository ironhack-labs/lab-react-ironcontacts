import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'



class Table extends Component {

  render(){
    let rowsTable = this.props.contacts.map((contact, index) => {
      return (
        <tr key={index}>
          <td><img src={contact.pictureUrl} alt=""/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button onClick={()=>this.props.onDeleteContact(index)}>delete</button></td>
        </tr>
      )
    });

    return(
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {rowsTable}
          </tbody>
        </table>
      )
  }
}



class App extends Component {

  constructor(props){
    super(props);

    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName       = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.onDeleteContact  = this.onDeleteContact.bind(this);

    this.state = {
      contacts:  this.getInitialContacts()
    };
  }

  getInitialContacts(){
    return contacts.splice(0,5);
  }

  pickRandomContact(){

    if(this.state.contacts.length === contacts.length){
      alert("No more new contact to add !");
      return;
    }

    let randomContact = contacts[Math.floor(contacts.length * Math.random())];

    if( this.state.contacts.map(contact => contact.name).indexOf(randomContact.name) >= 0 ){
      // contact already on the list of contacts displayed
      // try again !
      return this.pickRandomContact()
    }

    return randomContact
  }

  addRandomContact(){
    //1. choose a random contact
    let randomContact = this.pickRandomContact();

    // 2. update the dom
    this.state.contacts.push(randomContact);
    this.setState({contacts: this.state.contacts})

  }

  sortByName(){
    let {contacts} = this.state;

    contacts.sort((contactA, contactB) => {
      const nameA = contactA.name.toUpperCase();
      const nameB = contactB.name.toUpperCase();
     if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    this.setState({contacts});
  }

  sortByPopularity(){

    // sort in descending order
    let {contacts} = this.state;
    contacts.sort((contactA, contactB) => contactB.popularity - contactA.popularity);
    this.setState({contacts});

  }

  /**
   * Delete a contact at a certain index
   * @param index
   */
  onDeleteContact(index){

    let {contacts} = this.state;

    contacts.splice(index, 1);

    this.setState({contacts});

  }

  render() {
    return (
      <div className="App">
        <h1>Ironhack contacts</h1>
        <button id={"btn-rand-contact"} onClick={this.addRandomContact}> Add Random Contact </button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <Table contacts={this.state.contacts} onDeleteContact={this.onDeleteContact}/>

      </div>
    );
  }
}

export default App;
