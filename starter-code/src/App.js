import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {contacts: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
    ]};
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  addRandomContact(){
    const newContacts = [...this.state.contacts]
    newContacts.push(contacts[Math.floor(5 + Math.random() * (contacts.length - 5))])
    this.setState({
      contacts: newContacts,
    });
  }

  sortByName(){
    const newContacts = [...this.state.contacts]
    newContacts.sort((contactA, contactB) => {
      return contactA.name.localeCompare(contactB.name);
    });
    this.setState({
      contacts: newContacts,
    });
  }

  sortByPopularity(){
    const newContacts = [...this.state.contacts]
    newContacts.sort((contactA, contactB) => {
      return contactB.popularity - contactA.popularity;
    });
    this.setState({
      contacts: newContacts,
    });
  }

  deleteHandler(idx){
    const newContacts = [...this.state.contacts]
    newContacts.splice(idx, 1);
    this.setState({
      contacts: newContacts,
    });
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact} >Add Random Contact</button>
      <button onClick={this.sortByName} >Sort by name</button>
      <button onClick={this.sortByPopularity} >Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <Contact key={index} deleteHandler={() => this.deleteHandler(index)} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;