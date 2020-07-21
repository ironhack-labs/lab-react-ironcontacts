import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // console.log(' RANDOM CONTACT = ', randomContact);
    this.setState({
      contactsList: [...this.state.contactsList, randomContact],
    });
  };

  sortByName = () => {
    
    this.setState(
      {
        contactsList: [...this.state.contactsList].sort((a, b) => a.name.localeCompare(b.name)),
      },
      // console.log('sort by name !')
    );
  };

  sortByPopularity = () => {
    this.setState(
      {
        contactsList: [...this.state.contactsList].sort((a, b) => {
          return a.popularity - b.popularity;
        }),
      },
      // console.log('sort by popularity !')
    );
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* ITERATION 2 */}
        <button onClick={this.addRandomContact} className="btn random-contact">
          Add random contact
        </button>
        {/* ITERATION 3 - SORT BY NAME BTN */}
        <button onClick={this.sortByName} className="btn sort-name">
          Sort by name
        </button>
        {/* ITERATION 3 - SORT BY POPULARITY BTN */}
        <button onClick={this.sortByPopularity} className="btn random-contact">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
