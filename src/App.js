import logo from './logo.svg';
import './App.css';
import React from 'react';
import contacts from './contacts.json'

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  }
  
  onRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    let contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomContact);

    this.setState({
      contacts: contactsCopy
    });
  };

  onSortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
  })
}

  onSortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity-a.popularity)
  })
  }

  onDelete = (contactId) => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== contactId) })
  }

  render() {
  const contact = this.props;
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
        <div className='buttons'>
          <button onClick={this.onRandomContact}>Add Random Contact</button>
          <button onClick={this.onSortByName}>Sort By Name</button>
          <button onClick={this.onSortByPopularity}>Sort By Popularity</button>
        </div>
          <table>
            <thead className='title'>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(contact => (
                <tr className='contactsData'>
                  <th>
                    <img src={contact.pictureUrl} alt={contact.name} />
                  </th>
                  <th>{contact.name}</th>
                  <th>{contact.popularity.toFixed(2)}</th>
                  <th>
                    <button onClick={() => this.onDelete(contact.id)}>Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
  }
}

