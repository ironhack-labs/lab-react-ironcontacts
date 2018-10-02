import React, { Component } from "react";
import contacts from "../contacts.json";

class ContactRow extends Component {
  constructor() {
    super();
   
  }

  render() {
      let {name, pictureUrl,popularity} = this.props;
   
        return (
          <tr>
            <td key={name}>{name}</td>
            <td key={pictureUrl}>
              <img width="100px" src={pictureUrl} />{" "}
            </td>
            <td key={popularity}>{popularity}</td>
          </tr>
        );
  }
}

export default ContactRow;
