import React from "react";
import "./App.css";
import contacts from "./contacts.json";

let firstFiveContacts = contacts.slice(0, 5);

//let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

class App extends React.Component {
  state = {
    ironContacts: firstFiveContacts,
  };

  addRandomContact = () => {
    let newContacts = this.state.ironContacts.slice();

    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    newContacts.push(randomContact);

    this.setState({ ironContacts: newContacts });
  };

  sortByName = () => {
    let toSortByName = [...this.state.ironContacts];
    let sortedByName = toSortByName.sort((contactA, contactB) =>
      contactA.name > contactB.name ? 1 : contactB.name > contactA.name ? -1 : 0
    );
    this.setState({ ironContacts: sortedByName });
  };

  sortByPopularity = () => {
    let toSortByPop = [...this.state.ironContacts];
    let sortedByPop = toSortByPop.sort(
      (contactA, contactB) => contactB.popularity - contactA.popularity
    );
    this.setState({ ironContacts: sortedByPop });
  };

  deleteContact = (id) => {
    let newContacts = this.state.ironContacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ ironContacts: newContacts });
  };

  render() {
    return (
      <div>
        <h2>IronContacts</h2>
        <table>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
          </tr>
          {this.state.ironContacts.map((contact) => {
            return (
              <div>
                <tr key={contact.id}>
                  <img
                    style={{ width: "50px", height: "70px" }}
                    src={contact.pictureUrl}
                    alt=""
                  />

                  <th>{contact.name}</th>
                  <th>{contact.popularity}</th>
                </tr>
                <button
                  onClick={() => {
                    this.deleteContact(contact.id);
                  }}
                >
                  Delete this contact
                </button>
                ;
              </div>
            );
          })}
        </table>
        <button onClick={this.addRandomContact}>Add random contact</button>;
        <button onClick={this.sortByName}>Sort by name</button>;
        <button onClick={this.sortByPopularity}>Sort by popularity</button>;
      </div>
    );
  }
}

export default App;
