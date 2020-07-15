import React, { Component } from 'react';
import Celebs from '../contacts.json';
import './Contacts.css';

class Contacts extends Component {
  state = {
    celebs: Celebs.slice(0, 5),
  };

  addRandomContact = () => {
    const newCeleb = Celebs[Math.floor(Math.random() * Celebs.length)];
    this.setState((state) => ({
      celebs: state.celebs.concat(newCeleb),
    }));
  };

  sortByName = () => {
    const sortedCelebs = this.state.celebs;
    sortedCelebs.sort((a, b) => a.name.localeCompare(b.name));
    this.setState(() => ({
      celebs: sortedCelebs,
    }));
  };

  sortByPopularity = () => {
    const sortedCelebs = this.state.celebs;
    sortedCelebs.sort((a, b) => b.popularity - a.popularity);
    this.setState(() => ({
      celebs: sortedCelebs,
    }));
  };

  removeCeleb = (id) => {
    const removedCeleb = this.state.celebs;
    removedCeleb.splice(id, 1);
    this.setState(() => ({
      celebs: removedCeleb,
    }));
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <h2>Picture</h2>
              </th>
              <th>
                <h2>Name</h2>
              </th>
              <th>
                <h2>Popularity</h2>
              </th>
            </tr>
            {this.state.celebs.map((celeb, index) => (
              <tr key={celeb.id}>
                <td>
                  <img src={celeb.pictureUrl} alt={celeb.name} />
                </td>
                <td>
                  <h2>{celeb.name}</h2>
                </td>
                <td>
                  <h2>{celeb.popularity.toFixed(2)}</h2>
                </td>
                <td>
                  <button onClick={() => this.removeCeleb(index)}>
                    Remove Celebrity
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
  }
}

export default Contacts;
