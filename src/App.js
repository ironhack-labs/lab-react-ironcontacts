import React from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    initial: contacts.slice(0, 5),
  };
  randomUser = () => {
    this.state.initial.push(
      contacts[Math.floor(Math.random() * contacts.length)]
    );
    this.setState(this.state.initial);
  };
  sortByName = () => {
    this.state.initial.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.setState(this.state.initial);
  };
  sortByPopularity = () => {
    this.state.initial.sort((a, b) => {
      return a.popularity > b.popularity
        ? -1
        : a.popularity < b.popularity
        ? 1
        : 0;
    });
    this.setState(this.state.initial);
  };
  deleteUser = (id) => {
    const identifyUser = this.state.initial.findIndex((user) => user.id === id);
    this.state.initial.splice(identifyUser, 1);
    this.setState(this.state.initial);
  };
  render() {
    return (
      <div className="App">
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => this.randomUser()}
        >
          Add random user
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => this.sortByName()}
        >
          Sort by name
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => this.sortByPopularity()}
        >
          Sort by popularity
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.initial.sort().map((contact) => (
            <tr>
              <td>
                <img
                  className="col-md-4"
                  src={contact.pictureUrl}
                  alt="avatar"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteUser(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default App;