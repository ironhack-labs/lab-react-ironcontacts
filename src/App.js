import React, { Component } from "react";
import "./App.css";
import allContacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleContacts: allContacts.slice(0, 5),
      invisibleContacts: allContacts.slice(5),
      ascName: true,
      ascPop: true,
    };
  }

  displayContacts = () => {
    return this.state.visibleContacts.map((contact, i) => {
      return (
        <div key={i} className="contact-card">
          <img src={contact.pictureUrl} alt="contact" />
          <h3>Name: {contact.name}</h3>
          <h3>Pop: {contact.popularity}</h3>
          <button onClick={() => this.removeContact(i)}>Delete</button>
        </div>
      );
    });
  };

  addRandom = () => {
    const randomNumber = Math.floor(
      Math.random() * this.state.invisibleContacts.length
    );
    let visibleClone = [...this.state.visibleContacts];
    let invisibleClone = [...this.state.invisibleContacts];

    visibleClone.unshift(...invisibleClone.splice(randomNumber, 1));
    // same as
    // visibleClone.unshift(invisibleClone[randomNumber])
    // invisibleClone.splice(randomNumber, 1);

    this.setState({
      visibleContacts: visibleClone,
      invisibleContacts: invisibleClone,
    });
  };

  removeContact = (contactIndex) => {
    let visibleClone = [...this.state.visibleContacts];
    let invisibleClone = [...this.state.invisibleContacts];

    invisibleClone.unshift(...visibleClone.splice(contactIndex, 1));

    this.setState({
      visibleContacts: visibleClone,
      invisibleContacts: invisibleClone,
    });
  };

  sortBy = (what) => {
    let clone = [...this.state.visibleContacts];

    let ascending = what === "name" ? this.state.ascName : this.state.ascPop;

    clone.sort((a, b) => {
      if (a[what] < b[what]) {
        return ascending ? -1 : 1;
      } else if (b[what] < a[what]) {
        return ascending ? 1 : -1;
      } else {
        return 0;
      }
    });

    if (what === "name") {
      this.setState({ visibleContacts: clone, ascName: !this.state.ascName });
    } else {
      this.setState({ visibleContacts: clone, ascPop: !this.state.ascPop });
    }
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandom}>Add Random Contact</button>

        <button onClick={() => this.sortBy("name")}>Sort By Name</button>

        <button onClick={() => this.sortBy("popularity")}>
          Sort By Popularity
        </button>

        <br />
        <div className="contact-container">{this.displayContacts()}</div>
      </div>
    );
  }
}

export default App;
