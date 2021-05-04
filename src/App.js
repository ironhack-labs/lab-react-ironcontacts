import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import React, { Component } from 'react';


class Contacts extends Component {

  state = {
    fiveContacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)]

    this.setState({ fiveContacts: [random, ...this.state.fiveContacts] })
  }

  sortAlpha = () => {
    let sorted = this.state.fiveContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } if (a.name > b.name) {
        return 1
      } else
        return 0
    })
    this.setState({ fiveContacts: sorted })
  }

  sortPopularity = () => {
    let sorted = this.state.fiveContacts.sort((a, b) => {
      return b.popularity - a.popularity
    });
    this.setState({ fiveContacts: sorted })
  }

  removeActor = (actor) => {
    const deleteContact = [...this.state.fiveContacts]

    deleteContact.splice(actor, 1);

    this.setState({ fiveContacts: deleteContact })
  }

  render() {
    return (
      <div className='App'>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact}>Add Contact</button>
          <button onClick={this.sortAlpha}>Alphabetical Order</button>
          <button onClick={this.sortPopularity}>Popularity</button>
          <thead className='App-header'>
            <tr className='each-square'>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          {this.state.fiveContacts.map((contacts, index) => (
            <tbody key={contacts.id} className='App-body'>
              <tr className='each-square'>
                <td>
                  <img src={contacts.pictureUrl} alt="Image" style={{ width: '80px' }} />
                </td>
                <td>
                  {contacts.name}
                </td>
                <td>
                  {contacts.popularity.toFixed(2)}
                </td>
                <td>
                  <button onClick={this.removeActor}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;