import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: this.fillContacts(),
    }
  }

  render() {
    this.fillContacts();
    return (
      <div className="App">
        <button onClick={() => this.addRandom()}>Add random contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th><p>Picture</p></th>
              <th><p>Name</p></th>
              <th><p>Popularity</p></th>
            </tr>
          </thead>
          <tbody>
            {this.fillTable()}
          </tbody>
        </table>
      </div>
    );
  }

  fillContacts() {
    const initialContacts = [];
    for (let i = 0; i < 5; i++) {
      initialContacts.push(contacts[i]);
    }
    return initialContacts;
  }

  fillTable() {
    return this.state.contacts.map((element, index) => {
      return (
        <tr key={index}>
          <td><img src={element.pictureUrl} /></td>
          <td><p>{element.name}</p></td>
          <td><p>{element.popularity}</p></td>
          <td><button onClick={() => this.delete(element.name)}>Delete</button></td>
        </tr>
      );
    });
  }

  addRandom() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    
    const newContacts = [ ...this.state.contacts ];
    newContacts.push(randomContact);

    this.setState({
      contacts: newContacts
    });
  }

  sortByName() {
    const newContacts = [ ...this.state.contacts ];
    
    newContacts.sort((e1,e2) => {
      if (e1.name < e2.name) {
        return -1;
      }
      if (e1.name > e2.name) {
        return 1;
      }
      return 0;
    })

    this.setState({
      contacts: newContacts
    });
  }

  sortByPopularity() {
    const newContacts = [ ...this.state.contacts ];
    
    newContacts.sort((e1,e2) => {
      if (e1.popularity > e2.popularity) {
        return -1;
      }
      if (e1.popularity < e2.popularity) {
        return 1;
      }
      return 0;
    })

    this.setState({
      contacts: newContacts
    });
  }

  delete(name) {
    const newContacts = this.state.contacts.filter(e => e.name !== name);

    this.setState({
      contacts: newContacts
    });
  }
}


export default App;
