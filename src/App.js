import React from "react";
import "./App.css";
import contacts from "./contacts.json";

let firstFiveContacts = contacts.slice(0, 5);

//let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

class App extends React.Component {
  state = {
    ironContacts: firstFiveContacts,
  };

  addRandomContact = () => {
    let newContacts = this.state.ironContacts.slice();

    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    newContacts.push(randomContact);

    this.setState({ ironContacts: newContacts });
  };

  render() {
    return (
      <div>
        <h2>IronContacts</h2>
        <table>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
          </tr>
          {this.state.ironContacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <img
                  style={{ width: "50px", height: "70px" }}
                  src={contact.pictureUrl}
                  alt=""
                />

                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
              </tr>
            );
          })}
        </table>
        <button onClick={this.addRandomContact}>Add random contact</button>;
      </div>
    );
  }
}

export default App;
