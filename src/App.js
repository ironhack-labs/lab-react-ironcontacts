import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

import React, { PureComponent } from "react";

export class Contacts extends PureComponent {
  state = {
    fiveContacts: contacts.slice(0, 5),
  };

  render() {
    // console.log(contacts)
    return (
      <div>
        <table id="contacts">
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          {this.state.fiveContacts.map((contact) => (
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

function App() {
  return (
    <div>
      <Contacts />
    </div>
  );
}

export default App;
