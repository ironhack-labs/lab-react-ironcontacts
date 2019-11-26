import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";
import HandlingEvent from "./HandlingEvent";

class App extends Component {
  state = { contacts: contacts.slice(0, 5) };

  // addRandomContact = () => {
  //   const copy = [...this.state.contacts];
  //   console.log("click");
  //   // do smth avec random ...
  //   copy.push({ name: "toto", popularity: 5 });
  //   this.setState({ contacts: copy });
  // };

  addRandomContact = () => {
    console.log("clicked");
    let random = Math.floor(Math.random() * (contacts.length - 1 - 5)) + 5;
    this.setState({
      contacts: [...this.state.contacts, contacts[random]]
    });
    contacts.splice(random, 1);
  };

  sortByName = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: copyContacts
    });
  };

  sortByPopularity = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.popularity - b.popularity);
    //sort the copyContacts
    this.setState({
      contacts: copyContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <HandlingEvent clbk={this.addRandomContact} />
        <button className="button" onClick={this.sortByName}>
          Sort By Name
        </button>
        <button className="button" onClick={this.sortByPopularity}>
          Sort By Popularity
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody className="contacts">
            {this.state.contacts.map((contact, i) => (
              <Contact
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
