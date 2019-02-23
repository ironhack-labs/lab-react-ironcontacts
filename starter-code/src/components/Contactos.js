import React, { Component } from "react";
import contacts from "../contacts.json";
const firstContacts = contacts.slice(0, 5);

class Contacts extends Component {
  state = {
    contactList: firstContacts
  };

  addRandomContact = () => {
    if (this.state.contactList.length === contacts.length) {
      alert("No more contacts to add");
      return
    }
    let nameList = this.state.contactList.map(el=>el.name)
    let filteredList = contacts.filter(el=>nameList.indexOf(el.name)< 0) //to avoid duplicates when clicking the randomm contnact button
    let randomContact = Math.floor(Math.random() * filteredList.length);
    let newContactList = this.state.contactList.slice();
    newContactList.push(filteredList[randomContact]);
    this.setState({
        contactList: newContactList
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addRandomContact}>Add random Contact</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contactList.map((contact, index) => (
              <tr className="table-row" key={index}>
                <td className="table-cell">
                  <img
                    className="image"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td className="table-cell">{contact.name}</td>
                <td className="table-cell">{contact.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
