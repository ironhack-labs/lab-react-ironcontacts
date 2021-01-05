import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  randomContact = () => {
    // console.log(contacts);
    const copy = [...this.state.contacts];
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(random);
    copy.push(random);
    this.setState({ contacts: copy });
  };

  sortContact = () => {
    const copy = [...this.state.contacts];
    copy.sort((contact1, contact2) => {
      if (contact1.name < contact2.name) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({
      contacts: copy,
    });
  };

  removeContacts = (contact) => {
    // console.log('clicked');
    this.setState({
      contacts: this.state.contacts.filter((c) => c.id !== contact),
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortContact}>Sort by name</button>

        <h2>Iron contacts</h2>
        {this.state.contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <button onClick={() => this.removeContacts(contact.id)}>
                Remove Contacts
              </button>
              <div>
                <p>Name :{contact.name}</p>

                <p>Picture :</p>
                <img src={contact.pictureUrl} />

                <p>Popularity</p>
                <p>{contact.popularity}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
