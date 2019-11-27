import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

const Contact = props => {
  return (
    <tr>
      <th>
        <img src={props.picture} width="100" alt={props.name} />
      </th>
      <th>{props.name}</th>
      <th>{props.rating}</th>
      <th>
        <button onClick={props.delete}>Delete</button>
      </th>
    </tr>
  );
};

class Contacts extends Component {
  state = {
    showedProducers: contacts.slice(0, 5)
  };

  randomPicker = length => {
    return Math.floor(Math.random() * length);
  };

  addContact = () => {
    let newRandomContact;
    let random = this.randomPicker(contacts.length);

    while (this.state.showedProducers.includes(contacts[random])) {
      random = this.randomPicker(contacts.length);
    }

    newRandomContact = contacts[random];

    this.setState({
      showedProducers: [newRandomContact, ...this.state.showedProducers]
    });
  };

  sortByName = () => {
    this.setState({
      showedProducers: this.state.showedProducers.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    });
  };

  sortByPopularity = () => {
    this.setState({
      showedProducers: this.state.showedProducers.sort(
        (a, b) => b.popularity - a.popularity
      )
    });
  };

  deleteContact = id => {
    const { showedProducers } = this.state;
    const index = showedProducers.findIndex(el => el.id === id);

    showedProducers.splice(index, 1);

    this.setState({
      showedProducers: showedProducers
    });
  };

  render() {
    const producers = this.state.showedProducers.map(contact => {
      const rating = contact.popularity.toFixed(2);
      return (
        <Contact
          key={contact.id}
          picture={contact.pictureUrl}
          name={contact.name}
          rating={rating}
          delete={() => this.deleteContact(contact.id)}
        />
      );
    });

    return (
      <div>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{producers}</tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;
