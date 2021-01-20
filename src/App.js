import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/contact/Contact';
import { AddRandomContactBtn, SortByPopularityBtn, SortByNameBtn } from './components/buttons/Buttons';

class Table extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContactHandler = () => {
    const contactsUnShown = contacts.filter( contact => !(this.state.contacts).includes(contact));
    const newContact = contactsUnShown[Math.floor(Math.random() * contactsUnShown.length)];

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  }

  sortByNameHandler = () => {
    const sortedContacts = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sortedContacts
    });
  };

  sortByPopularityHandler = () => {
    this.setState({
      contacts: this.state.contacts.sort( (a, b) => b.popularity - a.popularity)
    });
  };

  deleteContactHandler = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    });
  };

  render = () => {
    return (
      <>
        <div className="utilButtons">
          <AddRandomContactBtn clickToAdd={() => this.addRandomContactHandler()} />
          <SortByNameBtn sortByName={() => this.sortByNameHandler()} />
          <SortByPopularityBtn sortByPopularity={() => this.sortByPopularityHandler()} />
        </div>
        <table>
          <thead>
            <tr>
              <td>
                <h3>Picture</h3>
              </td>
              <td>
                <h3>Name</h3>
              </td>
              <td>
                <h3>Popularity</h3>
              </td>
              <td>
                <h3>Action</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return (
                <Contact key={contact.id} deleteContact={() => this.deleteContactHandler(contact.id)} {...contact} />
            )})}
          </tbody>
        </table>
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <Table />
      </div>
    );
  }
}

export default App;