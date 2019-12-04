import React, { Component } from "react";
import contacts from "../contacts.json";
import CardContacts from "../components/cardContacts";

class ListContact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts,
      ironContacts: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    let copyContatc = [...this.state.ironContacts];
    copyContatc.push(
      contacts[Math.floor(Math.random() * contacts.length - 5) + 5]
    );
    console.log(copyContatc);
    this.setState({ contacts: contacts, ironContacts: copyContatc });
  };

  sortByName = () => {
    const copyContatc = [...this.state.ironContacts];
    copyContatc.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ ironContacts: copyContatc });
  };

  sortByPopularity = () => {
    const copyContatc = [...this.state.ironContacts];
    copyContatc.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ ironContacts: copyContatc });
  };

  delete = id => {
    const copyContatc = [...this.state.ironContacts];
    copyContatc.splice(id, 1);
    this.setState({ ironContacts: copyContatc });
  };

  render() {
    const ironContacts = this.state.ironContacts;

    return (
      <div className="bg-warning">
        <div className="col justify-center  ">
          <button className="btn btn-primary" onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button className="btn btn-secondary" onClick={this.sortByName}>
            Sort by name
          </button>
          <button className="btn btn-info" onClick={this.sortByPopularity}>
            Sort by popularity
          </button>
        </div>
        <table className="margin">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {ironContacts.map((elm, idx) => (
              <CardContacts
                key={idx}
                {...elm}
                deleteContact={() => this.delete(idx)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContact;
