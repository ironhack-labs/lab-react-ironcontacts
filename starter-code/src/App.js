import React, { Component } from "react";
import Contact from "./components/Contact/Contact";
import contactsList from "./data/contacts.json";
import Button from "./components/Button/Button";
import SortDropdown from "./components/SortDropdown/SortDropdown";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      contactsList: contactsList.splice(0, 5)
    };
  }

  addRandomContact() {
    let randomContact = contactsList[Math.floor(Math.random() * contactsList.length)];
    let newContactsList = [...this.state.contactsList];
    newContactsList.push(randomContact);
    this.setState({
      contactsList: newContactsList
    });
  }

  sortContactsListByPopularity(order) {
    let contactsListSorted = [...this.state.contactsList].sort((a, b) => (a.popularity - b.popularity) * order);
    this.setState({
      contactsList: contactsListSorted
    });
  }

  sortContactsListByName(order) {
    let contactsListSorted = [...this.state.contactsList].sort((a, b) => (a.name.localeCompare(b.name)) * order)
    this.setState({
      contactsList: contactsListSorted
    });
  }

  removeContact(contactIdx) {
    let contactsListCopy = [...this.state.contactsList]
    contactsListCopy.splice(contactIdx, 1)
    this.setState({
      contactsList: contactsListCopy
    })
  }

  removeAllButOne(contactIdx) {
    let contactsListCopy = [...this.state.contactsList].splice(contactIdx, 1)
    this.setState({
      contactsList: contactsListCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Contacts</h1>
        <div className="sort-options">
          <Button classes="button-is-primary first" clickHandler={() => this.addRandomContact()}>Add a random contact</Button>
          <SortDropdown sortBy="popularity ★">
            <Button clickHandler={() => this.sortContactsListByPopularity(1)}>Asc</Button>
            <Button clickHandler={() => this.sortContactsListByPopularity(-1)}>Des</Button>
          </SortDropdown>
          <SortDropdown sortBy="name">
            <Button clickHandler={() => this.sortContactsListByName(1)}>Asc</Button>
            <Button clickHandler={() => this.sortContactsListByName(-1)}>Desc</Button>
          </SortDropdown>
        </div>
        <table className="contacts">
          <tbody>
            {this.state.contactsList.map((contact, idx) => {
              return <Contact
                key={idx}
                {...contact}
                delete={() => this.removeContact(idx)}
                removeAllButOne={() => this.removeAllButOne(idx)}
              />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
