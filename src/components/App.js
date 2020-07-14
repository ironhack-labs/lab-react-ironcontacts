import React, { Component } from 'react';
import './App.css';
import contacts from '../contacts.json';

class App extends Component {
  constructor() {
    super();
    this.firstContacts = contacts.splice(0, 5);
    this.state = {
      actors: this.firstContacts,
    };
  }

  addContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactCopy = [...this.state.actors];
    contactCopy.push(randomContact);
    this.setState({ actors: contactCopy });
  };

  sortName = () => {
    const contactCopy = [...this.state.actors];
    const sortList = contactCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({ actors: sortList });
  };

  sortPopularity = () => {
    const contactCopy = [...this.state.actors];
    const popularityList = contactCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ actors: popularityList });
  };

  deleteContact = (id) => {
    const contactCopy = [...this.state.actors];
    // contactCopy.splice(id, 1);
    let contactDelete = contactCopy.filter((elm) => elm.id !== id);
    this.setState({ actors: contactDelete });
  };

  render() {
    console.log(this.state.actors);
    return (
      <main className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.actors.map((elm) => (
              <tr key={elm.id}>
                <td>
                  <img
                    style={{ width: '30px' }}
                    src={elm.pictureUrl}
                    alt="Celeb-Pic"
                  />
                </td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(elm.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={this.addContact}>Add random contact</button>
        </div>
        <div>
          <button onClick={this.sortName}>Sort by name</button>
        </div>
        <div>
          <button onClick={this.sortPopularity}>Sort by popularity</button>
        </div>
      </main>
    );
  }
}
export default App;
