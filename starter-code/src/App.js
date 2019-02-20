import React, { Component } from "react";

import "./App.css";
import allContacts from "./contacts.json";

class App extends Component {
  // use constructor ONLY when you need a state
  constructor(props) {
    super(props);

    // initial state of the component
    // this is equal to this.state = {contacts} an object with key and value with the same name
    // this.state MUST be declared as an object with a key value pair
    this.state = { shortArray: allContacts.slice(0, 5) };
  }
  addRandomContact() {
    const RandomContactNumber = Math.floor(
      Math.random() * Math.floor(allContacts.length)
    );
    const newContacts = this.state.shortArray;
    newContacts.push(allContacts[RandomContactNumber]);
    this.setState({ shortArray: newContacts });
  }
  sortByName() {
    const newContacts = this.state.shortArray;

    function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    newContacts.sort(compare);

    this.setState({ shortArray: newContacts });
  }
  sortByPopularity() {
    const newContacts = this.state.shortArray;

    function compare(a, b) {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    }
    newContacts.sort(compare);

    this.setState({ shortArray: newContacts });
  }
  deleteContact(index) {
    const newContacts = this.state.shortArray;

    newContacts.splice(index, 1);
    this.setState({ shortArray: newContacts });
  }

  render() {
    const { shortArray } = this.state;
    // const shortArray = this.state.shortArray;
    return (
      <div className="App">
        <h1>IRON CONTACTS</h1>
        <button onClick={() => this.addRandomContact()}>
          Add random contact
        </button>{" "}
        <button onClick={() => this.sortByName()}>Sort By Name </button>
        <button onClick={() => this.sortByPopularity()}>
          Sort By Popularity{" "}
        </button>
        <table>
          {" "}
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {shortArray.map((oneContact, index) => {
            return (
              <tr>
                <td>
                  <img
                    key={oneContact.name}
                    width="50px"
                    src={oneContact.pictureUrl}
                  />
                </td>
                <td>
                  {" "}
                  <h5 key={oneContact.name}>{oneContact.name}</h5>
                </td>
                <td>
                  {" "}
                  <h5 key={oneContact.name}> {oneContact.popularity}</h5>
                </td>
                <td>
                  {" "}
                  <button onClick={() => this.deleteContact(index)}>
                    Delete{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
