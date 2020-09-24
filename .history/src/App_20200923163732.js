import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './ContactsList';

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    const randomNum = Math.floor(Math.random() * (contacts.length - 1));
    const randomCon = contacts[randomNum];
    this.setState({
      contacts: [...this.state.contacts, randomCon],
    });
  };

  sortNameContact = () => {
    const sortName = this.state.contacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    this.setState({
      contacts: sortName,
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <div>
            <h1>Iron Contacts</h1>
            <div>
              <button className="btn" onClick={this.addRandomContact}>
                Add
              </button>
            </div>
            <ContactsList contacts={this.state.contacts} />
          </div>
        </div>
      </div>
    );
  }
}
