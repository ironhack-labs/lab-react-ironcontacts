import React, { Component } from "react";
import contacts from "./contacts.json";
import "./Table.css";

export default class Table extends Component {
  state = {
    contactList: contacts.splice(0, 5)
  };

  addRandom = evt => {
    var newArray = [...this.state.contactList];
    var randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    newArray.push(randomContact);
    this.setState({
      contactList: newArray
    });
  };

  sortByName = evt => {
    var sortedContacts = [...this.state.contactList].sort(function(a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
    });
    this.setState({
      contactList: sortedContacts
    });
  };

  sortyByPopularity = evt => {
    var sortedPopContacts = [...this.state.contactList].sort(function(a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({
      contactList: sortedPopContacts
    });
  };

  deleteContact = evt => {
    const index = evt.target.parentElement.parentElement.getAttribute(
      "data-index"
    );
    console.log(index);
    var newArray = [...this.state.contactList];
    var arrayDeletedContact = newArray.splice(index, 1);
    this.setState({
      contactList: newArray
    });
  };

  render() {
    return (
      <div>
        <h1 className="mainTitle">IronContacts</h1>

        <div className="ButtonsContainer">
          <button className="randomButton" onClick={this.addRandom}>
            Add Random Contact
          </button>
          <button className="sortNameButton" onClick={this.sortByName}>
            Sort By Name
          </button>
          <button
            className="sortPopularityButton"
            onClick={this.sortyByPopularity}
          >
            Sort By Popularity
          </button>
        </div>
        <div className="divTableContainer">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  <h2>Picture</h2>
                </th>
                <th>
                  <h2>Name</h2>
                </th>
                <th>
                  <h2>Popularity</h2>
                </th>
                <th>
                  <h2 className="ActionHead">Action</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.contactList.map((contact, i) => (
                <tr data-index={i} key={i}>
                  <td>
                    <div>
                      <img
                        src={contact.pictureUrl}
                        alt="celebPic"
                        style={{ maxWidth: "130px" }}
                      />
                    </div>
                  </td>
                  <td>
                    {" "}
                    <h3 className="names">{contact.name}</h3>
                  </td>
                  <td>
                    {" "}
                    <h3 className="popularities">{contact.popularity}</h3>
                  </td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={this.deleteContact}
                    >
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
