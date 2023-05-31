import React, { Component } from "react";
import contactsJson from "../../contacts.json";
import "./Table.css";

const copyOfJson = [...contactsJson]; // importante, hacer copia con destruturing

class Table extends Component {
  state = {
    contactsToRender: [...copyOfJson].splice(0, 5),
  };

  addRandom = () => {
    this.setState((previousState) => {
      let remainingContacts = copyOfJson.filter(
        (contact) => !previousState.contactsToRender.includes(contact)
      );
      let randomNumber = Math.floor(Math.random() * remainingContacts.length);

      if (remainingContacts.length > 0) {
        return {
          contactsToRender: [
            remainingContacts[randomNumber],
            ...previousState.contactsToRender,
          ],
        };
      }
    });
  };

  sortByName = () => {
    this.setState((previousState) => {
      let sortedByName = previousState.contactsToRender.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return {
        contactsToRender: [...sortedByName],
      };
    });
  };

  sortByPopularity = () => {
    this.setState((previousState) => {
      let sortedbyPopularity = previousState.contactsToRender.sort(
        (a, b) => b.popularity - a.popularity
      );
      return {
        contactsToRender: [...sortedbyPopularity],
      };
    });
  };

  remove = (id) => {
    this.setState((previousState) => {
      let listWithOutRemoved = previousState.contactsToRender.filter(
        (contact) => contact.id !== id
      );
      return {
        contactsToRender: [...listWithOutRemoved],
      };
    });
  };

  render() {
    return (
      <>
        <div className="buttons-container">
          <button className="btn" onClick={this.addRandom}>
            Add random contact
          </button>
          <button className="btn" onClick={this.sortByName}>
            Sort by name
          </button>
          <button className="btn" onClick={this.sortByPopularity}>
            Sort by popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsToRender.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="img-contacts"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : "🔴"}</td>
                <td>{contact.wonEmmy ? "🏆" : "🔴"}</td>
                <td>
                  <button onClick={() => this.remove(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default Table;