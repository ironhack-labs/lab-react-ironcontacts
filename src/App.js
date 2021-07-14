import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

const fiveContactsList = contacts.slice(0, 5);

export default class App extends Component {
  state = {
    ironContacts: fiveContactsList,
  };

  addNewRandomContact = () => {
    let newContact = "";
    const randomContact = Math.floor(Math.random() * contacts.length - 1);

    newContact = contacts[randomContact];

    this.setState((state) => {
      return {
        ironContacts: [...state.ironContacts, newContact],
      };
    });
  };

  sortContactsByName = () => {
    const contactsSorted = this.state.ironContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState(() => {
      return {
        ironContacts: contactsSorted,
      };
    });
  };

  sortContactsByPopularity = () => {
    const contactsSorted = this.state.ironContacts.sort((a, b) =>
      a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
    );
    this.setState(() => {
      return {
        ironContacts: contactsSorted,
      };
    });
  };

  deleteContact = (id) => {
    this.setState(state => ({
      ironContacts: this.state.ironContacts.filter(contact => {
        return contact.id !== id
      })
    }))
  }

  render() {
    const listContacts = this.state.ironContacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name} width="50" />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
        </tr>
      );
    });
    return (
      <>
        <h1>IronContacts</h1>
        <button onClick={this.addNewRandomContact}>Add Random Contact</button>
        <button onClick={this.sortContactsByName}>Sort by Name</button>
        <button onClick={this.sortContactsByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{listContacts}</tbody>
        </table>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
