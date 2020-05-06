import React, { Component } from "react";
import contacts from "../contacts.json";

// const newArr = contacts.slice(0, 5);
// console.log(newArr);

export class DisplayContacts extends Component {
  state = {
    producersContactsAllButFirstFive: [...contacts.slice(6)],
    producersContactsFirstFive: [...contacts.slice(0, 5)],
  };

  render() {
    let fiveContacts = this.state.producersContactsFirstFive;
    // here comes the logic
    const addContact = () => {
      //console.log(this.state.producersContactsFirstFive.length); // 199

      let randomNum =
        1 +
        Math.floor(
          Math.random() *
            (this.state.producersContactsAllButFirstFive.length - 1)
        );
      //console.log(randomNum);

      let newContact = this.state.producersContactsAllButFirstFive.slice(
        randomNum,
        randomNum + 1
      );
      console.log(newContact);
      //fiveContacts.concat(newContact);
      this.setState({
        producersContactsFirstFive: this.state.producersContactsFirstFive.concat(
          newContact
        ),
      });
    };

    const sortByName = () => {
      //console.log("hello");
      this.setState({
        producersContactsFirstFive: this.state.producersContactsFirstFive.sort(
          function (a, b) {
            return a.name.localeCompare(b.name);
          }
        ),
      });
    };

    const sortByPopularity = () => {
      this.setState({
        producersContactsFirstFive: this.state.producersContactsFirstFive.sort(
          function (a, b) {
            return b.popularity - a.popularity;
          }
        ),
      });
    };

    const deleteOneContact = (id) => {
      //console.log("hello");
      this.setState({
        producersContactsFirstFive: this.state.producersContactsFirstFive.filter(
          (elem) => {
            if (elem.id === id) {
              return false; // delete the one that match
            } else {
              return true;
            }
          }
        ),
      });
    };

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={addContact}>Add Random Contacts</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fiveContacts.map((el) => {
              return (
                <tr key={el.id}>
                  <td>
                    <img className="img" src={el.pictureUrl} alt="stars" />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteOneContact(el.id);
                      }}
                      // onClick={deleteOneContact}
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
