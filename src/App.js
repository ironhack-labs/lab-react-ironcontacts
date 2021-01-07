import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    // console.log("add random contact")
    const copyContact = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomContact);
    copyContact.push(randomContact);
    this.setState({ contacts: copyContact });
  };
  sortByName = () => {
    // console.log('sort by name');
    const copyContact = [...this.state.contacts];
    copyContact.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: copyContact,
    });
  };

  sortByPopularity = () => {
    // console.log('sort by popularity');
    const copyContact = [...this.state.contacts];
    copyContact.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contacts: copyContact });
  };

  removeContact = (contact) => {
    // console.log('supprime data');
    this.setState({
      contacts: this.state.contacts.filter((actor) => actor.id !== contact.id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td> {contact.name} </td>
                  <td> {contact.popularity.toFixed(2)} </td>
                  <td>
                    <button onClick={() => this.removeContact(contact)}>
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
