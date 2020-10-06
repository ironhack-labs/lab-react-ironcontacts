import React from 'react';

import './App.css';
import Contacts from './contacts.json';

const contacts = Contacts.splice(0, 5);
// console.log(contacts);

class App extends React.Component {
  state = {
    contacts: contacts,
  };

  addContact = () => {
    const copy = [...this.state.contacts];
    copy.push(Contacts[Math.floor(Math.random() * Contacts.length) + 1]);
    // console.log(copy);
    this.setState({
      contacts: copy,
    });
  };

  sortByName = () => {
    const copy = [...this.state.contacts];
    const sortedCopy = copy.sort((a, b) => {
      if (a['name'] > b['name']) {
        return 1;
      } else if (a['name'] < b['name']) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: sortedCopy,
    });
  };

  sortByPopularity = () => {
    const copy = [...this.state.contacts];
    const sortedCopy = copy.sort((a, b) => {
      if (a['popularity'] > b['popularity']) {
        return -1;
      } else if (a['popularity'] < b['popularity']) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: sortedCopy,
    });
  };

  deleteContact = (i) => {
    const copy = [...this.state.contacts];
    copy.splice(i, 1);

    this.setState({
      contacts: copy,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((person, i) => {
              return (
                <tr key={i}>
                  <td>
                    <img src={person['pictureUrl']} alt="" />
                  </td>
                  <td>{person['name']}</td>
                  <td>{person['popularity']}</td>
                  <td>
                    <button id="delete" onClick={(evt) => this.deleteContact(i)}>
                      DELETE
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
