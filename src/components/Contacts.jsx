import React, { Component } from "react";
import data from "../contacts.json";

class Contacts extends Component {
  state = {
    contacts: data.slice(0, 5),
    sort: false,
  };

  addCelebrity = () => {
    const randomCelebrity = data[Math.floor(Math.random() * Math.floor(100))];
    this.setState({
      contacts: [...this.state.contacts, randomCelebrity],
    });
  };

  nameSort = () => {
    if (this.state.sort) {
      return [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      return this.state.pokemons;
    }
  };

  handleSort = (event) => {
    this.setState({ sort: !this.state.sort });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addCelebrity}>Add a celebrity !</button>
        <button onClick={this.handleSort}>Sort by name</button>
        <button onClick={this.popSort}>Sort by popularity</button>
        <h2>Image Name Popularity </h2>
        {this.state.contacts.map((contact, index) => (
          <div className="flex" key={index}>
            <img className="photo" src={contact.pictureUrl} alt="" />
            <p>{contact.name}</p>
            <p>{contact.popularity.toString().substr(0, 5)}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Contacts;
