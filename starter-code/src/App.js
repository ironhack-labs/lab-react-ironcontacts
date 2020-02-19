import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

const DisplayContacts = props => {
  // const divStyle = {
  //   height: "100px",
  //   width: "100px"
  // };
  // const { pictureUrl, name, popularity } = props.contact;

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {props.contact.map(contact => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  height="100px"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandom = () => {
    let found;
    while (!found && this.state.contacts.length < contacts.length) {
      const random = contacts[Math.floor(Math.random() * contacts.length)];
      const alreadyExisting = this.state.contacts.find(contact => {
        return contact.id === random.id;
      });

      if (!alreadyExisting) {
        found = random;
      }
    }

    if (found) {
      this.setState({
        contacts: [...this.state.contacts, found]
      });
    }
  };

  sortName = () => {
    this.setState({
      contacts: this.state.contacts.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    });
  };

  sortPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort(function(a, b) {
        return b.popularity - a.popularity;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>IronContact</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <DisplayContacts contact={this.state.contacts} />
      </div>
    );
  }
}

export default App;
