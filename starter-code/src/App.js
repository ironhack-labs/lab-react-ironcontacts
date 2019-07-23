import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./components/contactCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  showContact = () => {
    return this.state.contacts.map((contact, i) => {
      return (
        <Contact
          key={i}
          index={i}
          name={contact.name}
          pop={contact.popularity}
          img={contact.pictureUrl}
          deleteContact={() => {
            this.deleteContact(i);
          }}
        />
      );
    });
  };

  deleteContact = contactIndex => {
    let clone = [...this.state.contacts];
    clone.splice(contactIndex, 1);
    this.setState({ contacts: clone });
  };
  sortName = () => {
    console.log("sort");
    let clone = [...this.state.contacts];

    clone = clone.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else if (a.name == b.name) {
        return 0;
      }
    });
    this.setState({ contacts: clone });
  };
  sortPop = () => {
    console.log("sort");
    let clone = [...this.state.contacts];

    clone = clone.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (b.popularity > a.popularity) {
        return 1;
      } else if (a.popularity == b.popularity) {
        return 0;
      }
    });
    this.setState({ contacts: clone });
  };

  randomContact = () => {
    let random = Math.floor(Math.random() * Math.floor(contacts.length));
    let clone = [...this.state.contacts];
    clone.unshift(contacts[random]);
    this.setState({ contacts: clone });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="buttons">
          <button onClick={this.randomContact}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Pop</button>
        </div>
        <div className="titles">
          <h3>Picture</h3>
          <h3>Name</h3>
          <h3>Popularity</h3>
          <h3>Action</h3>
        </div>
        <div className="contact-card">{this.showContact()}</div>
      </div>
    );
  }
}

export default App;
