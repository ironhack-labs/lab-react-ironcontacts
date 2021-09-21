import React from "react";
import contacts from "../../contacts.json";

class ContactComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      list: contacts.slice(0, 5),
    };
  }

  showFive = () => {
    return this.state.list.map((contact, idx) => {
      return (
        <tr key={`${idx}-${contact.id}`}>
          <td>
            <img height='150px' src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.deleteContact(contact.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  addNewContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const copyContacts = [...this.state.list];
    copyContacts.push(newContact);

    this.setState({
      list: copyContacts,
    });
  };

  sortByName = () => {
    const copyContacts = [...this.state.list];
    this.setState({
      list: copyContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    });
  };

  sortByPopularity = () => {
    const copyContacts = [...this.state.list];
    this.setState({
      list: copyContacts.sort((a, b) => {
        return b.popularity - a.popularity;
      }),
    });
  };

  deleteContact = (id) => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((contact) => contact.id !== id),
    });
  };
  
  render() {
    return (
      <div className="container mb-5">
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-4">
            <button
              className="btn btn-dark btn-block"
              onClick={() => this.addNewContact()}
            >
              Add Random Contact
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-dark btn-block"
              onClick={() => this.sortByName()}
            >
              Sort by name
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-dark btn-block"
              onClick={() => this.sortByPopularity()}
            >
              Sort by popularity
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 pt-5">
            <table className="w-auto">
              <thead>
                <tr className="mb-5">
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.showFive()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
