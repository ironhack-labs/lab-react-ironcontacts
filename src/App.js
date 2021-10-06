import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';



class App extends Component {

  state = {
    numberOfContacts: 5,
    contacts: contacts.slice(0, 5),
    count: 0
  };

  getContacts = () => 
    this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          <td>
            <img style={{height: '100px'}} src={contact.pictureUrl} alt='icon' />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>
            <button onClick={() => this.handleDeletion(i)}>
              Delete
            </button>
          </td>
        </tr>
      );
    })

  handleAddContact = () => {
    const newContact = contacts[Math.round(Math.random() * contacts.length)];
    this.setState({
      numberOfContacts: this.state.numberOfContacts + 1,
      contacts: [newContact, ...this.state.contacts],
    });
    return newContact;
  };

  handleSortByName = () => {
    const sortedByName = [...this.state.contacts].sort((a, b) => a.name < b.name ? -1 : 1);
    this.setState({
      contacts: sortedByName,
    })
  }

  handleSortByPopularity = () => {
    const sortedByPopularity = [...this.state.contacts].sort((a, b) => a.popularity > b.popularity ? -1 : 1);
    this.setState({
      contacts: sortedByPopularity,
    })
  }

  handleDeletion = (i) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(i, 1)
    this.setState({
      numberOfContacts: this.state.numberOfContacts - 1,
      contacts: contactsCopy,
    })
  }


  render() {
    return (
      <div className="App">

        <h2>IronContacts</h2>
        
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.getContacts()}</tbody>
        </table>
        <button onClick={this.handleAddContact}>
          Add Random Contact
        </button>
        <button onClick={this.handleSortByName}>
          Sort By Name
        </button>
        <button onClick={this.handleSortByPopularity}>
          Sort By Popularity
        </button>
      </div>
    );
  }
}

export default App;
