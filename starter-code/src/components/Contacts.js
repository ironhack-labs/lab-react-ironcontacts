import React, { Component } from "react";
import "./Contacts.css";

import contacts from "../contacts.json";

function randomBetween(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts.slice(0, 5) };
  }

  createTable = () => {
    let actor = this.state.contacts.map((item, index) => {
      return (
        <tr key={index}>
          <th>
            <img src={item.pictureUrl} alt="" />
          </th>
          <th>{item.name}</th>
          <th>{item.popularity}</th>
          <th>
            <button onClick={() => this.deleteAct(index)}>Delete</button>
          </th>
        </tr>
      );
    });
    return actor;
  };

  deleteAct = e => {
    let aux = [...this.state.contacts];
    aux.splice(e, 1);
    this.setState({ ...this.state, contacts: aux });
  };

  getRandomAct = () => {
    let aux = [...this.state.contacts];
    let randContact = contacts[randomBetween(0, contacts.length)];
    if (!aux.includes(randContact)) {
      aux.push(randContact);
    } else {
      alert("Contacto random ya existe");
    }
    this.setState({
      ...this.state,
      contacts: aux
    });
  };

  sortName = () => {
    let aux = [...this.state.contacts];
    aux.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    this.setState({
      ...this.state,
      contacts: aux
    });
  };

  sortPopularity = () => {
    let aux = [...this.state.contacts];
    aux.sort(function(a, b) {
      return a.popularity - b.popularity;
    });
    this.setState({
      ...this.state,
      contacts: aux
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getRandomAct}>Get Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.createTable()}</tbody>
        </table>
      </div>
    );
  }
}
