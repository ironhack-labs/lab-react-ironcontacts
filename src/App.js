import React from 'react';
import contacts from './contacts.json';
import './App.css';

// const fiveContacts = [...contacts].slice(0, 5);
// console.log(fiveContacts);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends React.Component {
  state = {
    contactsToDisplay: [...contacts].slice(0, 5),
  };

  addRandomContact = () => {
    // fix this so that it only adds contact not already in (filter?)
    let randomIndex = getRandomInt(contacts.length);
    let newRandomContact = contacts[randomIndex];
    if (
      this.state.contactsToDisplay.find(
        (contact) => contact === newRandomContact
      )
    ) {
      randomIndex = getRandomInt(contacts.length);
      newRandomContact = contacts[randomIndex];
    } else {
      this.setState({
        contactsToDisplay: [...this.state.contactsToDisplay, newRandomContact],
      });
    }
  };

  sortByName = () => {
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  sortByPopularity = () => {
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay].sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    });
  };

  deleteContact = (contact) => {
    this.setState({
      contactsToDisplay: this.state.contactsToDisplay.filter(
        (c) => c.id !== contact.id
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add random contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>

        <table className="contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsToDisplay.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(contact)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
