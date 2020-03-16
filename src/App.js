import React, { Component } from 'react';
import Contacts from "./contacts.json"
import './App.css';

class App extends Component {
  state = {
    contacts: [...Contacts.slice(0, 5)]
  }
  
  addRandomActor = () => {
    const contactsCopy = [...this.state.contacts];
    while(true) {
      if (contactsCopy.includes(Contacts[Math.floor(Math.random() * Contacts.length)])) {
        continue;
      } else {
        contactsCopy.push(Contacts[Math.floor(Math.random() * Contacts.length)]);
        break;
      }
    }
    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomActor()}>Add a random contact</button>
        <div className="list-titles">
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((oneActor, index) => {
                  return (
                <tr key={index}>
                  <td><img src={oneActor.pictureUrl} alt="actors" /></td>
                  <td><p>{oneActor.name}</p></td>
                  <td><p>{oneActor.popularity}</p></td>
                </tr>
                )})}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default App;
