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
        </tr>
      );
    });
    return actor;
  };

  getRandomAct = () => {
    let aux = this.state.contacts
    aux.push(contacts[randomBetween(0, contacts.length)])
    this.setState({
      ...this.state,
      contacts: aux
    });
  };

  render() {
    return (
      <div>
        <button id="getRandomAct" onClick={this.getRandomAct}>
          Get random Actor
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Populaitry</th>
            </tr>
          </thead>
          <tbody>{this.createTable()}</tbody>
        </table>
      </div>
    );
  }
}
