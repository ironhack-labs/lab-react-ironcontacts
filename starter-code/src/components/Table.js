import React, { Component } from "react";
import contactsArray from "../contacts.json";

class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsArray };
  }

  render() {
    return this.state.contacts
      .map((cont, i) => (
        <table key={i} className="alignContent">
          <tbody>
            <tr className="alignItems">
              <td>
                <img
                  src={cont.pictureUrl}
                  alt={cont.pictureUrl}
                  className="image"
                />
              </td>
              <td>
                <p className="nameSize">{cont.name}</p>
              </td>
              <td>
                <p>{cont.popularity.toFixed(2)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      ))
      .splice(0, 5);
  }
}

export default Contacts;
