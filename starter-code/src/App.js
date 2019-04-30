import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContact() {
    let newContacts = [...this.state.contacts];
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  }

  sortContactsByPopularity() {
    let newContacts = [...this.state.contacts];
    newContacts = newContacts.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  }

  sortContactsByName() {
    let newContacts = [...this.state.contacts];
    newContacts = newContacts.sort(function(a, b) {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  }

  removeContact(id) {
    let newContacts = [...this.state.contacts];
    newContacts.splice(id, 1);
    this.setState({
      ...this.state,
      contacts: newContacts
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button className="mainButton" onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button
          className="mainButton"
          onClick={() => this.sortContactsByName()}
        >
          Sort By Name
        </button>
        <button
          className="mainButton"
          onClick={() => this.sortContactsByPopularity()}
        >
          Sort By Popularity
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contacts.map((contact, i) => {
              return (
                <React.Fragment key={i}>
                  <tr>
                    <Contact
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
