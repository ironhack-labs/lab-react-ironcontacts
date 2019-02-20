import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

const allContacts = contacts;
const initContacts = allContacts.slice(0, 5);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { contactList: initContacts };
  }

  addRandomContact() {
    const thespians = this.state.contactList;
    // const { contactList } = this.state;

    // console.log("contactList: ", this.state.contactList);
    // console.log("thespians: ", thespians);

    const randomIndex = Math.floor(Math.random() * contacts.length);
    // console.log("random index: ", randomIndex);

    const newContact = contacts[randomIndex];
    // console.log("new contact: ", newContact);

    thespians.push(newContact);
    // this.state.contacts.push(newContact);

    this.setState({ contactList: thespians });
  }

  deleteContact(contactIndex) {
    const updatedList = this.state.contactList;

    updatedList.splice(contactIndex, 1);

    this.setState({ contactList: updatedList });
  }

  render() {
    const { contactList } = this.state;

    // console.log("contacts in render: ", contacts);
    return (
      <section className="App">
        <table>
          <caption>
            IronContacts
            <button onClick={() => this.addRandomContact()}>
              add random contact
            </button>
            <button onClick={() => this.sortByName()}>sort by name</button>
            <button onClick={() => this.sortByPopularity()}>
              sort by popularity
            </button>
          </caption>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {contactList.map((oneThesp, index) => {
              return (
                <tr key={oneThesp.name}>
                  <td>
                    <img src={oneThesp.pictureUrl} alt={oneThesp.name} />
                  </td>
                  <td>{oneThesp.name}</td>
                  <td>{oneThesp.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(index)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
