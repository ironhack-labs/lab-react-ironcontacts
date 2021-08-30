// import logo from './logo.svg';
import React from "react";
import "./App.css";
import contacts from "./contacts.json";

export default class App extends React.Component {
  state = {
    contacts: contacts,
    count: 5,
  };

  addActor = () => {
    this.setState((previous) => ({ count: previous.count + 1 }));
  };

  deleteItem = (contactId) => {
    this.setState((previous) => ({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== contactId
      ),
      count: previous.count - 1,
    }));
  };

  render() {
    const getActors = () => {
      const fiveActors = [];
      while (fiveActors.length < this.state.count) {
        const randomIndex = Math.floor(Math.random() * contacts.length);
        if (!fiveActors.includes(contacts[randomIndex]))
          fiveActors.push(contacts[randomIndex]);
      }
      console.log(fiveActors);
      return fiveActors;
    };
    let fiveActors = getActors();

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button
          onClick={this.addActor}
          type="button"
          className="btn btn-danger"
        >
          Add Random Contact
        </button>
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
          <tbody value={fiveActors.length}>
            {fiveActors.map((actor) => (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} alt={actor.name} />
                </td>
                <td>
                  <strong>{actor.name}</strong>
                </td>
                <td>{actor.popularity.toFixed(2)}</td>
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
