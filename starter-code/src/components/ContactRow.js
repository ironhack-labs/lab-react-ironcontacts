import React, { Component } from "react";
import contacts from "../contacts.json";

class ContactRow extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
      console.log(contacts)
    return (
        contacts.map(e => {
            return(
            <tr>
                <td>{e.name}</td>
                <td><img width= "100px" src={e.pictureUrl} /> </td>
                <td>{e.popularity}</td>
            </tr>
            );
        })
     );
  }
}

export default ContactRow;
