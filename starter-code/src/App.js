import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import contactsData from "./contacts.json";
import TableRow from "./components/Table/TableRow";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: this.getContacts(5) };
    console.log(this.state);
  }

  state = {
    contacts: []
  };

  getContacts = qty => {
    return contactsData.slice(0, qty);
  };

  handleDelete = (e, index) => {
    console.log(index);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <section className="uk-section uk-section-secondary">
          <div className="uk-container uk-container-xsmall">
            <h1 className="uk-heading-medium">IronContacts</h1>
            <Table>
              {contacts.map((contact, index) => (
                <TableRow
                  key={index}
                  {...contact}
                  handleDelete={e => this.handleDelete(e, index)}
                />
              ))}
            </Table>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
