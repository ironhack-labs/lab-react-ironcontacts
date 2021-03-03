import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: contacts.slice(0, 5)
    };
  }

  addRandom = () => {
    const copyContacts = [...this.state.people];
    const getRandomContact =
      contacts[Math.floor(Math.random() * contacts.length)];
    // Make sure random contact is not in array yet
    if (!copyContacts.includes(getRandomContact)) {
      // Push into the new array
      copyContacts.push(getRandomContact);
    }
    // update state
    this.setState({ people: copyContacts });
  };

  sortBy = (event) => {
    console.log(event);
    const name = event.target.name;
    let first = 1;
    let second = -1;
    if (name === 'popularity') {
      first = -1;
      second = 1;
    }
    //Sort the array alphabetically
    this.setState({
      people: this.state.people.sort((a, b) =>
        a[name] > b[name] ? first : second
      )
    });
  };

  delete = (event) => {
    //get the index in the array of that actor
    const name = event.target.name;
    const indexOfDelete = this.state.people.findIndex((x) => x.name === name);
    //look this up in the array
    const copyContacts = [...this.state.people];
    if (indexOfDelete > -1) {
      copyContacts.splice(indexOfDelete, 1);
    }
    this.setState({
      people: copyContacts
    });

    //pop it out of the array
  };

  render() {
    return (
      <div>
        <button onClick={this.addRandom}>Add Random contact</button>
        <button onClick={this.sortBy} name="name">
          Sort by name
        </button>
        <button onClick={this.sortBy} name="popularity">
          Sort by popularity
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.people.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <img src={person.pictureUrl} alt="" />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td>
                  <button onClick={this.delete} name={person.name}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
