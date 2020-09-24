import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactList from './ContactList';

export default class App extends React.Component {
  state = {
    celebrities: contacts.slice(0, 5),
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Iron Contacts</h1>
          <CelebritiesList celebrities={this.state.celebrities} />
        </div>
      </div>
    );
  }
}
