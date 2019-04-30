import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContact() {
    let newContacts = [...this.state.contacts]
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  }

  sortContacts() {
    let newContacts = [...this.state.contacts]
    newContacts.sort((a,b)=>a.Name - b.Name)
    this.setState({
      ...this.state,
      contacts: newContacts
    });

  }

  removeContact(id) {
    let newContacts = [...this.state.contacts]
    newContacts.splice(id,1)
    this.setState({
      ...this.state,
      contacts: newContacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortContacts()}>Sort By Name</button>
        <button onClick={() => this.sortContacts()}>Sort By Popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contacts.map((contact, i) => {
              return (
                <React.Fragment>
                  <tr>
                    <Contact
                      key={i}
                      name={contact.name}
                      picture={contact.pictureUrl}
                      popularity={contact.popularity}
                    />
                    <td>
                      <button onClick={() => this.removeContact(i)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
