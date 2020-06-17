import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './Contacts';

export default class App extends Component {
  state = {
    celebrities: contacts,
    newCelebrities: contacts.slice(0, 5),
  };

  addContact = () => {
    let storedCelebrities = this.state.celebrities[
      Math.floor(Math.random() * this.state.celebrities.length)
    ];

    this.setState({
      //you have to update newCelebrities because they are the 5 that are displayed. not 'celebrities' that contains all of them
      //method 'concat' will sum up both arrays together (new+stored)
      newCelebrities: this.state.newCelebrities.concat([storedCelebrities]),
    });
  };

  sortByName = () => {
    // you update the state of waht is showing on the browser. the newceleb variable contains the sorting
    this.setState({
      newCelebrities: this.state.newCelebrities.sort((a, b) => {
        return a.name > b.name ? -1 : 1;
      }),
    });
  };

  sortByPopularity = () => {
    this.setState({
      newCelebrities: this.state.newCelebrities.sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    });
  };

  deleteCelebrity = (name) => {
    let deleteCelebrity = [...this.state.newCelebrities];
    let index = deleteCelebrity.findIndex((celebrity) => {
      return celebrity.name === name;
    });

    deleteCelebrity.splice(index, 1);

    this.setState({
      newCelebrities: deleteCelebrity,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add random celebrity contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        {this.state.newCelebrities.map((celebrity, index) => {
          return (
            <Contacts
              key={index}
              pictureUrl={celebrity.pictureUrl}
              name={celebrity.name}
              popularity={celebrity.popularity}
              delete={this.deleteCelebrity}
            />
          );
        })}
      </div>
    );
  }
}
