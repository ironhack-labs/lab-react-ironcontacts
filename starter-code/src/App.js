import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './Contact';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandom() {
    let newRandom = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      ...this.state, contacts: [...this.state.contacts, newRandom]
    });
  }

  sortContacts() {
    this.setState({
      ...this.state, contacts: this.state.contacts.sort((a, b) => {
        if (a.name < b.name) return -1;
        return 1;
      })
    })
  }

  sortPopularity() {
    this.setState({
      ...this.state, contacts: this.state.contacts.sort((a, b) => {
        if (a.popularity < b.popularity) return -1;
        return 1;
      })
    })
  }

  deleteContact = (idx) => {
    let removedContacts = [...this.state.contacts];
    removedContacts.splice(idx, 1);

    this.setState({
      ...this.state, contacts: removedContacts
    })
  }



  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addRandom()}>Add a random contact</button>
          <button onClick={() => this.sortContacts()}>Sort by name</button>
          <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        </div>
        <table className="contacts">
          <thead className="thead">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((contact, idx) => (
                <Contact key={idx} index={idx} delete={this.deleteContact}{...contact} />
              ))
            }

          </tbody>


        </table>

      </div>
    );
  }
}

export default App;
