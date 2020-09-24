import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './ContactsList';

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomCelebrity = () => {
    const randomNum = Math.floor(Math.random() * (contacts.length - 1));
    const randomCon = contacts[randomNum];
    this.setState({
      celebrities: [...this.state.contacts, randomCon],
    });
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.addRandomContact}>Add</button>
        </div>

        <div className="App">
          <div>
            <h1>Iron Contacts</h1>
            <ContactsList contacts={this.state.contacts} />
          </div>
        </div>
      <
    );
  }
}
