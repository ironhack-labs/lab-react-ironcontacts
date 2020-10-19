import React from 'react';
import contacts from './contacts.json';
import ContactsList from './components/ContactsList';

class App extends React.Component {
  state = {
    contact: contacts.slice(0, 4),
  };

  addContact = () => {
    const randomContact = contacts[(contacts.length * Math.random()) | 0];

    const contactCopy = this.state.contact.slice();
    contactCopy.push(randomContact);
    this.setState({
      contact: contactCopy,
    });
  };

  sortByName = () => {
    const contactCopy = this.state.contact.slice();
    contactCopy.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );

    this.setState({
      contact: contactCopy,
    });
  };

  sortByPopularity = () => {
    const contactCopy = this.state.contact.slice();

    contactCopy.sort((a, b) =>
      a.popularity < b.popularity ? 1 : a.popularity > b.popularity ? -1 : 0
    );

    this.setState({
      contact: contactCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <ContactsList contact={this.state.contact} />
      </div>
    );
  }
}

export default App;
