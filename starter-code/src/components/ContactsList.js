import React, { Component } from "react";

import contacts from "../contacts.json";

//! -----------------STATE-------------------!//

class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
      shownContacts: contacts.splice(0, 5)
    };
  }

  //! -----------------METHODS-------------------!//
  randomContact() {
    const randomContact = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)];

    const copy = [randomContact].concat(this.state.shownContacts); // concatena el random contact al array shown contacts

    this.setState({
      shownContacts: copy // shownContacts ahora es copy
    });
  }

  deleteContact(idx) {
    const copy = [...this.state.shownContacts]; // copia del array
    copy.splice(idx, 1); // elimina un elemento desde el índice indicado

    this.setState({
      shownContacts: copy // shownContacts ahora es copy
    });
  }

  sortByName() {
    const copy = [...this.state.shownContacts];
    copy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      shownContacts: copy
    });
  }

  sortByPopularity() {
    const copy = [...this.state.shownContacts];
    copy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({
      shownContacts: copy
    });
  }

  //! -----------------JSX-------------------!//

  render() {
    const list = [...this.state.shownContacts]; // copia el shownContacts para no afectar directamente el state

    return (
      <div className="App">
        <h1>Iron Contacts</h1>

        {/* los botones llaman a los methods con el evento onclick */}

        <button onClick={() => this.randomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

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
            {list.map((elm, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <img className="photo" src={elm.pictureUrl} height="170px" width="120px" alt={elm.name} />
                  </td>
                  <td>{elm.name}</td>
                  <td>{elm.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(idx)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
