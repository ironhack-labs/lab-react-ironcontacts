import React from 'react';
import './App.css';
import Contact from './Contact';
import contacts from './contacts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contactsInfo: contacts.slice(0, 5)
    }
  }

  addNewContact() {
    let allTheContacts = [...this.state.contactsInfo];
    let contactsLength = contacts.length;
    let randomContact = Math.floor(Math.random() * contactsLength);
    allTheContacts.push(contacts[randomContact]);

    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    })
  }

  sortByName() {
    let allTheContacts = [...this.state.contactsInfo];
    allTheContacts.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
    })

    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    })
  }

  sortByPopularity() {
    let allTheContacts = [...this.state.contactsInfo];
    allTheContacts.sort((a, b) => {
      if (a.popularity > b.popularity) return 1
      if (a.popularity < b.popularity) return -1
    })

    this.setState({
      ...this.state,
      contactsInfo: allTheContacts
    })
  }

  deleteContact(contactName) {
    this.setState({
      ...this.state,
      contactsInfo: this.state.contactsInfo.filter(contact => contact.name !== contactName)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={() => this.addNewContact()} className="btn">Add Random Contact</button>
          <button onClick={() => this.sortByName()} className="btn">Sort by name</button>
          <button onClick={() => this.sortByPopularity()} className="btn">Sort by popularity</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsInfo.map((contact, idx) => {
              return (
                <React.Fragment key={idx}>
                  <Contact
                    pictureUrl={contact.pictureUrl}
                    name={contact.name}
                    popularity={contact.popularity} 
                    deleteContact={() => this.deleteContact(contact.name)} />
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
