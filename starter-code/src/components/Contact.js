import React, { Component } from "react";
import contacts from "../contacts.json";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { contactArray: contacts };
  }

  render() {
    const { contactArray } = this.state;
    const { celebrityName } = this.props;

    return (
      <tbody>
        {contactArray.map(oneContact => {
          if (oneContact.name === celebrityName)
            return (
              <tr key={oneContact.name} className="celebrity">
                <td>
                  <img src={oneContact.pictureUrl} />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
              </tr>
            );
          return;
        })}
      </tbody>
    );
  }
}

export default Contact;
