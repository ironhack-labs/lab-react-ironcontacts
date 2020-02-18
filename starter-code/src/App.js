import React, { Component } from 'react';
import contacts from './contacts.json';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    contacts: contacts.filter((contact, i) => i<5)
  };

  addRandom = () => {
    this.setState({contacts: [...this.state.contacts, contacts[Math.floor(Math.random() * contacts.length)]]});
  };

  sortByName = () => {
    this.setState({contacts: this.state.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)});
  };

  sortByPopularity = () => {
    this.setState({contacts: this.state.contacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)});
  };

  removeContact = (index) => {
    this.setState({contacts: this.state.contacts.filter((u, i) => i !== index)});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IRON CONTACTS</h1>
        </header>
        <div className="contact-box">
          <div className="contact-buttons">
            <button onClick={this.addRandom}>Add random</button>
            <button onClick={this.sortByName}>A > Z</button>
            <button onClick={this.sortByPopularity}>Most popular</button>
          </div>

          <hr/>

          <table>
            <tbody>
              {this.state.contacts.map((contact, i) => (
                <tr key={i}>
                  <td className="img-box"><img className="contact-img" src={contact.pictureUrl} alt={contact.name}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button onClick={() => this.removeContact(i)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
