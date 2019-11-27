import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import HandlingEvent from "./HandlingEvent";
// import DeleteContatc from "./DeleteContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5),
      memoryContacts: contacts.slice(5)
    };
  }

  addRandomContact = () => {
    let random = Math.floor(Math.random() * (contacts.length - 1 - 5)) + 5;
    console.log(random);
    const newMemoryContact = this.state.memoryContacts.splice(random, 1);
    const newContacts = [...this.state.contacts, contacts[random]];

    this.setState({
      contacts: newContacts,
      memoryContacts: newMemoryContact
    });
  };

  sortByName = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: copyContacts
    });
  };

  sortByPopularity = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.popularity - b.popularity);
    //sort the copyContacts
    this.setState({
      contacts: copyContacts
    });
  };

  deleteContact = index => {
    const copyContacts = [...this.state.contacts];

    copyContacts.splice(index, 1);

    this.setState({ contacts: copyContacts });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <HandlingEvent clbk={this.addRandomContact} />

        <button className="btn btn-light" onClick={this.sortByName}>
          Sort By Name
        </button>

        <button className="btn btn-light" onClick={this.sortByPopularity}>
          Sort By Popularity
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody className="contacts">
            {this.state.contacts.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img className="Image" src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>

                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => this.deleteContact(i)}
                  >
                    Delete contact
                  </button>
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
