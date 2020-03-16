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

  sortByName = () => {
    const contactsSortedByName = [...this.state.contacts];
    contactsSortedByName.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contacts: contactsSortedByName
    });
  }

  sortByPopularity = () => {
    const contactsSortedByPopularity = [...this.state.contacts];
    contactsSortedByPopularity.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1);
    this.setState({
      contacts: contactsSortedByPopularity
    });
  }

  deleteContact = contactToBeDeleted => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactToBeDeleted.id)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomActor()}>Add a random contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
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
                {this.state.contacts.map((oneActor) => {
                  const {name, popularity, pictureUrl, id} = oneActor;
                  return (
                    <tr key={id}>
                      <td><img src={pictureUrl} alt="actors" /></td>
                      <td><p>{name}</p></td>
                      <td><p>{popularity.toFixed(2)}</p></td>
                      <td><button onClick={() => this.deleteContact(oneActor)}>Delete</button></td>
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
