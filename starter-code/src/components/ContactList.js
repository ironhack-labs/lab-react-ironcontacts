import React, { Component } from "react";
import "./ContactList.css";
import contacts from "../contacts.json";

class ContactList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      contactArray: contacts.filter(oneContact => {
        return contacts.indexOf(oneContact) <= 4;
      })
    };
  }

  addRandomContact() {
    const shortlist = this.state.contactArray;
    const randomIndex = Math.floor(Math.random() * contacts.length);
    shortlist.push(contacts[randomIndex]);
    this.setState({ contactArray: shortlist });
  }

  // randomScheme(color) {
  //   const colors = ["orange", "purple", "green", "red"];
  //   const randomIndex = Math.floor(Math.random() * colors.length);
  //   this.changeScheme(colors[randomIndex]);
  // }

  // updateName() {
  //   const newFirstName = prompt("First Name");
  //   const newLastName = prompt("Last Name");
  //   const user = this.state.userInfo;
  //   user.firstName = newFirstName;
  //   user.lastName = newLastName;
  //   // use React's built-in setState() method to change the state
  //   // (it will cause React to RENDER the component again)
  //   this.setState({ userInfo: user });
  // }
  render() {
    const { contactArray } = this.state;

    return (
      <section className="ContactList">
        <h2>Contact List</h2>
        <button onClick={() => this.addRandomContact()}>
          Add a Random Contact
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contactArray.map(oneContact => {
            return (
              <tr key={oneContact.pictureUrl}>
                <td>
                  <img
                    width="20%"
                    height="auto"
                    src={oneContact.pictureUrl}
                    alt={oneContact.name}
                  />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}

export default ContactList;
