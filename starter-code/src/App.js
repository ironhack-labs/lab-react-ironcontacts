import React, { Component } from 'react';
import Contacts from './contacts.json';
import ContactTable from './components/ContactTable';
import './App.css';

class App extends Component {
  state = {
    fiveContacts: Contacts.slice(0,5),
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClickRandomProfile = () => {
    this.setState({
      fiveContacts: [
        ...this.state.fiveContacts,
        Contacts[this.getRandomIntInclusive(0, Contacts.length -1)]
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="buttons-box">
          <button className="buttons" onClick={ this.handleClickRandomProfile }>Add random profile</button>
          <button className="buttons" onClick>Sort by name</button>
          <button className="buttons" onClick>Sort by popularity</button>
        </div>
        
        <table className="table-box">
          <tr className="header-table">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
            {this.state.fiveContacts.map(profile => (
              <ContactTable image={ profile.pictureUrl } name={ profile.name } popularity={ profile.popularity } />
            ))}
        </table>
      </div>
    );
  }
}

export default App;
