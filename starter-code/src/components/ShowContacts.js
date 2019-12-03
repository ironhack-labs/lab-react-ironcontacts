import React, { Component } from "react";
import CardContact from "./CardContact";
import shortId from "shortid";
import contacts from "../contacts.json";

class ShowContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contactsArr.splice(0, 5),
      isSorted: false,
      isPopularity: false
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

  sortByName = () => {
    //   It is creating a new array that is going to keep an array sorted of contacts
    var arraySortedByName = this.state.contacts.sort((a, b) => {
      // check if is already sorted
      if (this.state.isSorted) {
        // If true, return a >> z that is ordered.
        return a.name.localeCompare(b.name);
      } else {
        // if not, reverse.. the z >> a
        return b.name.localeCompare(a.name);
      }
    });
    this.setState({
      contacts: arraySortedByName,
      isSorted: !this.state.isSorted
    });
  };

  sortByPopularity = () => {
    const sortedPopularity = this.state.contacts.sort((a, b) => {
      if (this.state.isPopularity) {
        return a.popularity - b.popularity;
      } else {
        return b.popularity - a.popularity;
      }
    });

    this.setState({
      contacts: sortedPopularity,
      isPopularity: !this.state.isPopularity
    });
  };


//   ElemIndex will be the contact to remove
  deleteContact = elemIndex => {
    // Copy the contacts from the state
    const contactsCopy = [...this.state.contacts];

    // Edit the copy of the contacts
    // Buscar el index y lo quita del array el numero que hay en segundo lugar. En este caso, 1
    contactsCopy.splice(elemIndex, 1);

    // Set back the updated state
    this.setState({ contacts: contactsCopy });

  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort Contact By name</button>
        <button onClick={this.sortByPopularity}>
          Sort Contact By Popularity
        </button>

        <tr className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {this.state.contacts.map((oneContact, key) => {
          return <CardContact key={shortId.generate()} contact={oneContact} clickToDelete={() =>{
               this.deleteContact(key); 
              }} />;
        })}
      </div>
    );
  }
}
export default ShowContacts;
