import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {contacts: Contacts.slice(0, 5)};
  }

  newRandomContacts = (_contacts) => {
    const newRandom= _contacts.sort(() =>0.5 - Math.random());
   
    this.setState({contacts: Contacts.slice(0,5)});
  };

  sortByName = (_names) => {
    const sortByNames=_names.sort((a, b) =>a.name.localeCompare(b.name));
    this.setState({ contacts: sortByNames });
  };

  sortByPopularity = (_popularity) => {
    const sortByPopularities=_popularity.sort((a, b) =>b.popularity - a.popularity);
    this.setState({ contacts: sortByPopularities });
  };

  deleteContact= (_name) => {
    const contactsCopy = this.state.contacts.filter((contact) => {
      return contact.name !== _name;
    });
    this.setState({ contacts: contactsCopy });
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.newRandomContacts(Contacts)}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName(Contacts)}>Sort by name</button>
        <button onClick={() => this.sortByPopularity(Contacts)}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return(
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name}></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => { this.deleteContact(contact.id) }}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
