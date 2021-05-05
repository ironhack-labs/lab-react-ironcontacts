import logo from './logo.svg';
import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    artists: contacts.slice(0, 5),
  };
  clickAdd = () => {
    const newItem = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state, props) => ({
      artists: [newItem, ...state.artists],
    }));
  };
  clickSortName = () => {
    this.setState((state, props) => ({
      artists: [...state.artists].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  };
  clickSortPopularity = () => {
    this.setState((state, props) => ({
      artists: [...state.artists].sort((a, b) => b.popularity - a.popularity),
    }));
  };
  clickRemove = (e) => {
    const selectedId = e.target.getAttribute('info');
    this.setState((state, props) => ({
      artists: state.artists.filter((artist) => artist.id !== selectedId),
    }));
  };
  render() {
    const artistsTable = this.state.artists.map((item) => (
      <tr key={'tr' + item.id}>
        <td>
          <img src={item.pictureUrl} alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
        <td>
          <button info={item.id} onClick={this.clickRemove}>
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.clickAdd}>Add Random Contact</button>
        <button onClick={this.clickSortName}>Sort by Name</button>
        <button onClick={this.clickSortPopularity}>sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>{artistsTable}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
