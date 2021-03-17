

import contacts from './contacts.json';
import React, { Component } from "react";

export default function App() {

class Contacts extends Component {
  state = {
    allcontacts: contacts.slice(0, 5),
  };


render() {
  return (
  
    <div>
      <table id="contacts">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </thead>
          {this.state.allContacts.map((contact) => (
          <tbody key={contact.id}>
            <tr>
              <td>
                <img src={contact.pictureUrl} alt=""></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
}