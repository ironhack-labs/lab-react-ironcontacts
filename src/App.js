import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

const contactsArr = [...contacts].slice(0, 5);

class App extends Component {
  state = {
    contacts: contactsArr,
  };

  add = () => {
    let newArr = [...this.state.contacts];
    newArr.push(
      contacts[Math.floor(Math.random() * Math.floor(contacts.length))]
    );
    this.setState({
      contacts: newArr,
    });
  };

  sortName = () => {
    let sortArr = [...this.state.contacts];
    sortArr.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
    this.setState({
      contacts: sortArr,
    });
  };

  sortPop = () => {
    let sortArr = [...this.state.contacts];
    sortArr.sort((a,b) => a.popularity - b.popularity);
    this.setState({
      contacts: sortArr,
    });
  };

  delete = (i) => {
    this.setState({
      contacts: this.state.contacts.filter((contact, index) => {
        return index !== i;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.add}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <table className="Contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr>
                <td>
                  <img className="pictureUrl" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td> <button onClick={(event) => this.delete(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
