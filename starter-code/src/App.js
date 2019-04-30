import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstContacts: contacts.splice(0, 5)
    }
  }

  addRandomContact() {
    let viewContacts = [...this.state.firstContacts];
    let theContacts = contacts.length;
    var contactRandom = Math.floor(Math.random() * theContacts);
    viewContacts.push(contacts[contactRandom])

    this.setState({
      firstContacts: viewContacts
    })
  }

  sortContactName() {
    let viewContacts = [...this.state.firstContacts];

    viewContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })

    this.setState({
      firstContacts: viewContacts
    })
  }

  sortContactPopularity() {
    let viewContacts = [...this.state.firstContacts];

    viewContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })

    this.setState({
      firstContacts: viewContacts
    })
  }

  deleteContact(name) {
    this.setState({
      firstContacts: this.state.firstContacts.filter(contact => contact.name !== name)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortContactName()}>Sort by Name</button>
          <button onClick={() => this.sortContactPopularity()}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pictures</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.firstContacts.map((contact, index) => {
                return (
                  <Contact
                    key={index}
                    picture={contact.pictureUrl}
                    name={contact.name}
                    popularity={contact.popularity}
                    deleteContact={() => this.deleteContact(contact.name)}
                  />
                );
              })
              }
        </tbody>
        </table>
      </React.Fragment>
        )}
    }
    
    export default App;
