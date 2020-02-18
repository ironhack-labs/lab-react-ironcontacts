import React, { Component } from 'react';
import contacts from './contacts.json';


export default class TableContacts extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  addContact = () => {
    var copy = [...this.state.contacts]
    copy.push(contacts[Math.floor(Math.random() * contacts.length-1)]);
    this.setState({contacts: copy})
  }

  // sortByName = () => {
  //   var copy = [...this.state.contacts];
  //   copy.sort(function (a, b) {
  //     if(a.name < b.name) { return -1; }
  //     if(a.name > b.name) { return 1; }
  //     return 0;
  //   })
  //   this.setState({contacts: copy});
  // }

  // sortByPopularity = () => {
  //   var copy = [...this.state.contacts];
  //   copy.sort(function (a, b) {
  //     return b.popularity - a.popularity
  //   })
  //   this.setState({contacts: copy});
  // }

  sort(property) {
      var copy = [...this.state.contacts];
      copy.sort(function (a, b) {
        if(a[property] < b[property]) { return -1; }
        if(a[property] > b[property]) { return 1; }
        return 0;
      })
      this.setState({contacts: copy});
    }

  deleteContact(index) {
    console.log(index)
    var copy = [...this.state.contacts];
    this.setState({contacts: copy.filter(contact => contact.id !== index)});
  }


    render () {
      return (
      <div>
        <button id="add-contact" onClick={this.addContact}>Add a random contact</button>
        <button id="sort-name" onClick={()=>this.sort("name")}>Sort by name</button>
        <button id="sort-popularity" onClick={()=>this.sort("popularity")}>Sort by popularity</button>

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
            {this.state.contacts.map((contact, i) => (
            <tr>
                <td><img className="profile-picture" src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
