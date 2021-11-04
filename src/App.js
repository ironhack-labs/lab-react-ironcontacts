import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import AddContact from "./AddContact";

const firstFiveContacts = contacts.slice(0, 5);
console.log(firstFiveContacts);

function getRandomContact() {
  return contacts[Math.ceil(Math.random()*contacts.length)];
};

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="profile" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td className="delete-btn">
          <button onClick={this.props.clickToDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

class App extends React.Component {
  state = {
    contactsDisplayed: firstFiveContacts
  };

  addRandomContact = () => {
    this.setState((prevState, props) => {
      let randomContact = getRandomContact();
      return {
        contactsDisplayed: [...prevState.contactsDisplayed, randomContact],
      };
    })
  }

  sortByName = () => {
    this.setState((prevState, props) => {
      return { contactsDisplayed: prevState.contactsDisplayed.sort((a,b) => {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      }) };
    })
  }

  sortByPopularity = () => {
    this.setState((prevState, props) => {
      return {
        contactsDisplayed: prevState.contactsDisplayed.sort((a, b) => {
          return a.popularity > b.popularity
            ? -1
            : b.popularity > a.popularity
            ? 1
            : 0;
        }),
      };
    });
  }

  deleteContactHandler = (id) => {
    const contactsCopy = [...this.state.contactsDisplayed];
    const contactIndex = contactsCopy.findIndex(contact => contact.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState({ contactsDisplayed: contactsCopy });
  }

  createContact = (contact) => {
    const contactsCopy = [...this.state.contactsDisplayed, contact];
    this.setState({contactsDisplayed: contactsCopy})
  }

  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <div>
          <AddContact addContactHandler={this.createContact}/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsDisplayed.map((contact) => {
              return <Contact key={contact.id} {...contact} clickToDelete={() => this.deleteContactHandler(contact.id)}/>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
