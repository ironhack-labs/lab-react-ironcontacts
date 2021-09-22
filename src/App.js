import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React from "react";
class App extends React.Component {
  state = {
    //copy just the first 5 contacts
    contacts: contacts.slice(0, 5),
  };

  //method for adding a random contact to the list
  addRandom = () => {
    let randomItem = contacts[Math.floor(Math.random() * contacts.length)];
    let copyContacts = [...this.state.contacts];
    copyContacts.push(randomItem);
    this.setState({
      contacts: copyContacts,
    });
  };

  //method for sorting the array alphabetically
  sortByName = () => {
    let sortContacts = [...this.state.contacts];
    sortContacts.sort((a, b) => a.name.localeCompare(b.name, { ignorePunctuation: true }))
    this.setState({
      contacts: sortContacts
    })
  }
  //method for sorting the array by popularity
  sortByPop = () => {
    let sortContacts = [...this.state.contacts];
    sortContacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
    this.setState({
      contacts: sortContacts
    })
  }

  //delete contact
  deleteContact = (contactId) => {
    //copy state for state update
    let copyContacts = [...this.state.contacts];
    //get ID of Item to delete
    const index = copyContacts.findIndex((copyContacts) => {copyContacts.id === contactId })
    //remove the contact
    copyContacts.splice(index, 1)

    this.setState({
      contacts: copyContacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandom}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPop}>Sort by popularity</button>
        </div>
        <div class="contactTable">
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>

            {this.state.contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} style={{ width: "20px" }} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={()=>{this.deleteContact(contact.id)}}>Delete</button></td>
                </tr>
              );
            })}
          </table>
        </div>

      </div>
    );
  }
}
export default App;

















