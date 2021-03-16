import React, { Component } from 'react';
// import Contacts from './Components/Contacts.jsx';
// import logo from './logo.svg';
import contactsJSON from './contacts.json';
import './App.css';

class Contacts extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5)
  }

  // ITERATION 2

  handleNewContact = () => {
    // randomly select a contact from contacts.json
    let randomIndex = Math.floor(Math.random() * contactsJSON.length);
    let newContact = contactsJSON[randomIndex];
    console.log(contactsJSON[randomIndex].name);
    console.log(this.state.contacts);
    // add that contact to the array that's displayed
    let updatedArray = this.state.contacts.push(newContact);
    console.log(updatedArray, "updated array");
    this.setState({ contacts: this.state.contacts });

    // don't forget setState() pour que React relance le render

  }

  // ITERATION 3
  handleSortByName = () => {
    this.state.contacts.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.setState({ contacts: this.state.contacts });
  };

  handleSortByPopularity = () => {
    this.state.contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ contacts: this.state.contacts });
  };

  handleRemoveContact = (contact) => {
    // console.log(contact, 'titi');
    // get index de l'array de l'actor
    let filteredArray = this.state.contacts.filter(element => element.id !== contact.id);
    console.log(filteredArray, 'titi');
    // remove actor

    //setState
    this.setState({ contacts: filteredArray })

  };


  render() {
    return (
      <div>
        <h1>hello there</h1>

        <button onClick={this.handleNewContact}>Add a random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) =>
              <tr>
                <td> <img class="picture" src={contact.pictureUrl} alt="contact-picture" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.handleRemoveContact(contact)}>Remove contact</button></td>

              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
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


/*




function App() {
  class Contacts extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5)
  }
  return (

    <div>
      <h1>hello there</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contact) =>
            <tr>
              <td> <img class="picture" src={contact.pictureUrl} alt="contact-picture" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>

            </tr>
          )}
        </tbody>
      </table>
    </div>


}
    // <div className="App">
    //   <Contacts />

    // </div>
  );
}

export default App;
*/