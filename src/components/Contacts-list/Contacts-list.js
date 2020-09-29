import React from "react";

import contacts from "../../contacts.json";

import ContactsCard from "./Contacts-card";

class ContactsList extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    };
  }

  addRandom = () => {
    const alreadyContacts = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (!alreadyContacts.includes(randomContact))
      alreadyContacts.push(randomContact);

    this.setState({
      contacts: alreadyContacts,
    });
  };

  sortByName = () => {
    const alreadyContacts = [...this.state.contacts];

    let sortedByName = alreadyContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      contacts: sortedByName,
    });
  };

  sortByPopularity = () => {
    const alreadyContacts = [...this.state.contacts];

    let sortedByPop = alreadyContacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });

    this.setState({
      contacts: sortedByPop,
    });
  };

  removeActor = (actorId) => {
    this.setState({
      contacts: this.state.contacts.filter((elm) => elm.id != actorId),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.addRandom}>Add random</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <ul>
          {this.state.contacts.map((elm) => (
            <li>
              <ContactsCard
                key={elm.id}
                {...elm}
                removeActor={() => this.removeActor(elm.id)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactsList;
