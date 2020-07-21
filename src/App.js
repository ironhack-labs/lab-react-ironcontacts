import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    if (
      this.state.contactsList.some(
        (contact) => contact.name === randomContact.name
      )
    )
      this.addRandomContact();
    /* id the contact already exists => the function restarts */ else
      this.setState({
        contactsList: [...this.state.contactsList, randomContact],
      });
  };

  sortByName = () => {
    this.setState(
      {
        contactsList: [...this.state.contactsList].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }
      // console.log('sort by name !')
    );
  };

  sortByPopularity = () => {
    this.setState(
      {
        contactsList: [...this.state.contactsList].sort((a, b) => {
          return a.popularity - b.popularity;
        }),
      }
      // console.log('sort by popularity !')
    );
  };

  deleteContact = (index) => {
    this.setState(
      {
        contactsList: this.state.contactsList.filter(
          (contact, i) => i !== index
        ),
      }
      // console.log('contact deleted !')
    );
  };

  deletePairs = () => {
    this.setState({
      contactsList: [...this.state.contactsList].filter((contact) => contact),
    });
  };

  render() {
    console.log(contacts);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* ITERATION 2 */}
        <button onClick={this.addRandomContact} className="btn">
          Add random contact
        </button>
        {/* ITERATION 3 - SORT BY NAME BTN */}
        <button onClick={this.sortByName} className="btn">
          Sort by name
        </button>
        {/* ITERATION 3 - SORT BY POPULARITY BTN */}
        <button onClick={this.sortByPopularity} className="btn">
          Sort by popularity
        </button>
        {/* ITERATION 1 */}
        <table className="table1">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contactsList.map((celeb, i) => (
              <tr key={i}>
                <td>
                  <img
                    src={celeb.pictureUrl}
                    className="picture"
                    alt="celebrity img"
                  />
                </td>
                <td>{celeb.name}</td>
                <td>{celeb.popularity.toFixed(2)}</td>
                <td>
                  {' '}
                  {/* ITERATION 4 - DELETE BTN */}
                  <button
                    onClick={(event) => {
                      this.deleteContact(i);
                    }}
                    className="btn delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
