import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    //var item = items[Math.floor(Math.random() * items.length)];
    let random = contacts[Math.floor(Math.random() * contacts.length)];
    console.log('random', random);

    if (!contacts.includes(random)) {
      contacts.push(random);
    }

    this.setState((state, props) => ({
      contacts: state.contacts.concat(random),
    }));
  };

  sortByName = () => {
    let sortedByName = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    console.log('sorted by name', sortedByName);

    this.setState((state, props) => ({
      contacts: sortedByName,
    }));
  };

  sortByPopularity = () => {
    let sortedByPopularity = this.state.contacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState((state, props) => ({
      contacts: sortedByPopularity,
    }));
  };

  //   removePeople(e) {
  //     this.setState({people: this.state.people.filter(function(person) {
  //         return person !== e.target.value
  //     })});
  // }
  deleteContact = (id) => {
    const removeContact = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });

    console.log('delete');

    this.setState((state, props) => ({
      contacts: removeContact,
    }));
  };

  render() {
    console.log('contacs from render', this.state.contacts);
    return (
      <>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popularity
        </button>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      width="80px"
                      alt={contact.name}
                    ></img>
                  </td>
                  <td>
                    <p>{contact.name}</p>
                  </td>
                  <td>
                    <p>{contact.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    {' '}
                    <button onClick={() => this.deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
