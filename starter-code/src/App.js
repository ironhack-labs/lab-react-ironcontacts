import React, { Component } from 'react';
import './App.css';
import contacts from './contacts'

class App extends Component {
  state = {
    allContacts: contacts,
    firstContacts: [ contacts[0], contacts[1], contacts[2], contacts[3], contacts[4] ]
  }
  render() {
    return (
      <div className="App">
        {this.state.firstContacts.map(e => {
          return (
            <div key={e.name}>
              <p>
                <img height="80" src={e.pictureUrl}/>
                <h4>{e.name}</h4>
                <span>{e.popularity}</span>
              </p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
