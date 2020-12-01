import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };
  handleRandom = () => {
    const randomIndex = Math.floor(contacts.length * Math.random());
    const randomContact = contacts[randomIndex];
    this.setState({ contacts: [...this.state.contacts, randomContact] });
    return;
  };

  handleSortByPop = () => {
    const sortedPop = this.state.contacts.sort((x, y) => {
      return x.popularity - y.popularity;
    });
    this.setState({ contacts: sortedPop });
  };

  handleSortByName = () => {
    const sortedName = this.state.contacts.sort((x, y) => {
      return x.name - y.name;
    });

    this.setState([...sortedName]);

    return;
  };

  handleDeleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter((contactObj) => {
      if (contactObj.id !== id) {
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
        <button onClick={this.handleRandom}>Add Random Contact</button>
        <button onClick={this.handleSortByPop}>Sort By Popularity</button>
        <button onClick={this.handleSortByName}>Sort By Name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.map((contactObj) => {
            return (
              <tr>
                <td>
                  <img src={contactObj.pictureUrl} alt="photo" />
                </td>
                <td>{contactObj.name}</td>
                <td>{contactObj.popularity}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteContact(contactObj.id)}
                  >
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
