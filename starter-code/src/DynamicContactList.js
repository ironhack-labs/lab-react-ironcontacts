import React from "react";
import contacts from "./contacts.json";


class DynamicContactList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contactArray: contacts.slice(0, 5)
      };
    }
  
    addRandomContact() {
      const newContact = contacts[Math.floor(Math.random() * contacts.length)];
      this.state.contactArray.push(newContact);
      this.setState({ contactArray: this.state.contactArray });
    }
  
    sortByName() {
      const newArray = this.state.contactArray;
      newArray.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({ contactArray: newArray });
    }
  
    sortByPopularity() {
      const newArray = this.state.contactArray;
      newArray.sort(function(a, b) {
        return b.popularity - a.popularity;
      });
      this.setState({ contactArray: newArray });
    }
  
    removeContact(index) {
      const contact = this.state.contactArray;
      contact.splice(index, 1);
      this.setState({ contactArray: contact });
    }
  
    render() {
      return (
        <div className="IronContacts">
          <h1>IronContacts</h1>
          <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort By Name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort By Popularity
          </button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contactArray.map((contact, index) => (
                <tr>
                  <td>
                    <img className="contact-picture" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.removeContact(index)}>Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }



export default DynamicContactList;