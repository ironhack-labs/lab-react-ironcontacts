import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <IronContact />
      </div>
    );
  }
}

class IronContact extends Component {
  constructor (props) {
    super(props);
    this.contacts = contacts.filter((contact, i) => i < 5);
    this.state = {ironContacts: this.contacts}
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addRandomContact() {
    this.contacts.push(contacts[Math.floor(Math.random()*contacts.length+1)])
    this.setState({
      IronContacts: this.contacts
    })
  }

  sortByPopularity () {
    this.contacts.sort((item1, item2) => {
      if (item1.popularity > item2.popularity) return -1;
      else if (item1.popularity < item2.popularity) return 1;
      else return 0;
    });

    this.setState({
      IronContacts: this.contacts
    })
  }

  sortByName(property) {
    this.contacts.sort((item1, item2) => {
      if (item1.name < item2.name) return -1;
      else if (item1.name > item2.name) return 1;
      else return 0;
    });

    this.setState({
      IronContacts: this.contacts
    })
  }

  handleDelete(i) {
    this.contacts.splice(i,1);

    this.setState({
      IronContacts: this.contacts
    })
  }
 
  render() {

    return(
      <div className="IronContact">
        <h1>IronContact</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ironContacts.map((item, i) => 
              <tr key={i}>
                <td><img src={item.pictureUrl} alt=""/></td>
                <td>{item.name}</td>
                <td>{item.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
              </tr>
            )}
            </tbody>
        </table>
      </div>
    )
  }
}



export default App;
