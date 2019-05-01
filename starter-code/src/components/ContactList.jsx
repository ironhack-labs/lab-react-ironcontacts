import React, { Component } from "react";
import contacts from "../data/contacts.json";
import _ from "lodash";

class ContactList extends Component {
  state = {
    currentContacts: _.take(contacts, 5)
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <button onClick={this.handleClick} className="btn btn-success">
            RandoMizeMe
          </button>
        </div>
        <table className="row table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">
                Name
                <span onClick={this.handleSort}>
                  <i className="fas fa-sort-up" />
                </span>
              </th>
              <th scope="col">
                Popularity
                <span onClick={this.handleSort}>
                  <i className="fas fa-sort-up" />
                </span>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currentContacts.map(contact => (
              <tr key={contact.name}>
                <td>
                  <img
                    style={{ height: "10%" }}
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td style={{ textAlign: "center" }}>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDelete(contact)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  handleDelete = contact => {
    const currentContacts = _.pull(this.state.currentContacts, contact);
    this.setState({ currentContacts });
  };

  handleClick = () => {
    const randomContact = _.pullAt(
      contacts,
      Math.floor(Math.random() * Math.floor(contacts.length))
    );
    const currentContacts = [...this.state.currentContacts, ...randomContact];
    this.setState({
      currentContacts: currentContacts
    });
  };

  contactLimit = data => {
    return _.take(data, 5);
  };

  handleSort = evt => {
    const label = evt.target.parentElement.parentElement.textContent.toLowerCase();
    if (label === "name") {
      const currentContacts = [...this.state.currentContacts];
      const sorted = currentContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ currentContacts: sorted });
    }
    if (label === "popularity") {
      const currentContacts = [...this.state.currentContacts];
      const sorted = currentContacts.sort(
        (a, b) => b.popularity - a.popularity
      );
      this.setState({ currentContacts: sorted });
    }
  };
}
export default ContactList;
