import './App.css';

import contacts from './contacts.json';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    showFive: contacts.slice(0, 5),
    remainingActors: contacts.slice(6),

  };

  // function that fires to add contact button

  addContact = () => {
    const newCont = this.state.remainingActors;
    let randomContact = newCont[Math.floor(Math.random() * newCont.length)];

    this.setState({ showFive: [...this.state.showFive, randomContact] });
  };

// function that fires to sort by name button

sortName = () => {
const actors = this.state.showFive;

const sortedActors = actors.sort( (a, b) => a.name.localeCompare(b.name) )

this.setState({showFive: sortedActors })
}

// function that fires to sort by name button

sortpopulatity = () => {

  const popularActor = this.state.showFive;

  const sortPopular = popularActor.sort( (a,b) => b.popularity - a.popularity )

  this.setState({showFive: sortPopular})
}




  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> Name</th>
              <th> PictureUrl</th>
              <th> popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.showFive.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>
                    {' '}
                    <img style={{ width: '100px' }} src={contact.pictureUrl} />
                  </td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button onClick={this.addContact}> Add Random Contacts </button>

        <button onClick={this.sortName}> Sort by name </button>

        <button onClick={this.sortpopulatity}> Sort by Popularity </button>

      </div>
    );
  }
}

export default App;
