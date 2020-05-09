import React, { Component } from "react";
import data from "../contacts.json";

class Contacts extends Component {
  state = {
    contact: data.slice(0, 5),
  };

  addNewContact = (e) => {
    console.log("adding new contact");
    let min = 5;
    let max = data.length;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    const copy = [...this.state.contact];
    const newContact = data[randomIndex];
    copy.push(newContact);
    this.setState({ contact: copy });
  };

  handleSortByName = (e) => {
    const copy = [...this.state.contact];
    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ contact: copy });
  };

  handleSortByPopularity = (e) => {
    const copy = [...this.state.contact];
    copy.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({ contact: copy });
  };

  handleDelete = (index) => {
    const copy = [...this.state.contact];
    copy.splice(index, 1);
    this.setState({ contact: copy });
  };

  render() {
    return (
      <div className="main">
        <button onClick={this.addNewContact}>Add a random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>
          Sort by popularity
        </button>

        <div className="main-table">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contact.map((oneContact, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={oneContact.pictureUrl}
                      alt="one doesn't show his face so easily"
                      className="pics"
                    />
                  </td>
                  <td>
                    <h3 className="name">{oneContact.name}</h3>
                  </td>
                  <td>
                    <p className="pop">{oneContact.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <button onClick={(e) => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contacts;
