import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandom = () => {
    const randomActor = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state) => {
      return { contacts: [...state.contacts, randomActor] };
    });
  };

  sortByName = () => {
    const copy = [...this.state.contacts];
    console.log(copy);
    copy.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: copy,
    });
  };

  sortByPopularity = () => {
    const copy = [...this.state.contacts];
    console.log(copy);
    copy.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: copy,
    });
  };
  removeContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter((p) => p.id !== contact.id),
    });
  };
  render() {
    return (
      <div className="App">
        <h1>IronContact</h1>
        <div className="container-flex">
          <button onClick={() => this.addRandom()}>Add Random contact</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>popularity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      style={{ height: '100px' }}
                      src={contact.pictureUrl}
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td onClick={() => this.removeContact(contact)}>Delete</td>
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
