import "./App.css";
import React from "react";
import contactsFromJS from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contactsFromJS.slice(0, 5),
  };

  addContactHandler = () => {
    const randomActorIndex = Math.floor(Math.random() * contactsFromJS.length);
    const randomActor = contactsFromJS[randomActorIndex];

    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(randomActor),
      };
    });
  };

  sortContactNameHandler = () => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    /* console.log(this.state.contacts.sort(compare)) */

    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort(compare),
      };
    });
  };

  sortContactPopHandler = () => {
    function compare(a, b) {
      const popA = a.popularity;
      const popB = b.popularity;

      let comparison = 0;
      if (popA > popB) {
        comparison = 1;
      } else if (popA < popB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort(compare),
      };
    });
  };

  deleteContactHandler = (id) => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);

    return (
      <div className="page">
        <h1>IronContacts</h1>
        <div className="btns">
        <button onClick={this.addContactHandler}>Add Random Contact</button>
        <button onClick={this.sortContactNameHandler}>Sort by Name</button>
        <button onClick={this.sortContactPopHandler}>Sort by Popularity</button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Polularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {contacts.map((contact) => {
            return (
              <tbody>
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="actor" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button
                      onClick={() => this.deleteContactHandler(contact.id)}
                    >
                      Delete Actor
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>

      </div>
    );
  }
}

export default App;
