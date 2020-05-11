import React, { Component } from "react";
import data from "../contacts.json";
import SortContacts from "./SortContacts";

class Contacts extends Component {
  state = {
    contacts: data.slice(0, 5),
  };
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <SortContacts />

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <tr key={index}>
                {/* {contact.name} */}
                <td>
                  <img
                    src={contact.pictureUrl}
                    width="100px"
                    alt="celebrity-img"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
