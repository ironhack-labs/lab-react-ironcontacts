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
    const newProducer = this.state.contacts.concat(randomProducer);
    this.setState({
      contacts: newProducer,
    });
  };

  sortByName = () => {
    this.setState((state) => {
      const newProducer = [...state.contacts].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return { contacts: newProducer };
    });
  };

  sortByPopularity = () => {
    this.setState((state) => {
      const newProducer = [...state.contacts].sort((a, b) => {
        if (a.popularity < b.popularity) return -1;
        return 0;
      });
      return { contacts: newProducer };
    });
  };

  deleteContact = (id) => {
    const arrayCopy = this.state.contacts.filter(
      (element) => element.id !== id
    );
    this.setState({ contacts: arrayCopy });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

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
            {this.state.contacts.map((producer) => {
              return (
                <tr key={producer.id}>
                  <td>
                    <img alt="" src={producer.pictureUrl} />
                  </td>
                  <td>{producer.name}</td>
                  <td>{producer.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteContact(producer.id);
                      }}
                    >
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
