import React from "react";
import allProducersContacts from "../contacts.json";
import Contact from "./Contact";

class ContactsTable extends React.Component {
  state = {
    contacts: allProducersContacts.slice(0, 5),
  };

  randomContactHandler = () => {
    let randomContact =
      allProducersContacts[
        Math.floor(Math.random() * allProducersContacts.length)
      ];
    let contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomContact);
    this.setState({
      contacts: contactsCopy,
    });
  };

  sortContacts = (method) => {
    if (method === "name") {
      return this.setState({
        contacts: this.state.contacts.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      });
    } else {
      return this.setState({
        contacts: this.state.contacts.sort(
          (a, b) => b.popularity - a.popularity
        ),
      });
    }
  };

  deleteContact = id => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="title">IronContacts</th>
            </tr>
            <tr className="btns">
              <button onClick={this.randomContactHandler}>
                Add Random Contact
              </button>
              <button onClick={()=>this.sortContacts('name')}>Sort by name</button>
              <button onClick={()=>this.sortContacts('popularity')}>Sort by popularity</button>
            </tr>
            <tr className="rowTitle">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <Contact
                  {...contact}
                  clickToDelete={() => this.deleteContact(contact.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsTable;
