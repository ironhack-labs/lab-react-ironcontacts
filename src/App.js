import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React from 'react';

class App extends React.Component {
  state = {
    initNumberOfActors: 5,
    contacts: contacts.slice(0, 5),
    count: 0,
  };

  getActors = () =>
    this.state.contacts.map((actor, i) => {
      const handelRemoveActor = () => {
        const copy = [...this.state.contacts];
        copy.splice(i, 1);
        this.setState({
          contacts: copy,
        });
      };

      return (
        <tr key={i}>
          <td>
            <img
              style={{ width: '100px' }}
              src={actor.pictureUrl}
              alt='movie-pic'
            />
          </td>
          <td>{actor.name}</td>
          <td>{actor.popularity}</td>
          <td>
            <button onClick={handelRemoveActor}>Delete</button>
          </td>
        </tr>
      );
    });

  handleAddMovie = () => {
    const randomIndex =
      this.state.initNumberOfActors +
      ~~(Math.random() * (contacts.length - this.state.initNumberOfActors));
    this.setState({
      contacts: [contacts[randomIndex], ...this.state.contacts],
    });
    return contacts.length > 5 && contacts[randomIndex];
  };

  handleSortByName = () => {
    const sortedActors = [...this.state.contacts].sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    this.setState({
      contacts: sortedActors,
    });
  };

  handleSortByPopularity = () => {
    const sortedActors = [...this.state.contacts].sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({
      contacts: sortedActors,
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='buttons-container'>
          <button onClick={this.handleAddMovie}>Add Random Contact</button>
          <button onClick={this.handleSortByName}>Sort by Name</button>
          <button onClick={this.handleSortByPopularity}>
            Sort by popularity
          </button>
        </div>

        <h2>IronContacts</h2>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.getActors()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
