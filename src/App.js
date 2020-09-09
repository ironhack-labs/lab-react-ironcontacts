import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './Contact';
import './App.css';

class App extends Component {
  state = { ironContacts: contacts.slice(0, 5) };

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      ironContacts: [...this.state.ironContacts, randomContact],
    });
  };

  sortByName = () => {
    this.setState({
      ironContacts: this.state.ironContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    });
  };

  sortByPopularity = () => {
    this.setState({
      ironContacts: this.state.ironContacts.sort(
        (a, b) => b.popularity - a.popularity
      ),
    });
  };

  deleteContact = (i) => {
    this.setState({
      ironContacts: [
        ...this.state.ironContacts.slice(0, i),
        ...this.state.ironContacts.slice(i + 1),
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tbody>
            {this.state.ironContacts.map((contact, i) => (
              <Contact
                key={i}
                {...contact}
                deleteContact={() => this.deleteContact(i)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
