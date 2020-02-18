import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  state = {
    newContacts: contacts.splice(0, 5),
  }

  randomNumber(max) {
    return Math.round(Math.random() * max)
  }
  

  addContact = () => {
    const copyNewC = [...this.state.newContacts];
    let randomContact = contacts[this.randomNumber(contacts.length)];
    if (copyNewC.indexOf(randomContact === -1)) {
      copyNewC.push(randomContact)
    } else this.addContact()
    this.setState({newContacts: copyNewC})
  }

  sortName = () => {
    const copyNewC = [...this.state.newContacts];
    copyNewC.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({newContacts: copyNewC})
  };

  sortPopularity = () => {
    const copyNewC = [...this.state.newContacts];
    copyNewC.sort((a, b) => a.popularity - b.popularity);
    this.setState({newContacts: copyNewC})
  };

  deleteContact = (i) => {
    const copyNewC = [...this.state.newContacts];
    copyNewC.splice(i,1)
    this.setState({newContacts: copyNewC})
  }


  render() {
    return (
      <div className="App">
        <h1>+ IronContacts +</h1>

        <button className="ux" onClick={this.addContact}>Add Random Contact</button>
        <button className="ux" onClick={this.sortName}>Sort by name</button>
        <button className="ux" onClick={this.sortPopularity}>Sort by popularity</button>

        <table className="contactList">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            {this.state.newContacts.map((contact, i) => (
              <tr className="contact" key={contact.id}>
                <td><img className="pp" src={contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button className="delete" onClick={() => this.deleteContact(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          

        </table>

      </div>
    );
  }
}

export default App;
