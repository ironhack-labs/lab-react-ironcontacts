import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactTab from "./components/ContactTab.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allContacts: contacts.splice(0, 5)
    };
  }

  addRandomContact = () => {
    const i = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[i];
    const contactsCopy = [...this.state.allContacts];
    contactsCopy.push(newContact);
    this.setState({
      allContacts: contactsCopy
    });
  };

  sortByName = () => {
    const contactsCopy = [...this.state.allContacts];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      allContacts: contactsCopy
    });
  };

  sortByPopularity = () => {
    const contactsCopy = [...this.state.allContacts];
    contactsCopy.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      allContacts: contactsCopy
    });
  };

  deleteContact = i => {
    const contactsCopy = [...this.state.allContacts];
    contactsCopy.splice(i, 1);
    this.setState({
      allContacts: contactsCopy
    });
  };

  render() {
    console.log(this.state.allContacts);
    return (
      <div className="App">
        <section className="big-container">
          <header className="App-header">
            <h1 className="App-title">IronContacts</h1>
          </header>
          <div className="buttons-container">
            <button onClick={this.addRandomContact}>Add random contact</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <button onClick={this.sortByPopularity}>Sort by popularity</button>
          </div>
          <div className="contacts-container">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th colSpan="1">Picture</th>
                  <th colSpan="1">Name</th>
                  <th colSpan="1">Popularity</th>
                  <th colSpan="1">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allContacts.map((contact, i) => (
                  <ContactTab
                    key={i}
                    {...contact}
                    clickToDelete={() => this.deleteContact(i)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
