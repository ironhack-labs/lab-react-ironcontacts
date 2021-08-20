import React from "react";
import contacts from "./contacts.json";
import "./App.css";

const shortContactsList = contacts.slice(0, 5);

function getRandomContact() {
  return contacts[Math.floor(Math.random() * contacts.length)];
}
class Contact extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.name + "photo"} />
        </td>
        <td>{this.props.name}</td>
        <td>{Math.round(this.props.popularity * 100) / 100}</td>
        <td>
          <button onClick={this.props.methodToDeleteContact}>Delete</button>
        </td>
      </tr>
    );
  }
}
class App extends React.Component {
  state = {
    contactList: shortContactsList,
  };

  addContact = () => {
    const newContact = getRandomContact();

    this.setState((prevState) => {
      return {
        contactList: [...prevState.contactList, newContact],
      };
    });
  };

  filterContactsByName = () => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.sort((a, b) => (a.name > b.name ? 1 : -1)),
      };
    });
  };

  filterContactsByPopularity = () => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.sort((a, b) => (a.popularity > b.popularity ? -1 : 1)),
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((contact) => contact.id !== contactId),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <div>
          <button onClick={this.filterContactsByName}>Sort by Name</button>
          <button onClick={this.filterContactsByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr className="header-row">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contactObj) => {
              return (
                <Contact
                  key={contactObj.id}
                  {...contactObj}
                  methodToDeleteContact={() => {
                    this.deleteContact(contactObj.id);
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
