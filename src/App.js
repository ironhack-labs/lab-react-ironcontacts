import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: [
      {
        name: 'Idris Elba',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg',
        popularity: 11.622713,
        id: '11731993-0604-4bee-80d5-67ad845d0a38',
      },
      {
        name: 'Johnny Depp',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg',
        popularity: 15.656534,
        id: '7dad00f7-3949-477d-a7e2-1467fd2cfc06',
      },
      {
        name: 'Monica Bellucci',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg',
        popularity: 16.096436,
        id: '0ad5e441-3084-47a1-9e9b-b917539bba71',
      },
      {
        name: 'Gal Gadot',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg',
        popularity: 10.049256,
        id: 'b497e3c4-50bb-4ae2-912f-eb36802c5bc2',
      },
      {
        name: 'Ian McKellen',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg',
        popularity: 10.070132,
        id: '0067ae32-97b6-4431-898e-eb1c10150abb',
      },
    ],
  };

  addContact = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length);
    const updatedContacts = [...this.state.contacts, contacts[randomNumber]];

    this.setState({ contacts: updatedContacts });
  };

  sortByName = () => {
    const sortedContacts = this.state.contacts.sort((contact1, contact2) => {
      if (contact1.name < contact2.name) {
        return -1;
      }
    });
    this.setState({ contacts: sortedContacts });
  };

  sortByPopularity = () => {
    const sortedContacts = this.state.contacts.sort((contact1, contact2) => {
      return contact1.popularity - contact2.popularity;
    });
    this.setState({ contacts: sortedContacts });
  };

  removeContact = (contactId) => {
    const filteredContacts = this.state.contacts.filter((contactObj) => {
      if (contactObj.id !== contactId) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ contacts: filteredContacts });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id} className="contactInfo">
                  <td>
                    <img
                      src={contact.pictureUrl}
                      style={{ width: '50px', height: 'auto' }}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.removeContact(contact.id)}>
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
