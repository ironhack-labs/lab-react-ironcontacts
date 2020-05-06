import React, { Component } from "react";
import contacts from "../contacts.json";

// const newArr = contacts.slice(0, 5);
// console.log(newArr);

export class DisplayContacts extends Component {
  state = {
    firsFiveContacts: [...contacts].slice(0, 5),
    allContactsButFirstFive: [...contacts].slice(6), // in order to avoid duplicates
  };

  addContact = () => {
    const contactsCopy = this.state.firsFiveContacts.slice();
    //console.log(contactsCopy.length);
    let randomNum =
      1 +
      Math.floor(
        Math.random() * (this.state.allContactsButFirstFive.length - 1)
      );
    //console.log(randomNum);
    const newContact = this.state.allContactsButFirstFive.slice(
      randomNum,
      randomNum + 1
    );
    console.log(newContact);
    this.setState({
      firsFiveContacts: contactsCopy.concat(newContact),
    });
  };

  sortByName = () => {
    //console.log("hello");
    const contactsCopy = this.state.firsFiveContacts.slice();
    this.setState({
      firsFiveContacts: contactsCopy.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      }),
    });
  };

  sortByPopularity = () => {
    const contactsCopy = this.state.firsFiveContacts.slice();
    this.setState({
      firsFiveContacts: contactsCopy.sort(function (a, b) {
        return b.popularity - a.popularity;
      }),
    });
  };

  deleteOneContact = (id) => {
    //console.log("hello");
    const contactsCopy = this.state.firsFiveContacts.slice();
    this.setState({
      firsFiveContacts: contactsCopy.filter((elem) => {
        if (elem.id === id) {
          return false; // delete the one that match
        } else {
          return true;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contacts</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <br></br>
        <br></br>

        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firsFiveContacts.map((el) => {
              return (
                <tr key={el.id}>
                  <td>
                    <img
                      style={{ width: "100px" }}
                      src={el.pictureUrl}
                      alt="stars"
                    />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteOneContact(el.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayContacts;
