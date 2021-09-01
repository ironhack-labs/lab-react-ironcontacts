// import logo from './logo.svg';
import React from "react";
import "./App.css";
import contacts from "./contacts.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  state = {
    contacts: [],
    count: 5,
    created: false,
  };

  addActor = () => {
    this.setState((previous) => ({ count: previous.count + 1, created: true }));
    this.getContacts();
  };

  deleteItem = (contactId) => {
    this.setState((previous) => ({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== contactId
      ),
      count: previous.count - 1,
    }));
  };

  getContacts = () => {
    const count = this.state.count;
    if (this.state.created === false) {
      const fiveActors = [];
      while (fiveActors.length < count) {
        const randomIndex = Math.floor(Math.random() * contacts.length);
        if (!fiveActors.includes(contacts[randomIndex]))
          fiveActors.push(contacts[randomIndex]);
      }
      this.setState({ created: true });
      return this.setState({ contacts: [...fiveActors] });
    } else {
      const fiveActors = this.state.contacts;
      while (fiveActors.length < count) {
        const randomIndex = Math.floor(Math.random() * contacts.length);
        if (!fiveActors.includes(contacts[randomIndex]))
          fiveActors.push(contacts[randomIndex]);
      }
      this.setState({ created: true });
      return this.setState({ contacts: [...fiveActors] });
    }
  };

  render() {
    const getSorted = (event) => {
      const { value } = event.target;
      let contactsToSort = [...this.state.contacts];
      let contactsSorted = [];
      if (value === "name") {
        contactsSorted = contactsToSort.sort((a, b) => {
          let firstEl = a.name;
          let secondEl = b.name;
          return firstEl.localeCompare(secondEl);
        });
      } else if (value === "popularity") {
        contactsSorted = contactsToSort.sort((a, b) => {
          let firstEl = a.popularity;
          let secondEl = b.popularity;
          return secondEl - firstEl;
        });
      }
      return this.setState({ contacts: [...contactsSorted] });
    };

    return (
      <div className="App container">
        <h1><strong>IRONCONTACTS</strong></h1>
        <div className="App-buttons">
          <button
            onClick={this.addActor}
            type="button"
            className="btn btn-primary"
          >
            Add Random Contact
          </button>
          <button
            value="name"
            onClick={getSorted}
            type="button"
            className="btn btn-primary"
          >
            Sort by Name
          </button>
          <button
            value="popularity"
            onClick={getSorted}
            type="button"
            className="btn btn-primary"
          >
            Sort by Popularity
          </button>
        </div>
        <table className="App-table">
          <thead>
            <tr>
              <th>
                <strong>PICTURE</strong>
              </th>
              <th>
                <strong>NAME</strong>
              </th>
              <th>
                <strong>POPULARITY</strong>
              </th>
              <th>
                <strong>ACTION</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.created === false
              ? this.getContacts()
              : this.state.contacts.map((actor) => (
                  <tr key={actor.id}>
                    <td>
                      <img src={actor.pictureUrl} alt={actor.name} />
                    </td>
                    <td>
                      <strong>{actor.name}</strong>
                    </td>
                    <td>
                      <strong>{actor.popularity.toFixed(2)}</strong>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteItem(actor.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete item
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}
