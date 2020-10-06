import React from 'react';
import logo from './logo.svg';
import './App.css';
import contactsAll from './contacts.json';
import Contacts from './components/Contact';

class App extends React.Component {
  state = {
    firstContact: contactsAll.slice(0, 5),
  };

  addRandomContact = () => {
    const selectRandomContact =
      contactsAll[Math.floor(Math.random() * contactsAll.length)];
    this.setState({
      firstContact: [...this.state.firstContact, selectRandomContact],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addRandomContact}>Add random Contact</button>
        {this.state.firstContact.map((contact) => {
          return (
            <Contacts
              name={contact.name}
              popularity={contact.popularity.toFixed(2)}
              picture={contact.pictureUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
