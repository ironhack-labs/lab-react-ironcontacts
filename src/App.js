import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {
  state = {
    contactList: contacts.slice(0, 5),
  };
  randomContact = () => {
    this.setState({
      contactList: this.state.contactList.concat(
        contacts[Math.floor(Math.random() * contacts.length)]
      ),
    });
  };



  sortByName = () => {
    console.log('this is sort by nameII');
    this.setState({
      contactList: this.state.contactList.sort((a, b) => a.name.localeCompare(b.name))
    })
  };


  sortByPopularity = () => {
    console.log('this is sort by pop');
    this.setState({
      contactList: this.state.contactList.sort(function(a, b){return b.popularity-a.popularity})
    })
  };


  render() {
    console.log(this.state.contactList);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="threebuttons">
          <button onClick={this.randomContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} height="120" alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
