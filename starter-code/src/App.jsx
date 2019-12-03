import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const contactsFive = contacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsFive
    };
    this.addRandom = this.addRandom.bind(this);
    this.sort = this.sort.bind(this);
    this.sortPop = this.sortPop.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }
  addRandom() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (!this.state.contacts.includes(random)) {
      const newContacts = [...this.state.contacts, random];

      this.setState({
        contacts: newContacts
      });
    } else {
      this.addRandom();
    }
  }

  sortPop() {
    const sortedPop = this.state.contacts.sort(
      (b, a) => a.popularity - b.popularity
    );
    this.setState({
      contacts: sortedPop
    });
  }

  sort() {
    const sorted = this.state.contacts.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    //const sorted = this.state.contacts.sort((a, b) => a.name - b.name);
    const newSorted = [...sorted];
    this.setState({
      contacts: newSorted
    });
  }

  deleteOne(err) {
    console.log(err);
    const deletedCont = [...this.state.contacts];
    deletedCont.splice(err, 1);
    this.setState({
      contacts: deletedCont
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <h2>Iron Contacts</h2>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sort}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <div class='center'>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={contact.pictureUrl} alt='' />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td>
                      <button onClick={() => this.deleteOne(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
