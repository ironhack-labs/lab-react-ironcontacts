import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Table from "./Table5";
import RandomButton from "./RandomButton";
import SortingButtons from "./SortingButtons";

class App extends Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  };

  addContact = c => {
    const tmp = [...this.state.contacts];
    tmp.push(c);
    this.setState({ contacts: tmp });
  };

  sortContacts = sortedContacts => {
    this.setState({ contacts: sortedContacts });
  };

  deleteContact = contact => {
    const temp = [...this.state.contacts];
    let index = contact.target.parentElement.parentElement.getAttribute(
      "data-index"
    );
    console.log(index);
    temp.splice(index, 1);
    this.setState({ contacts: temp });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ironcontacts</h1>
        </header>
        <RandomButton
          clbk={this.addContact}
          contacts={[...contacts].splice(this.state.contacts.length)}
        />
        <SortingButtons
          clbk={this.sortContacts}
          contacts={this.state.contacts}
        />
        <Table clbk={this.deleteContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
