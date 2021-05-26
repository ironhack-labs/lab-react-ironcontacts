import React from "react";
import contactsJSON from "./../contacts.json";

class ContactList extends React.Component {
  state = {
    contacts: contactsJSON
      // .sort((a, b) => a.title.localCompare(b.title))
      .splice(0, 5),
  };

  handleRandomContact = () => {
    console.log("clicked !");
    const copyContacts = [...this.state.contacts];

    let randomIndex = Math.floor(Math.random() * copyContacts.length);
    console.log(randomIndex);

    let randomContact = contactsJSON.splice(randomIndex, 1);

    const copyContactsWithRandom = [...randomContact, ...this.state.contacts];

    this.setState({
      contacts: copyContactsWithRandom,
    });
  };

  handleSortByName = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: copyContacts,
    });
  };

  handleSortByPopularity = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort((a, b) => a.popularity - b.popularity);

    this.setState({
      contacts: copyContacts,
    });
  };

  handleDeleteContact = (id) => {
    console.log("Delete clicked !");

    //   const foundIndex = this.state.contacts.findIndex(
    //       (contact) => contact.name === name
    //   );

    //   const contactsCopy = [...this.state.contacts];

    //   contactsCopy.splice(foundIndex, 1);
    console.log(id);
    const contactsCopy = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    console.log(contactsCopy);

    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    return (
      <div className="contacts-container">
        <div>
          <h2 className="contacts-title">IronContacts</h2>
          <button onClick={this.handleRandomContact} className="btn btn-nav">
            Add random contact
          </button>
          <button onClick={this.handleSortByName} className="btn btn-nav">
            Sort by name
          </button>
          <button onClick={this.handleSortByPopularity} className="btn btn-nav">
            Sort by populatiry
          </button>
        </div>

        <table className="contacts-table">
          <thead className="contacts-head">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="contacts-body">
            {this.state.contacts.map((contact, index) => {
              return (
                <tr>
                  <td>
                    <img
                      className="contact-image"
                      src={contact.pictureUrl}
                      alt="profile"
                    />
                  </td>
                  <td className="contact-name">{contact.name}</td>
                  <td className="contact-popularity">{contact.popularity}</td>
                  <td>
                    <button
                      onClick={() => this.handleDeleteContact(contact.id)}
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
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

export default ContactList;
