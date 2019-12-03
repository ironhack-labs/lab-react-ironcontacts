import React, { Component } from "react";
import contacts from "./contacts.json";
// import Table from "./components/Table";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactList = [...this.state.contacts, randomContact];
    this.setState({
      contacts: newContactList
    });
  }

  sortByName() {
    const newContactList = [...this.state.contacts];
    newContactList.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: newContactList
    });
  }

  sortByPopularity() {
    const newContactList = [...this.state.contacts];
    newContactList.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: newContactList
    });
  }

  deleteContact(index) {
    const newContactList = [...this.state.contacts];
    newContactList.splice(index, 1);
    this.setState({
      contacts: newContactList
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center p-4 border border-dark rounded-sm w-25 mx-auto">IronContacts</h1>
          <div className="d-flex justify-content-between w-50 mx-auto">
            <div>
              <button
                className="mx-2 btn btn-info rounded-sm"
                onClick={this.addRandomContact}
              >
                Add Random Contact
              </button>
            </div>
            <div>
              <button
                className="mx-2 btn btn-info rounded-sm"
                onClick={this.sortByName}
              >
                Sort by Name
              </button>

              <button
                className="mx-2 btn btn-info rounded-sm"
                onClick={this.sortByPopularity}
              >
                Sort by Popularity
              </button>
            </div>
          </div>
          <table className="table border-dark table-bordered m-2 p-2 w-50 center mx-auto">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.contacts.map((contacts, index) => {
                return (
                  <tr>
                    <td>
                      <img
                        className="celebPic img-fluid m-0 p-0"
                        src={contacts.pictureUrl}
                        alt=""
                      />
                    </td>
                    <td>{contacts.name}</td>
                    <td>{contacts.popularity.toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-info rounded-sm"
                        onClick={() => this.deleteContact(index)}
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
      </div>
    );
  }
}

export default App;
