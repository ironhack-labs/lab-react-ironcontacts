import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './ContactsList';

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 4),
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

  sortPopularityContact = () => {
    const sortPop = this.state.contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortPop,
    });
  };

  deleteContact = (event) => {
    const id = event.currenTatrget.attributes[0].value;
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
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
                Add Random
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleAddClick}
              >
                Add Random Contact
              </button>
              <button className="btn" onClick={this.sortNameContact}>
                Sort by Name
              </button>

              <button className="btn" onClick={this.sortPopularityContact}>
                Sort by Popularity
              </button>
            </div>
            <ContactsList contacts={this.state.contacts} />
          </div>
        </div>
      </div>
    );
  }
}
