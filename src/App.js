import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React from "react";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandom = () => {
    const randomContact = contacts.splice(
      Math.floor(Math.random() * contacts.length),
      1
    );
    const updatedContacts = [...this.state.contacts, randomContact[0]];
    this.setState({ contacts: updatedContacts });
  };

  sortName = () => {
    const sortedContact = [...this.state.contacts];
    sortedContact.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({ contacts: sortedContact });
  };

  sortPop = () => {
    const sortedContact = [...this.state.contacts];
    sortedContact.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({ contacts: sortedContact });
  };

  handleDelete = (i) => {
    const removedContact = [...this.state.contacts];
    removedContact.splice(i, 1);

    this.setState({ contacts: removedContact });
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.addRandom}>Add random contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Popularity</button>
        </div>

        {this.state.contacts.map((contact, i) => {
          return (
            <table key={contact.id} width="400">
              <tr>
                <th>Name</th>
                <th>Popularity</th>
                <th>Picture</th>
              </tr>
              <tr>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <img width="100" src={contact.pictureUrl} />
                </td>
                <button
                  onClick={() => {
                    this.handleDelete(i);
                  }}
                >
                  Remove
                </button>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default App;
