import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };
  addRandom = () => {
    const randomProducer = 
    contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state) => {
      return { contacts: [...state.contacts, randomProducer] };
    });
  };
  sortByName = () => {
    this.setState((state) => {
      const newContacts = [...state.contacts].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      return { contacts: newContacts };
    });
  };

  sortByPopularity = () => {
    this.setState((state) => {
      const newContacts = [...state.contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      });
      return { contacts: newContacts };
    });
  };

  deleteContact = (id) => {
    const filteredArr = this.state.contacts.filter((item) => item.id !== id);
    this.setState({ contacts: filteredArr });
  };

  render() {
    return (
      <div>
      <h2>Ironlab Celebrities</h2>
      <button onClick={this.addRandom}>Add Random</button>
      <button onClick={this.sortByName}>Sort by Name</button>
      <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((producer) => {
            return (
              <tr key={producer.id}>
                <td>
                <img alt="" src={producer.pictureUrl} />
                </td>
                <td>{producer.name}</td>
                <td>{producer.popularity.toFixed(1)}</td>
                <td><button
                      onClick={() => {this.deleteContact(producer.id);}}>Delete</button></td>
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