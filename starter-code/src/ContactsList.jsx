import React, { Component } from "react";
import contacts from './contacts.json';


const displayedContacts = [];
for (let i = 0; i < 5; i++) {
  displayedContacts.push(contacts[i])
}




export default class contactsList extends Component {
  state = {
    newContact: "",
    contacts: displayedContacts
  };

  handleAdd = () => {
    const copy = [...this.state.contacts];
    copy.push(contacts[Math.round(Math.random() * contacts.length)]);
    this.setState({ contacts: copy });
  };

  handleSortName = () => {
    const copy = [...this.state.contacts];
    copy.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    });
    this.setState({ contacts: copy });
  };

  handleSortPopularity = () => {
    const copy = [...this.state.contacts];
    copy.sort(function (a, b) {
      return b.popularity - a.popularity
    });
    this.setState({ contacts: copy });
  };

  handleDelete = index => {
    const copy = [...this.state.contacts];
    copy.splice(index, 1);
    this.setState({ contacts: copy });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div className="widget-add-user">

          <button onClick={this.handleAdd}>Add Random Contact</button>
          <button onClick={this.handleSortName}>Sort by name</button>
          <button onClick={this.handleSortPopularity}>Sort by popularity</button>
        </div>

        <table className="table contact">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr key={i}>
                <th><img className="profilePicture" src={contact.pictureUrl} alt="contact picture" /></th>
                <th>{contact.name}</th>
                <th>{Math.round(contact.popularity * 100) / 100}</th>
                <th><button onClick={() => this.handleDelete(i)}>Delete</button></th>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

