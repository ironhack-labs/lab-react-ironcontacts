import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import contactsData from "./contacts.json";
import TableRow from "./components/Table/TableRow";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: this.getContacts(5) };
  }

  state = {
    contacts: []
  };

  getContacts = qty => {
    return contactsData.slice(0, qty);
  };

  getRandomContact = () => {
    return contactsData[Math.floor(Math.random() * (contactsData.length + 1))];
  };

  handleDelete = (e, index) => {
    console.log(index);
  };

  handleAddRandom = e => {
    const randomContact = this.getRandomContact();
    let { contacts } = this.state;
    contacts.push(randomContact);
    this.setState({ contacts });
  };

  handleSortByName = e => {
    let { contacts } = this.state;
    contacts.sort((cont1, cont2) => {
      const cont1Lower = cont1.name.toLowerCase();
      const cont2Lower = cont2.name.toLowerCase();
      if (cont1Lower < cont2Lower) {
        return -1;
      }
      if (cont1Lower > cont2Lower) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts });
  };

  handleSortByPopularity = e => {
    let { contacts } = this.state;
    contacts.sort((cont1, cont2) => cont2.popularity - cont1.popularity);
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <section className="uk-section uk-section-default">
          <div className="uk-container uk-container-xsmall">
            <h1 className="uk-heading-medium">IronContacts</h1>
            <div className="uk-grid-small uk-child-width-1-3" uk-grid="true">
              <div>
                <button
                  className="uk-button uk-button-primary uk-button-small uk-width-1-1"
                  onClick={this.handleAddRandom}
                >
                  Add Random Contact
                </button>
              </div>
              <div>
                <button
                  className="uk-button uk-button-primary uk-button-small uk-width-1-1"
                  onClick={this.handleSortByName}
                >
                  Sort by Name
                </button>
              </div>
              <div>
                <button
                  className="uk-button uk-button-primary uk-button-small uk-width-1-1"
                  onClick={this.handleSortByPopularity}
                >
                  Sort by Popularity
                </button>
              </div>
            </div>
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
