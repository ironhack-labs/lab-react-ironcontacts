import React, { Component } from "react";
import CardContact from "./CardContact";
import shortId from "shortid";
import contacts from "../contacts.json";

class ShowContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contactsArr.splice(0, 5)
    };
  }

  randomContact = () => {
    // Should be var or let to user, can not be const
    var randomContact;
    var inList = true;

    while (inList) {
      randomContact = contacts[Math.floor(Math.random() * contacts.length)];

      inList = false;
      this.state.contacts.forEach(elem => {
        if (elem.name === randomContact.name) {
          console.log("Elem here", elem.name);
          console.log("Random here", randomContact.name);

          inList = true;
        }
      });
    }
    // It creates a new array that we assign to contact into the state.
    this.setState({
      contacts: [randomContact, ...this.state.contacts]
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>

        <tr className="table-header">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
        </tr>

        {this.state.contacts.map((oneContact, key) => {
          return (
              <CardContact key={shortId.generate()} contact={oneContact} />
          );
        })}
      </div>
    );
  }
}
export default ShowContacts;
