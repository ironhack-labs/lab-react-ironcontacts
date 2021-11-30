import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import contacts from "./contacts.json";
import { render } from "@testing-library/react";

const fiveFirstContacts = contacts.slice(0, 5);

function getRandomContact() {
  return contacts[Math.floor(Math.random() * contacts.length)];
}

class Contact extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt={this.pictureUrl} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
        <td className="cont-delete">
          <button onClick={this.props.clickToDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

class App extends Component {
  state = {
    contactsOrigin: fiveFirstContacts,
  };

  addRandomContact() {
    const arr = [...this.state.contactsOrigin];
    arr.push(getRandomContact());
    this.setState({
      contactsOrigin: arr,
    });
  }

  sortContact(){
    const arr = [...this.state.contactsOrigin];
    arr.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contactsOrigin: arr,
    });
  }

  highestContact(){
    const arr = [...this.state.contactsOrigin];
    arr.sort((value1, value2) => value2.popularity - value1.popularity)
    this.setState({
      contactsOrigin: arr,
    });
  }

  deleteContact = (id) => {
    let arr = [...this.state.contactsOrigin];
    arr = arr.filter(elem => elem.id !== id)
    this.setState({
      contactsOrigin: arr,
    });
  }
  

  render() {
    return (
      <div className="container-contacts">
        <h1>IronContacts</h1>
        <div className="cont-btn">
          <button onClick={() => this.addRandomContact()}> Add Random Contact</button>
          <button onClick={() => this.sortContact()}> Sort By Name</button>
          <button onClick={() => this.highestContact()}> Sort By Popularity</button>
        </div>
        <table>
          <thead>
            <tr className="cont-cabecera">
              <th> Picture </th>
              <th> Name </th>
              <th> Popularity </th>
            </tr>
            <tr className="cont-cabecera">
              <td></td>
            </tr>
          </thead>
          <tbody className="contact">
            {this.state.contactsOrigin.map((contact) => {
              return <Contact key={contact.id} {...contact} clickToDelete={() => this.deleteContact(contact.id)}/>;
            })}
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
