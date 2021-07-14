import React from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomCelebrity = () => {
    let indexRandom = Math.floor(Math.random() * contacts.length - 0);
    let newcelebrities = contacts[indexRandom];
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(newcelebrities),
      };
    });
  };

  sortByName = () => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    });
  };

  sortByPopularity = () => {
    this.setState((previousState)  => {
      return {
        contacts:previousState.contacts.sort((a, b) => b.popularity - a.popularity)};
    });
   
  };

  deleteContact = (id) => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.filter(
          (contacts) => contacts.id !== id
        ),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div>
          <button onClick={this.addRandomCelebrity}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>sort by Popularity</button>
        </div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td> {contact.name}</td>
                  <td> {contact.popularity}</td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    Remove Contact
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
