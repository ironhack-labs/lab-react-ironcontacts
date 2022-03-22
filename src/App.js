import { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts, //tried to contacts.slice here but didn´t work 👀👀
  };

  // add random contact

  addRandomContact = () => {
    const remainingContacts = this.state.contacts.slice(5);
    const random =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, random],
    });
  };

  // sorting handlers

  handleSort = (event) => {
    const { name } = event.target;

    this.setState((prevState) => {
      return {
        sort: prevState.sort === name ? "" : name,
      };
    });
  };

  sortBy = () => {
    const { contacts, sort } = this.state;

    if (sort === "name") {
      return contacts.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (b.name < a.name) return 1;
        return 0;
      });
    }
    if (sort === "popularity") {
      return contacts.sort((a, b) => {
        if (a.popularity < b.popularity) return 1;
        if (b.popularity < a.popularity) return -1;
        return 0;
      });
    }
  };

  // delete contact

  deleteContact = (id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { contacts } = this.state;
    const justFiveContacts = contacts.slice(0, 5);

    this.sortBy(); // First click don´t work, need to click again, why?

    return (
      <div className="App">
        <div className="container">
          <h1>Ironcontacts</h1>
          <button
            name="random"
            className="Button"
            onClick={() => this.addRandomContact()}
          >
            Add Random Contact
          </button>
          <button
            name="popularity"
            className="Button"
            onClick={this.handleSort}
          >
            Sort by popularity
          </button>
          <button name="name" className="Button" onClick={this.handleSort}>
            Sort by name
          </button>
          <table className="table">
            <tbody>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Oscars</th>
                <th>Emmys</th>
                <th>Actions</th>
              </tr>
            </tbody>
            {justFiveContacts.map((elements, key) => {
              return (
                <tr key={key}>
                  <td>
                    <img
                      className="ContactsPics"
                      src={elements.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{elements.name}</td>
                  <td>{elements.popularity.toFixed(2)}</td>
                  <td>{elements.wonOscar ? "🏆" : ""}</td>
                  <td>{elements.wonEmmy}</td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={() => this.deleteContact(elements.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
