import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { contactArray: contacts.slice(0, 5) };
  }

  newRandomContacts() {
    const anything = this.state.contactArray;
    console.log("this the anything object: ", anything);

    console.log("this is the contacts list: ", contacts);

    const randomIndex = Math.floor(Math.random() * contacts.length);
    console.log("randomIndex: ", randomIndex);

    const randomContact = contacts[randomIndex];
    console.log("this is the random contact: ", randomContact);
    anything.push(randomContact);

    console.log("this is the new anything:", anything);
    this.setState({ contactArray: anything });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <table className="App">
        <caption>
          <button onClick={() => this.newRandomContacts()}>
            Add a random contact
          </button>
        </caption>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactArray.map((oneContact, index) => {
          return (
            // add a UNIQUE key to the HTML tag you return in map()
            // (this helps React be more efficient when updating the DOM)
            <tr key={oneContact._id}>
              <td>
                <img src={oneContact.pictureUrl} className="image" />
              </td>
              <td>
                <h3>{oneContact.name}</h3>
              </td>
              <td>
                <p>Popularity: {oneContact.popularity}</p>
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default App;
