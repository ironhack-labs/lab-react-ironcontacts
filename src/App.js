import "./App.css";
import contacts from "./contacts.json";
import React from "react";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact() {
    let newContact = "";
    const randomiser = Math.floor(Math.random() * contacts.length - 1);

    newContact = contacts[randomiser];
    this.setState((state) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  }

  sortByName = () => {
    const sortByName = this.state.contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState((state) => ({ contacts: [...sortByName] }));
  };

  sortByPopularity() {
    const sortByPopularity = this.state.contacts.sort((a, b) => {
      return parseFloat(b.popularity) - parseFloat(a.popularity);
    });

    this.setState((state) => ({ contacts: [...sortByPopularity] }));
  }

  deleteContact = (id) => {
    const deleteId = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState((state) => ({ contacts: [...deleteId] }));
  };

  deleteContact = (id) => {
    const deleteId = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState((state) => ({ contacts: [...deleteId] }));
  };

  render() {
    const renderedContacts = this.state.contacts.map((contact, index) => {
      return (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt="" style={{ width: `120px` }} />{" "}
          </td>

          <td> {contact.name} </td>
          <td> {contact.popularity.toFixed(2)} </td>
          <td>
            {" "}
            <button
              onClick={this.deleteContact}
              className="btn btn-nameDeleter"
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container-container">
        <div className="container-contacts">
          <h1>IronContacts</h1>
          <button onClick={this.addRandomContact} className="btn btn-random">
            {" "}
            Add Random Contact{" "}
          </button>
          <button onClick={this.sortByName} className="btn btn-nameSorter">
            {" "}
            Sort by Name{" "}
          </button>
          <button
            onClick={this.sortByPopularity}
            className="btn btn-nameSorter"
          >
            {" "}
            Sort by Popularity{" "}
          </button>
          <table className="table-header">
            <thead>
              <tr>
                <td>
                  <h2> Picture </h2>
                </td>
                <td>
                  <h2> Name </h2>
                </td>
                <td>
                  <h2> Popularity </h2>
                </td>
                <td>
                  <h2> Action </h2>
                </td>
              </tr>
            </thead>
            <tbody>{renderedContacts}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
